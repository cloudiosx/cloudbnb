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

module.exports = router;