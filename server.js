const express = require("express");
const app = express();

app.get("/", function(request, response){
   response.send("<h1>Hello World!</h1>")
});

app.get("/contact", function(request, response){
response.send("Contact me at: KevinLeister@gmail.com")
});

app.get("/about", function(request, response){
    response.send("About Me: I am 33. I live in Las Vegas. I love basketball.")
    });

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


// heroku notes on config vars:
// heroku config:set API_KEY=<your api key>
// heroku config:get API_KEY
// const apiKey = process.env.API_KEY;
// auth:`uname:${String(apiKey)}`