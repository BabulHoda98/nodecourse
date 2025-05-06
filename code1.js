const http=require("http");
let PORT=3001
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write("<h1>Hello world!</h1>");
});
server.listen(PORT,()=>{
    console.log(`Server is running on port at http://localhost${PORT}`);
});
