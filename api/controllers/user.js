var mongoose = require('../adapters/mongoose');
var inputHelper = require("../adapters/input");

var User = mongoose.model('user');

module.exports = {

	me: function(req, res) {

		res.json({
			user: 'me'
		});
	},

	create: function(req, res) {

		// Create new user with supplied info
		var user = new User({
			name: req.param("name"),
			email: req.param("email"),
			password: req.param("password"),
			social: req.param("social"),
			devices: req.param("devices"),
			uri: req.param("uri"),
			image: req.param("image")
		});

		// Try to save to database
		user.save(function(err) {

			if(err) {

				if (11000 === err.code || 11001 === err.code) { 

					return res.json({
						result: "error",
						exception: {
							code: 11000,
							message: "This email is already being used in another account",
						}
					})
				}

				else {
					return res.json({
						result: "error",
						exception: err
					})
				}
			}

			return res.json({
				result: "success",
				user: user
			})
		})
	},

	login: function(req, res) {
		return;
	},

	logout: function(req, res) {
		return;
	}
}