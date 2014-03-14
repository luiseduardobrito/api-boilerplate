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

			filters: []
		}
	}
}