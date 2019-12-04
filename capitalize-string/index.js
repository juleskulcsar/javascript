function capitalize(str){
    //string to array
    let strArr = str.split(' ');
    //declare the result string
	let finalStr = "";
	for(let i = 0; i<strArr.length; i++){
        //capitalize the first letter of each word and store it in a variable
        let capitalizedLetter = strArr[i][0].toUpperCase();
        //remove the first letter of each word
        let removeFirstLetter = strArr[i].substring(1);
        //build the result string
		finalStr = finalStr + " " + capitalizedLetter + removeFirstLetter;		
    }
    //return the result string
    //use substring to eliminate the sapce in the begining, 
    //that was added in the first iteration above
	return finalStr.substring(1);
}

module.exports =  capitalize;