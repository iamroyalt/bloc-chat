(function() {
    function RoomCtrl(Rooms) {
        ths.chatRooms = Room.rooms
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', RoomCtrl);
})();
