// Creating a Promise
const displayMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, this is a Promise message!");
    }, 1000);
  });
};

// Calling the Promise
displayMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error("Error:", error));

const fs = require("fs").promises;

const createFile = async () => {
  try {
    await fs.writeFile(
      "message.txt",
      "Hello, this is written using fs module!"
    );
    console.log("File created successfully!");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

// Call the function
createFile();
