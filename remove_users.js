var FBTestUsers = require('fb-test-users');

fbUsers = new FBTestUsers({
  appID: "",
  secret: ""
});

var total = 100;

fbUsers.list(total, function(err, users) {
  var removed = 0;
  users.forEach(function(user){
    fbUsers.delete(user.id, function(error, success){
      removed++;

      if (removed == total) {
        console.log(':shipit: Hey %s facebook test users are removed :smile:', total);
      }
    });
  });


});
