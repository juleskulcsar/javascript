// Write a function that accepts an integer N
// and returns a NxN spiral matrix.

//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]

function spiralMatrix(n) {
    const matrix = [];
  
    //creare array of subarrays
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }
    
    let count = 1;

    //create index for start and end for each subarray
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    
    while (startColumn <= endColumn && startRow <= endRow) {

    //the loops will run while the above conditions are true
    //and will spiral across the matrix, populating the subarrays with the count value

      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        matrix[startRow][i] = count;
        count++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        matrix[i][endColumn] = count;
        count++;
      }
      endColumn--;
  
      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        matrix[endRow][i] = count;
        count++;
      }
      endRow--;
  
      // start column
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startColumn] = count;
        count++;
      }
      startColumn++;
    }
  
    return matrix;
  }
  
  module.exports = spiralMatrix;