const express = require("express");
const fileDB = require("../fileDB");
const router = express.Router();
router.get("/", async (req, res) => {
  res.send(await fileDB.getMessages());
});
router.post("/", (req, res) => {
  res.send(fileDB.addMessage(req.body));
});

module.exports = router;
