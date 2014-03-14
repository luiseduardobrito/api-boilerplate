var mongoose = require('../adapters/mongoose');
var check = require('mongoose-validator').validate;

var Schema = mongoose.schema;

var UserSchema = new Schema({

	name: {

		required: true
		type: String
	},

	email: {

		required: true,

		type: String,
		validate: [
			check('isEmail'),
			check('isLength', 3)
		]
	},

	password: {

		// For social authentication
		required: false,

		type: String,
		validate: check('isLength', 6)
	},

	social: {

		access_token: {
			type: String,
		},

		provider: {

			type: String,
			enum: ['email', 'google' 'facebook'],
			default: 'email'
		},
	},

	uri: {

		type: String
	},

	image: {

		type: String
	},

}, {
	toObject: {
		virtuals: true
	}
})