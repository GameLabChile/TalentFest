var clColors = require("./../lib/clColors.js")
/*
	PLANE

rows: integer
columns: [integer...] (0 = asiento, 1 = pasillo)

*/

module.exports = function(rows, columns) {
	var me = this

	if(rows == null){
		rows = 25
		columns = ["A","B","C",0,"H","I","J"]
		this.firstPlace = [3,0]
	}

	this.letterToPos = function(letter) {
		for(var j=0;j<ncols;j++){
			if(this.spaces[j][0].type==letter){
				return j
			}
		}
		return -1
	}


	this.spaces = []
	for(var i in columns){
		this.spaces.push([])
		for(var j=0;j<rows;j++){
			this.spaces[i].push({type:columns[i], fill:null})
		}
	}

	//onsole.log(this.spaces)

	this.logStructure = function() {
		console.log(clColors.blue, "---PLANE---",clColors.reset)
		var nrows = this.spaces[0].length
		var ncols = this.spaces.length

		var text = clColors.blueBg+"o"+" "
		for(var j=0;j<ncols;j++){
			if(this.spaces[j][0].type==0){
				text += clColors.green+" | | "
			}else{
				text += clColors.yellow+this.spaces[j][0].type
			}
		}
		text += " "+clColors.blueBg+"o"+clColors.reset

		console.log(text)

		for(var i=0;i<nrows;i++){
			var line = clColors.blueBg+"o"+clColors.reset+" "
			for(var j=0;j<ncols;j++){
				//if(this.spaces[j][i].type==0){
				//	line += clColors.yellow+"U"+clColors.reset
				//}
				if(this.spaces[j][i].type==0){
					line += clColors.green+" | | "+clColors.reset
				}else{
					line += clColors.yellow+"U"+clColors.reset
				}
			}
			line += " "+clColors.blueBg+"o"+clColors.reset
			console.log(line)
		}
		console.log(clColors.blue, "-----------", clColors.reset)
	}

	this.filled = function() {
		var nrows = this.spaces[0].length
		var ncols = this.spaces.length

		var res = 0

		for(var i=0;i<nrows;i++){
			for(var j=0;j<ncols;j++){
				if(this.spaces[j][i].type==0){
					if(this.spaces[j][i].fill!=null){//asiento vacio
						res++
					}
				}
			}
		}

		return res
	}

	this.addTofirstPlace = function(passenger) {
		this.spaces[this.firstPlace[0]][this.firstPlace[1]] = passenger
		passenger.position[0] = this.firstPlace[0]
		passenger.position[1] = this.firstPlace[1]
	}

	this.ask = function(place, passenger) {
		
	}

}