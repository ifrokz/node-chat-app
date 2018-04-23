var socket = io();

socket.on('connect',function () {
    socket.emit('getRoomsList');
});

socket.on('newRoomsList', function (rooms){
    console.log(rooms)
    var list = jQuery('#rooms-list');
    var ul = jQuery('<ul></ul>')
    rooms.forEach(function(room) {
        ul.append(jQuery('<li class="room"></li>').text(room));
    });

    list.html(ul)
});
