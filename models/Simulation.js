var clColors = require("./../lib/clColors.js")
var config = require("./../config.js")

/*
	Passenger
*/

module.exports = function() {
	var me = this

	this.passengersList = null
	this.passengers = []
	this.i = 0
	this.time = 0

	this.setPlane = function(plane) {this.plane = plane}
	this.setInput = function(input) {this.input = input}
	this.setMethod = function(method) {this.method = method; this.passengersList = this.method.getList(this.input)}

	this.iterate = function() {
		this.i++
		this.time = i/2
		//for passengers in plane
		for(var i in this.passengers){
			this.passengers.iterate()
			//try to move
		}
	
		//ask to list
		if(this.plane.firstPlaceEmpty()){
			this.passengersList.next(this.time, this.plane)
		}
		//add to airplane

		//if all seated
		if(plane.filled()==this.passengersList.length){
			this.gameOver()
			//end
		}
	}
	
	this.logStructure = function() {}

	this.gameOver = function() {}

}