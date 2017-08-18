var clColors = require("./../lib/clColors.js")
var config = require("./../config.js")

/*
	Passenger
*/

module.exports = function(plane, data) {
	var me = this

	this.plane = plane

	this.seat = null
	this.position = [null, null]
	

	this.wait = 0
	this.toWait = 0

	this.life = 0
	
	this.iterate = function() {

	}

	this.logStructure = function() {}




}