var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'ivan',
        text: 'Hey, soy ivan'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected')
});

socket.on('newMessage', function (message) {
    console.log('New message.', message);
});