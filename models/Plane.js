var clColors = require("./../lib/clColors.js")
/*
	PLANE

rows: integer
columns: [integer...] (0 = asiento, 1 = pasillo)

*/

module.exports = function(rows, columns) {
	var me = this

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

		for(var i=0;i<nrows;i++){
			var line = clColors.blueBg+"o"+clColors.reset+" "
			for(var j=0;j<ncols;j++){
				if(this.spaces[j][i].type==0){
					line += clColors.yellow+"U"+clColors.reset
				}
				if(this.spaces[j][i].type==1){
					line += clColors.green+" | | "+clColors.reset
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


}