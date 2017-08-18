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
				var newpassenger = New Passenger(plane, data)
				plane.addTofirstPlace()
				this.cursor++
			}
		}
	}

}