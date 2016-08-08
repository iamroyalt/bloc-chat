(function() {
  console.log("Room.js file")
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://bloc-chat-efe8a.firebaseio.com")
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
