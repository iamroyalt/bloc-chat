(function() {
    function RoomCtrl(Room) {
        ths.chatRooms = Room.rooms
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', RoomCtrl);
})();
