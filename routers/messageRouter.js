const express = require("express");
const fileDB = require("../fileDB");
const router = express.Router();
router.get("/", (req, res) => {
  res.send();
});
router.post("/", (req, res) => {
  res.send(fileDB.addMessage(req.body));
});

module.exports = router;
