// 5.Create a Readable Stream to read data from notes.txt and print each chunk on the console.
const fs = require("fs");
const readableStream = fs.createReadStream("notes.txt", {
  encoding: "utf8",
  highWaterMark: 16 * 1024, // 16KB chunk size
});
readableStream.on("data", (chunk) => {
  console.log("Chunk received:", chunk);
});
readableStream.on("end", () => {
  console.log("No more data to read.");
}); 
readableStream.on("error", (err) => {
  console.error("Error reading the file:", err);
});

//error 
