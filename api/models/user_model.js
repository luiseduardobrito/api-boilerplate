var mongoose = require('../adapters/mongoose');
var check = require('mongoose-validator').validate;

var Schema = mongoose.schema;

var UserSchema = new Schema({

	name: {

		required: true,
		type: String
	},

	email: {

		required: true,

		type: String,
		validate: [
			check('isEmail'),
			check('len', 3)
		]
	},

	password: {

		// For social authentication
		required: false,

		type: String,
		validate: check('len', 6)
	},

	social: [{

		access_token: {
			type: String,
		},

		provider: {
			type: String,
			enum: ['email', 'google', 'facebook'],
			default: 'email'
		}
	}],

	devices: [{

		imei: String,

		os: {

			name: {
				type: String,
				enum: ['iOS', 'Android', 'Windows Phone']
			},

			version: String
		},

		number: String
	}],

	// // Store user location
	// localization: [{
	// 	lat: String,
	// 	lng: String
	// }],

	uri: String,
	image: String

}, {
	toObject: {
		virtuals: true
	}
});

UserSchema
	.virtual('isMobile')
	.get(function () {
		return (!!this.devices.length)
	});

UserSchema
	.virtual('isWeb')
	.get(function () {
		return (!this.devices.length)
	});

module.exports = UserSchema;