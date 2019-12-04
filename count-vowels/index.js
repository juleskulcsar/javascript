function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
	let count = 0;
	let strArr = str.split('');
	for (let i = 0; i<strArr.length; i++){
		if (vowels.includes(strArr[i])){
			count++;
		}
	}
	return count;
}

module.exports = countVowels;