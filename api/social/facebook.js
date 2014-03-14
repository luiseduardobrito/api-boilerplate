var Provider = require('./provider');
var graph = require('fbgraph');

var facebookProvider = new Provider({
	
	login: function(token, fn) {

		var _this = this;

		graph.setAccessToken(token);

		var params = {
			fields: "id,name,email",
			access_token: token
		};

		graph.get("me", params, function(err, data){

			if(err) {
				fn(err, null);
				return;
			}

			_this.profilePicture(data.id, function(err, picture) {

				fn(null, {

					email: data.email

				}, {

					name: data.name,
					email: data.email,
					image: picture,

					social: {
						provider: "facebook",
						access_token: token
					}
				});
			})
		})		
	},

	profilePicture: function(fbid, fn) {

		fn = fn || function(){};

		var pictureUrl = "http://graph.facebook.com/" + fbid.toString() + "/picture?type=large";

		request(pictureUrl, function(error, response, body) {

			if(error)
				return fn(error, null);
			else
				return fn(null, response.request.uri.href)

		})
	}
});

module.exports = facebookProvider;