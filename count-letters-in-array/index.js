//count letters in array. Function takes in 2 parameters. An array of letters
//and a letter to be counted

//solution 1
function countLetters(array, letter){
	var count=0;
	array.filter(function(val){
		if(val.toLowerCase()===letter.toLowerCase()){
			count++;
		};
	})
return count; 
}

//solutin 2
function countLetters(arr, letter){
	return arr.reduce(function(acc, next){
		if (next.toLowerCase() === letter.toLowerCase()){
			acc++
		}
	return acc;
	}, 0)
}


module.exports = countLetters;
// filterLetters(["a","a","b","c","A"], "a");