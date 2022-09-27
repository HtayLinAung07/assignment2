
const express=require('express');
const { version } = require('os');
const app=express();
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/assi2.html'));
})

app.get('/about', (req, res) => {
  res.send(
    "<div><h1> Welcome </h1><p>  We developed for the flower lover easy to know type of Flowers.We hope you enjoy to our page.</p></div> "
    
  );
})

app.get('/contact', (req, res) => {
  res.send(
    "<div id=contact><div> <h1>Contact Us</h1><label for='email' style='margin-bottom=2px;'>Email<div><input type='email'style='margin-bottom:10px;'> <br><textarea  cols='30' rows='3 ' style='margin-bottom:10px;' ></textarea></div> <div ><button type='button' style='background-color: aqua;  border: none; border-radius: 20px;' >Send</button></div></div>"
    
  )
  })



app.listen(8080,()=>{
console.log("Sever starting up at: port 8080");
})





// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


// const http = require('http')
// const port = 8080
  
// // Create a server object:
// const server = http.createServer(function (req, res) {
  
//     // Write a response to the client
//     res.write('Hello World')
  
//     // End the response 
//     res.end()
// })
  
// // Set up our server so it will listen on the port
// server.listen(port, function (error) {
  
//     // Checking any error occur while listening on port
//     if (error) {
//         console.log('Something went wrong', error);
//     }
//     // Else sent message of listening
//     else {
//         console.log('Server is listening on port' + port);
//     }
// })

