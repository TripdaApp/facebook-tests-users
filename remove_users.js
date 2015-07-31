var FBTestUsers = require('fb-test-users');
var config = require('./config.js');

fbUsers = new FBTestUsers({
  appID: config.appId,
  secret: config.appSecret
});

var total = process.argv[2];

fbUsers.list(total, function(err, users) {
  var removed = 0;
  users.forEach(function(user){
    fbUsers.delete(user.id, function(error, success){
      removed++;

      if (removed === total) {
        console.log(':shipit: Hey %s facebook test users are removed :smile:', total);
      }
    });
  });

});
