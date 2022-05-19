const express = require("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"views")));

app.get("/",(req,res)=>{
	res.render(path.join(__dirname,"views/index.ejs"));
});

app.get("/signIn",(req,res)=>{
	res.render(path.join(__dirname,"views/signIn.ejs"));
});

app.get("/signUp",(req,res)=>{
	res.render(path.join(__dirname,"views/signUp.ejs"));
});

app.use("*",(req,res)=>{
	res.status(404).render(path.join(__dirname,"views/404.ejs"));
});

app.listen(2200,()=>"Ready on port 2200");
