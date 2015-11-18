var RNInstagramOAuth = require('react-native-instagram-oauth');
var RNInstagramShare = require('react-native-instagram-share');

function RNInstagram(client_id, redirect_url){
  this.access_token = undefined;
  var that = this;
  return RNInstagramOAuth(instagram.client_id, instagram.redirect_url, (err, access_token) => {
     if (err) { console.log(err) }
     if (access_token !== undefined) {
         console.log(access_token);
         that.access_token = access_token;
         return access_token;
     }
  });
}

RNInstagram.prototype.getMe = function(access_token, callback) {
    fetch('https://api.instagram.com/v1/users/self/?access_token='+access_token)
        .then((response) => response.json()).then((responseData) => {
            callback({data: responseData});
        })
        .catch(function(error) {
            callback({error: error});
        });
};


RNInstagram.prototype.getUserById = function(userid, access_token, callback) {
    fetch('https://api.instagram.com/v1/users/'+userid+'/?access_token='+access_token)
        .then((response) => response.json()).then((responseData) => {
            callback({data: responseData});
        })
        .catch(function(error) {
            callback({error: error});
        });
};


RNInstagram.prototype.getMyFeed = function(id, access_token, callback) {
    fetch('https://api.instagram.com/v1/users/self/feed?access_token'+access_token)
        .then((response) => response.json()).then((responseData) => {
            callback({data: responseData});
        })
        .catch(function(error) {
            callback({error: error});
        });
};


RNInstagram.prototype.getFeedByUserId = function(userid, access_token, callback) {
    fetch('https://api.instagram.com/v1/users/'+userid+'/feed?access_token'+access_token)
        .then((response) => response.json()).then((responseData) => {
            callback({data: responseData});
        })
        .catch(function(error) {
            callback({error: error});
        });
};


module.exports = RNInstagram;
