const express=require("express"); 
const EventEmitter = require("events")
const app= express();
const event = new EventEmitter();

event.on("countApi",() =>{
    console.log("event called")
})
app.get("/", function(req,res){
  res.send("Welcome to the world of science fiction, conflicting theories, fantasies and some eccentric nerds!")
  event.emit("countApi")
});
app.get("/search", function(req,res){
  res.send("search api")
})
app.get("/update", function(req,res){
  res.send("update api")
})
app.listen(3000, function(){
        console.log("SERVER STARTED ON localhost:3000");     
})