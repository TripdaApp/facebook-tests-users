var FBTestUsers = require('fb-test-users');
var config = require('./config.js');

fbUsers = new FBTestUsers({
  appID: config.appId,
  secret: config.appSecret
});

var total = process.argv[2];
var SINGLE_SENTENCE = ":shipt: Hey %s facebook test user was removed :smile:";
var PLURAL_SENTENCE = ":shipt: Hey %s facebook test users have been removed :smile:";

function writeResponse(total) {
    var sentence = total > 1 ? PLURAL_SENTENCE : SINGLE_SENTENCE;
    console.log(sentence, total);
}

fbUsers.list(total, function(err, users) {
  var removed = 0;
  users.forEach(function(user){
    fbUsers.delete(user.id, function(error, success){
      removed++;

      if (removed == total) {
          writeResponse(total);
      }
    });
  });

});
