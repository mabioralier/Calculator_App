
//=======Require all the node module using npm ======

const express = require("express");
const bodyParser= require("body-parser");


//Create the instance of the express ================

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


// Create the home route for get request=============

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});


//Create the post request=============================

app.post("/", function(req, res){
 
    var num1 =Number(req.body.num1);
    var num2 =Number(req.body.num2);
    var result = num1 + num2 ;
    
    res.send("The sum of " + num1  +  " + " + num2 + " = " + result ); 
});




//Start the server 
app.listen(8080, function(){
   console.log("server start at port 8080");
});