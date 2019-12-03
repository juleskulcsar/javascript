// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n){
	let step="#";
	let space = " ";
	let length = n + n-1;
	for(let i=1; i<=n; i++){
		console.log(space.repeat(Math.round(length/2-i)) + step + space.repeat(Math.round(length/2-i)));
		step = step+ "##";
    }
}

module.exports = pyramid;