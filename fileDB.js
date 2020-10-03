const fs = require("fs");
const util = require("util");

const dirPath = "./messagesDir";

const readFile = async (path) => {
  return JSON.parse(await util.promisify(fs.readFile)(path));
};
const readdir = async (path) => {
  return await util.promisify(fs.readdir)(path);
};

module.exports = {
  async getMessages() {
    const datetime = new Date().toJSON();

    const messages = Promise.all(
      (await readdir(dirPath))
        .sort((a, b) => new Date(a.slice(8, -5)) - new Date(b.slice(8, -5)))
        .filter((filePath, index, arr) => index > arr.length - 6)
        .map((filePath) => readFile(dirPath + "/" + filePath)),
    );
    return {
      "datetime of request": datetime,
      message: "Got messages.",
      body: await messages,
    };
  },
  addMessage(message) {
    const datetime = new Date().toJSON();
    if (
      typeof message.title === "string" &&
      message.title &&
      typeof message.author === "string" &&
      message.title &&
      typeof message.description === "string" &&
      message.title
    ) {
      fs.writeFile(
        "./messagesDir/message-" + datetime + ".json",
        JSON.stringify({ ...message, datetime }),
        console.log,
      );
      return { message: "Message added!", "datetime of request": datetime };
    } else {
      return {
        message: "Not valide data.",
        datetime,
      };
    }
  },
};
