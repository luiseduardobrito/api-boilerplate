var mongoose = require('./adapters/mongoose');

var User = mongoose.model('user');

module.exports = {

	world: function(req, res) {

		res.json({
			hello: 'world'
		});
	}
}