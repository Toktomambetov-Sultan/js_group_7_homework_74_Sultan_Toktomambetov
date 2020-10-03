const express = require("express");
const messageRouter = require("./routers/messageRouter");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/messages", messageRouter);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});
