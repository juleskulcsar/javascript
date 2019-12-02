//2D array exercise. Build a XO grid. Funcyion takes 2 params: 1st the number of rows and 2nd the number of columns
function makeXOGrid(rows,amount){
    var finalArr = []
    var startWithX = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<amount; j++){
            if(startWithX){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startWithX = !startWithX
        }
        finalArr.push(newRow)
    }
    return finalArr;
}

module.exports = makeXOGrid;