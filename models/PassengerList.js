/* PassengerList */

var clColors = require("./../lib/clColors.js")
var config = require("./../config.js")
var Passenger = require("./Passenger.js")
/*
	Passenger
*/

module.exports = function(list) {
	var me = this

	this.list = list

	this.length  = list.length

	this.lastExit = -999

	this.cursor = 0

	this.next = function(time, plane) {
		if(this.cursor<this.length){
			if((this.lastExit+config.timeBetweenPassengers)<time){
				this.lastExit = time
				//change in plane
				var data = this.list[this.cursor]
				var newpassenger = new Passenger(plane, data)
				plane.addTofirstPlace(newpassenger)
				this.cursor++
			}
		}
	}

	this.logStructure = function() {
		console.log(clColors.blue, "---LIST---",clColors.reset)
		var c = [
			clColors.black, 
			clColors.red, 
			clColors.green, 
			clColors.yellow, 
			clColors.blue, 
			clColors.magenta, 
			clColors.cyan, 
			clColors.white
		]

		for(var i in this.list){
			console.log("  "+c[2]+this.list[i].seat+" "+c[this.list[i].group%8]+this.list[i].group)
		}

	}

}