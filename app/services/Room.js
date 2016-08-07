(function() {
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
// Initialize Firebase
//var config = {
  //apiKey: "AIzaSyDd6jdI8fv10_j6KLhyHmNPdqAxd9Zeiu0",
  //authDomain: "bloc-chat-efe8a.firebaseapp.com",
  //databaseURL: "https://bloc-chat-efe8a.firebaseio.com",
  //storageBucket: "",
};
//firebase.initializeApp(config);
