//remove vowels from string and return string
function removeVowels(str){
	var vowelsList = ['a','e','i','o','u'];
	var strArr = str.split('');
	return strArr.reduce(function(acc, next){
		if(!vowelsList.includes(next)){
			acc = acc+next;
		}
		return acc;
	}, '')	
}

module.exports = removeVowels;