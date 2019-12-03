// function takes a positive number N as argument.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function stairs(n){
    let stair = "#";
    let space = " ";
	for(let i=1; i<=n; i++){
		console.log(stair + space.repeat(n-i));
		stair = stair + "#";
	}
}

module.exports = stairs;