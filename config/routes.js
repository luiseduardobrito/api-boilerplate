module.exports = {

	"prefix": "/api",

	"get": {

		"/": "/hello",

		"/hello": {

			controller:"hello",
			method: "world",

			filters: []
		},

		"/user": "/user/me",

		"/user/me": {

			controller:"user",
			method: "me",

			filters: ["authenticated"]
		},

		"/user/login": {

			controller:"user",
			method: "login",

			filters: []
		},

		"/user/logout": {

			controller:"user",
			method: "logout",

			filters: ["authenticated"]
		},
	},

	post: {

		"/user/create": {

			controller:"user",
			method: "create",

			filters: []
		},

		"/user/device": {

			controller:"user",
			method: "add_device",

			filters: ["authenticated"]
		},
	}
}