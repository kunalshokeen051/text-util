const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
require('dotenv').config();


app = new express();
var PORT;
var status =process.env.Status;

process.env.STATUS === 'production'?(PORT = process.env.PROD_PORT):(PORT = process.env.DEV_PORT);

app.use(express.static('public'));

app.get("/",(req,res)=>{

    // res.sendFile(__dirname+"/public/index.html");
    res.send("<h1>This is the homepage of your server</h1>");
});




app.post("/",(request,response)=>{

});




app.listen(PORT, ()=>{
    console.log("------------------------------------------------------");
    console.log("server is in "+status+" mode, listning at port: "+PORT);
    console.log("------------------------------------------------------");
});

















