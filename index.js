var clColors = require("./lib/clColors.js")
var Plane = require("./models/Plane.js")
var Simulation = require("./models/Simulation.js")


console.log(clColors.green, "Hello TalentFest")


var plane = new Plane(25, [0,0,0,1,0,0,0])
plane.logStructure()

var input = [
	{id:1, sit: "A1", group: 1},
	{id:2, sit: "A2", group: 2},
	{id:3, sit: "A3", group: 3},
	{id:4, sit: "A4", group: 4},
	{id:5, sit: "A5", group: 5}
]

var sim = new Simulation()
sim.setPlane(plane)
sim.setInput(input)
sim.setMethod(method)