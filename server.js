var express = require("express");
var multer = require("multer")
var bodyParser = require("body-parser");
var app = express();
var upload = multer();
var port = process.env.PORT || 8080;
app.locals.fileSize = 0;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.post("/", upload.any(), function(req, res, next){
    if(!req.files[0]){
        app.locals.fileSize = 0;
        res.redirect("/");
        return;
    }
    app.locals.fileSize = req.files[0].size;
    res.redirect("/");
});

app.use(function(req, res){
    res.status(404).render("404");
    res.end();
});

app.listen(port, function(){
    console.log("The app is running")
});