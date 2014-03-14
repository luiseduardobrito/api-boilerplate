var SocialProvider = function(name, obj) {
	
	var _this = this;
	var _public = {};

	_this.name = name;
	_this.provider = obj;

	_this.init = function(){

		if(!_public.login) {
			throw new Error("No login method in '" + _this.name + "' provider");
		}

		return _public;
	}

	_public.login = function(token, fn) {

		fn = fn || function();

		_this.provider.call(_this.provider)
	}
};

exports = SocialProvider;