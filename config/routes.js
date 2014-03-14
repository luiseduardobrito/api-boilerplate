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

		"/admin": "/admin/info",

		"/admin/info": {

			controller: "admin",
			method: "info".

			filters: ["authenticated"] //,'operator']
		},

		"/admin/sample_hidden_command": {

			controller: "hello",
			method: "world".

			filters: ["authenticated", "admin"]
		},
	},

	post: {

		"/user/create": {

			controller:"user",
			method: "create",

			filters: []
		},

		"/admin/create": {

			controller:"admin",
			method: "create",

			filters: ["authenticated"] //,'root']
		},

		"/user/device": {

			controller:"user",
			method: "add_device",

			filters: ["authenticated"]
		},
	}
}