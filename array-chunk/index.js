// divide the array into subarrays 
// where each subarray has the length of a given size

// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
function chunk(array, size) {
    const newArr = [];
    for(let i=0; i<array.length; i=i+size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  }
  
  module.exports = chunk;