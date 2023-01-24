const express = require("express");
const dotenv = require("dotenv");
const Port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const routeRouter = require("./routes/route.js");
const app = express();
dotenv.config();

// set up middlewares : 
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static("./public/"))

app.use("/" , routeRouter);
app.get("/contact" , (req,res)=> {
    res.render("contact.ejs");
})

app.get("/about" , (req,res) => {
    res.render("about.ejs")
})

app.listen(Port , () => {
    console.log(`- App running on Port ${Port}`);
    console.log("...");
});