// import the express modules
const express = require(`express`);
//setup express app
const app = express();
//set a simple for homepage route
const port = 8000;


//a get route for adding a cookie
app.get('/',(req,res)=>{
  res.sendFile('server.html',{root:__dirname});
})

//server listening to port 8000
app.listen(port,()=>{
  console.log(`App is listening at port ${port}`)
})


/*
_____________________________________________________________________________
Types of HTTP Request Methods=>
1.get=> is used to retrieve data from a web server
2.post=> is used to send data to the server
3.patch=>similar to PUT request will only replace the content that you want to update
4.put=> is used to modify the data on the server
5.delete=> s used to delete the data on the server at a specified location
_____________________________________________________________________________
*/