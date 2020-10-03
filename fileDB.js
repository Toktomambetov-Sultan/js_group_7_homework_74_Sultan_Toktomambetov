const fs = require("fs");
// fs.readdir("/messagesDir", console.log);

module.exports = {
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
      return { message: "Message added!", datetime };
    } else {
      return {
        message: "Not valide data.",
        datetime,
      };
    }
  },
};
