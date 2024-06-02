var express = require('express');
var app = express();

var server = app.listen(3000, function () {
    console.log('Socket server is running on port 3000');
  });

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection)

var first = true;
//servervar currentPlayer;
var player1, player2;
var currentPlayer = 'O';


function newConnection(socket){
    console.log('New connection: ' + socket.id);
    socket.on('position', posMsg);
    function posMsg(data){
        socket.broadcast.emit('position', data);
        //io.sockets.emit('position', data);
        console.log(data);
        
    }

    socket.on('textchat', chatMsg);
    function chatMsg(chat){
        socket.broadcast.emit('textchat', chat);   
        console.log(chat);    
    }
    
    // if (first == true)
    // {
    //     player1 = socket.id;
    //     first = false;
    
    // }
    // else
    //     player2 = socket.id;


    // function turns()
    // {
    //     var player1Turn = true;

    //     if (player1Turn)
    //         {
    //             socket.emit('playerTurn', player1);
    //             player1Turn = false;
    //         }
    //     else
    //         {
    //             socket.emit('playerTurn', player2);
    //             player1Turn = true;
    //         }
    // }


    
    // // Listen for the 'playerTurn' signal from the other player
    // socket.on('playerTurn', (data) => {
    //     currentPlayer = data;
    //     socket.broadcast.emit('playerTurn', currentPlayer );
    //     console.log('Player ' + currentPlayer + "'s turn");
    // });
    
}