
var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyBop1N_qmoHYYx7gcCNrNlcZtouPmEaSoQ",
    authDomain: "pm-blog-dee17.firebaseapp.com",
    databaseURL: "https://pm-blog-dee17.firebaseio.com",
    projectId: "pm-blog-dee17",
    storageBucket: "pm-blog-dee17.appspot.com",
    messagingSenderId: "419934625841"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.FacebookAuthProvider();
  var auth = firebase.auth()
  export {provider,auth}