(function() {
    function HomeCtrl(Rooms) {
        this.chatRooms = Room.getRooms().all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Rooms', HomeCtrl]);
})();
