/* IMPORTS */
var clColors = require("./lib/clColors.js")

var Plane = require("./models/Plane.js")
var Simulation = require("./models/Simulation.js")

var Method1 = require("./models/methods/Method1.js")

/* ------- */



/* DECLARE */
console.log(clColors.green, "Hello TalentFest")

var method = new Method1()
var plane = new Plane()

plane.logStructure()

var input = [
	{id:1, seat: "A1", group: 1},
	{id:2, seat: "A2", group: 2},
	{id:3, seat: "A3", group: 3},
	{id:4, seat: "A4", group: 4},
	{id:5, seat: "A5", group: 5}
]

var sim = new Simulation()
/* ------- */

/* SET */
sim.setPlane(plane)
sim.setInput(input)
sim.setMethod(method)
/* ------- */

sim.passengersList.logStructure()