const express = require("express");
const asyncHandler = require("express-async-handler");
const { Home } = require("../../db/models");
const router = express.Router();

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
    const {
      userId,
      name,
      address,
      city,
      state,
      country,
      price,
      description,
      title,
      imageUrl,
    } = req.body;
    const homes = await Home.create({
      userId,
      name,
      address,
      city,
      state,
      country,
      price,
      description,
      title,
      imageUrl,
    });
    res.json(homes);
  })
);

module.exports = router;
