var mongoose = require('../adapters/mongoose');
var User = mongoose.model('user');

module.exports = {

	me: function(req, res) {

		User.findOne(req.cookies.user_id, function(err, me) {

			if(err) {

				return res.json({
					result: 'error',
					exception: err
				});
			}

			else if(!me) {

				res.cookie('logged_in', 'false');
				res.cookie('user_id', 'true');

				return res.json({

					result: 'error',
					exception: {
						code: 1001,
						message: 'Internal error, user not found'
					}
				});
			}

			return res.json({
				result: 'success',
				user: me
			});
		})
	},

	create: function(req, res) {

		// Create new user with supplied info
		var user = new User({
			name: req.param('name'),
			email: req.param('email'),
			password: req.param('password'),
			social: req.param('social'),
			devices: req.param('devices'),
			uri: req.param('uri'),
			image: req.param('image')
		});

		// Try to save to database
		user.save(function(err) {

			if(err) {

				if (11000 === err.code || 11001 === err.code) { 

					return res.json({
						result: 'error',
						exception: {
							code: 11000,
							message: 'This email is already being used in another account',
						}
					})
				}

				else {
					return res.json({
						result: 'error',
						exception: err
					})
				}
			}

			return res.json({
				result: 'success',
				user: user
			})
		})
	},

	login: function(req, res) {
		
		User.auth({

			email: req.param('email'),
			password: req.param('password')

		}, function(err, me) {

			if(err) {
				return res.json({
					result: 'error',
					exception: err
				})
			}

			res.cookie('logged_in', 'true');
			res.cookie('user_id', me._id);

			return res.json({
				result: 'success',
				user: me
			})
		})
	},

	logout: function(req, res) {

		res.cookie('logged_in', 'false');
		res.cookie('user_id', null);

		res.json({
			result: 'success',
			message: 'User logged out successfully'
		})
	},

	add_device: function(req, res) {

		User.findOne(req.cookies.user_id, function(err, me) {

			if(err) {

				return res.json({
					result: 'error',
					exception: err
				});
			}

			else {

				me.devices.push({
					imei: req.param('imei'),
					os: req.param('os')
				})

				me.save(function(err) {

					if(err) {

						return res.json({
							result: 'error',
							exception: err
						});
					}

					else {
						res.json({
							result: 'success',
							user: me
						})
					}
				})
			}
		})
	}
}