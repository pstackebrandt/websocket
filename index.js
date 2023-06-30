'use strict';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector('main');
    elements.btnUpdate = document.querySelector('#btnUpdate');
    elements.btnUpdateDate = document.querySelector('#btnUpdateDate');
    elements.btnUpdateDay = document.querySelector('#btnUpdateDay');
    elements.btnCreateDatabase = document.querySelector('#btnCreateDatabase');
    elements.btnGetEntryFromDB = document.querySelector('#btnGetEntryFromDB');
}

const appendEventListener = () => {
}

var socket = io();
        var form = document.getElementById('form');
        var input = document.getElementById('input');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (input.value) {
                socket.emit('chat message written', input.value);
                input.value = '';
            }
        });

        socket.on('chat message received', function (msg) {
            var item = document.createElement('li');
            item.textContent = msg;
            document.getElementById('messages').appendChild(item);
            //alert(msg);
        });

const init = () => {
    domMapping();
    appendEventListener();
    socket();
}

// INIT
init();