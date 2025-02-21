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
