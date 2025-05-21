console.log("This is Node course");

const fs = require('fs');
fs.writeFileSync("output.txt", "Writting File",(err)=>{
    if(err)console.log("Error occured");
        else console.log("File written Successfully");
});