var mongoose = require('../adapters/mongoose');

var User = mongoose.model('user');

module.exports = {

	me: function(req, res) {

		res.json({
			user: 'me'
		});
	}
}