(function() {
     function HomeCtrl(Room){
         console.log('hello');
         this.chatRooms = Room.all;
     }


     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', HomeCtrl]);
 })();
