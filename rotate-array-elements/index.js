//rotate array elements a given time, starting with the last element

function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

module.exports = rotate;