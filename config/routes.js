module.exports = {

	"prefix": "/api",

	"get": {

		"/": {

			controller:"hello",
			method: "world",

			filters: []
		},

		"/hello": {

			controller:"hello",
			method: "world",

			filters: []
		},

		"/user": {

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
	}
}