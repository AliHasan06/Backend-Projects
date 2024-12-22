import { log } from 'console';
import express from 'express'

const app = express();
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5500",
        methods:["GET","POST"]

    }
})




io.on("connection", (socket) => {
     console.log("User Connected" , socket.id);


socket.on("message",(message)=>{
    console.log("message from frontend", message);
    
    io.emit("message",message)
})

    socket.on("disconnect",()=>{
      console.log("user disconnected successfully");
      
    })
})


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});











// io.on("connection", (socket) => {
//     console.log(socket.id);
    
// })
server.listen(3000, () => {
    console.log('listening on *:3000');
});

