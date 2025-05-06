// 2. Write a Node.js program to read the contents of a file named data.txt and print it to the console?
const fs = require("fs");
fs.writeFileSync("data.txt", "Hello, this is a test file.", (err) => {
  if (err) console.log("Error occurred while writing to file");
  else console.log("File written successfully");
});
