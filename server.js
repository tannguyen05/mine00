var express = require("express");
var app = express();


app.listen(process.env.PORT || 3300, () => {console.log("Server started...");});
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.render("index");
});