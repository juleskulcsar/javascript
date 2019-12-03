function maxChar(str) {
	let arr = [];
    str = str.split('').reduce((acc, next) =>{
        acc[next] ? acc[next] = acc[next] + 1 : acc[next] =1;
        return acc;
    }, {})
	for (let key in str){
        arr.push(str[key])
        const maxVal = Math.max(...arr);
        if(str[key] === maxVal){
            return key;
        }
	}
}

module.exports = maxChar;