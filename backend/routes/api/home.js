const express = require("express");
const asyncHandler = require("express-async-handler");
const { Home } = require("../../db/models");
const { Image } = require("../../db/models");
const router = express.Router();

const errorMessage = (listingId) => {
  const err = Error("There is something wrong.");
  err.errors = [`Home Id: ${listingId} does not exist.`];
  err.title = "There is something wrong.";
  err.status = 404;
  return err;
};

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const homes = await Home.findAll();
    res.json(homes);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const home = await Home.create(req.body);
    res.json(home);
  })
);

router.delete(
  "/:listingId(\\d+)",
  asyncHandler(async (req, res, next) => {
    const listingId = req.params.listingId;
    const home = await Home.findByPk(listingId);
    console.log("home", home);
    console.log("home's homeId", home.id);
    const image = await Image.findByPk(home.id);
    console.log("image", image);
    if (home && image) {
      await image.destroy();
      await home.destroy();
      res.status(204).end();
    } else if (home) {
      await home.destroy();
      res.status(204).end();
    } else {
      next(errorMessage(listingId));
    }
  })
);

module.exports = router;
