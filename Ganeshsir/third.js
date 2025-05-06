// 3. Create a new file named greeting.txt and write "Good Morning!" into it using Node.js.
const fs=require("fs");
fs.writeFileSync("greeting.txt","Good Morning!",(err)=>{
    if(err)console.log("Error occured");
        else console.log("File written Successfully");
});