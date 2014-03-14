var mongoose = require('../adapters/mongoose');
var Schema = mongoose.schema;
var extend = require('mongoose-schema-extend');

var Exception = require("../adapters/exceptions");
var check = require('mongoose-validator').validate;
var bcrypt = require('bcrypt');

var UserSchema = require('./user_model');

var AdminSchema = new UserSchema.extend({

});