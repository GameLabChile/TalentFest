var clColors = require("./../../lib/clColors.js")
var config = require("./../../config.js")
var PL = require("./../PassengerList.js")

/*
	Method1
	Same Order
*/

module.exports = function() {
	var me = this

	this.getList = function(input) {
		var pl = new PL(input)
		return pl
	}

}