const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"views")));

app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,"views/index.html"));
});

app.use("*",(req,res)=>{
	res.status(404).sendFile(path.join(__dirname,"views/404.html"));
})

app.listen(2200,()=>"Ready on port 2200");
