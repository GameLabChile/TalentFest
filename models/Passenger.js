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
	this.seatPos = [null, null]

	this.wait = 0
	this.toWait = 0

	this.life = 0

	this.data = data

	//this.position[0] = plane.firstPlace[0]
	//this.position[1] = plane.firstPlace[1]
	//this.plane

	this.seat = data.seat
	this.seatPos[0] = plane.letterToPos(this.seat[0])
	this.seatPos[1] = +this.seat[1]
	
	this.withBag = true

	this.status = "walking"

	this.iterate = function() {

		var next = [null, null]
		if(this.seatPos[1]!=this.position[1]){
			next[0] = this.position[0]
			if(this.seatPos[1]>this.position[1]){
				next[1] = this.position[1]+1
			}else{
				next[1] = this.position[1]-1
			}
		}else{
			next[1] = this.position[1]
			if(this.seatPos[0]>this.position[0]){
				next[0] = this.position[0]+1
			}else{
				next[0] = this.position[0]-1
			}
		}

		this.plane.ask(next, this)

	}

	this.logStructure = function() {}




}