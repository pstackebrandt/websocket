const express=require('express');
const http=require('http');
const { Server }=require("socket.io");

const app=express();
const server=http.createServer(app);
const io=new Server(server);

//const nano=require('nano')('http://localhost:5984');
//const dbName='obst';

io.on('connection',(socket)=>{
    console.log('New user connected');
    
    socket.on('chat message written',(msg) => {
        console.log('message:'+msg);
        io.emit('chat message received',msg);
    });

    socket.on('disconnect',()=>{
        console.log('User disconnected');
    });
});

let db;

var init=async()=>
{
    await nano.db.create(dbName);
    console.log('Datenbank erstellt');
}

var setup = async() =>
{
    db=nano.use(dbName);
    console.log('DB bereit');
}

//setup();
/*
app.post('/add',function(req,res){
    console.log(req);
});*/

//app.post('/', function(req,res){console.log(req);});
//app.get('/add', function(req,res){console.log(req);});
app.get('/chat', (req,res) => {
    //res.send('Hallo Welt!');
    console.log('kontakt zum Browser');
    res.sendFile('c:/stuff/index2.html');
});

server.listen(3000,() => {
    console.log('server bereit auf Port 3000');
});

console.log('Node bereit');