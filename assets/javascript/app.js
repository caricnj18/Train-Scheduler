/*Code this app to calculate when the next train will arrive; this should be relative to the current time.*/

/* Users from many different machines must be able to view same train times.*/

/*button*/
$('#submitTrain').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $btn.button('reset')
  })
</sc>

/*firebase*/

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDic3jJTTyJTa6QsFouYsIkOXBHFcB7R4s",
    authDomain: "trainschedule-da4dc.firebaseapp.com",
    databaseURL: "https://trainschedule-da4dc.firebaseio.com",
    projectId: "trainschedule-da4dc",
    storageBucket: "trainschedule-da4dc.appspot.com",
    messagingSenderId: "7757671888"
  };
  firebase.initializeApp(config);


