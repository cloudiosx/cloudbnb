const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");
const router = express.Router();

const errorMessage = (reviewId) => {
  const err = Error("There is something wrong.");
  err.errors = [`Review Id: ${reviewId} does not exist.`];
  err.title = "There is something wrong.";
  err.status = 404;
  return err;
};

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll();
    res.json(reviews);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const home = await Review.create(req.body);
    res.json(home);
  })
);

router.put(
  "/:reviewId(\\d+)/edit",
  asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId);
    const updatedReview = req.body;

    await review.update(updatedReview);
    res.json(review);
  })
);

router.delete(
  "/:reviewId(\\d+)",
  asyncHandler(async (req, res, next) => {
    const reviewId = req.params.reviewId;
    const review = await Review.findByPk(reviewId);
    if (review) {
      await review.destroy();
      res.status(204).end();
    } else {
      next(errorMessage(reviewId));
    }
  })
);

module.exports = router;
