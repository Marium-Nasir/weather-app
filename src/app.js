const express =  require("express");
const app =  express();
const path = require("path");
const hbs = require("hbs");
const staticpath = path.join(__dirname,"../public");
// const patialspath = path.join(__dirname,"../templates/partials");
const viewspath = path.join(__dirname,"../templates/views");

app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set('views',viewspath);

// hbs.registerPartials(patialspath);

app.get('/',(req,res)=>{
    res.render("index");
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})


app.listen(7000,()=>{
    console.log("hello")
})