const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//const nano=require('nano')('http://localhost:5984');
//const dbName='obst';

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('chat message written', (msg) => {
        console.log('message:' + msg);
        // io.emit('chat message received', msg);
        socket.broadcast.emit('chat message received',msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

let db;

var init = async () => {
    await nano.db.create(dbName);
    console.log('Datenbank erstellt');
}

var setup = async () => {
    db = nano.use(dbName);
    console.log('DB bereit');
}

//setup();
/*
app.post('/add',function(req,res){
    console.log(req);
});*/

//app.post('/', function(req,res){console.log(req);});
//app.get('/add', function(req,res){console.log(req);});
app.get('/chat', (req, res) => {
    //res.send('Hallo Welt!');
    console.log('kontakt zum Browser chat page type 1');
    res.sendFile('C:/Users/peter/code/javascript/js_workshop_alfa/websocket/public/index.html');
});

app.get('/chat2', (req, res) => {
    //res.send('Hallo Welt!');
    console.log('kontakt zum Browser with page type 2 chats per page');
    res.sendFile('C:/Users/peter/code/javascript/js_workshop_alfa/websocket/public/index_2_chats_on_page.html');
    
});


server.listen(3000, () => {
    console.log('server bereit auf Port 3000');
});

console.log('Node bereit');