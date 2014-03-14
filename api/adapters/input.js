var InputAdapter = function() {

	var _this = this;
	var _public = {};

	_this.init = function() {
		return _public;
	}

	_public.check = function(req, params, fn) {
		return;
	}

	return _this.init();
}

module.exports = new InputAdapter();