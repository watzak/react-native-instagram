var RNInstagramOAuth = require('react-native-instagram-oauth');
var RNInstagramShare = require('react-native-instagram-share');

var RNInstagram = {

  var atoken = undefined;

	setup(client_id, redirect_url) {
    return RNInstagramOAuth(client_id, redirect_url, (err, access_token) => {
       if (err) { console.log(err) }
       if (access_token !== undefined) {
           atoken = access_token;
           return access_token;
       }
    });
	}

};

module.exports = RNInstagram;
