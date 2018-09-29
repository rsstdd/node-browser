const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.post("/api/get-company", async (req, res, next) => {
  if (!req.body) {
    return res.sendStatus(406);
  }

});

module.exports = router;
