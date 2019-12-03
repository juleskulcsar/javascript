function isAnagram(str1, str2){
	for (let i = 0; i<arguments.length; i++){
		arguments[i] = arguments[i].replace(/[^\w]/g, '')
    	.toLowerCase().split('').reduce((acc, next)=>{
		acc.hasOwnProperty(next) ? acc[next] = acc[next]+ 1 : acc[next] = 1;
		return acc;
		},{})
    }
	
	for (let i = 0; i<arguments.length; i++){
        if (Object.keys(arguments[i]).length !== Object.keys(arguments[i+1]).length){
            return false;
        }
		for (let val in arguments[i]){
			if (arguments[i][val] !== arguments[i+1][val]){
				return false;
			}
        }
        return true;
	}
}

module.exports = isAnagram;