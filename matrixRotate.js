const testCase1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
const testCase2 = [[6, 7], [10, 11]];

const displayMatrix = (matrix) => {
  matrix.forEach(row => {
    let printedRow = '';
    row.forEach(element => {
      printedRow += element;
      printedRow += ' ';
    });
    console.log(printedRow);
  });
};

const verifyInput = (rows, cols, matrix) => {
  const numberOfRows = matrix.length;
  const numberOfCols = matrix[0].length;
  if (numberOfCols !== cols || numberOfRows !== rows) {
    return false;
  }
  else {
    return true;
  }
};

const swapPosition = (matrix, element1Row, element1Col, element2Row, element2Col) => {
  let temp = matrix[element1Row][element1Col];
  matrix[element1Row][element1Col] = matrix[element2Row][element2Col];
  matrix[element2Row][element2Col] = temp;
  return matrix;
};

const matrixRotate = (rows, cols, rotationCount, matrix) => {
  // verify input matrix matches the rows and cols indicated in input
  if (!verifyInput(rows, cols, matrix)) {
    throw 'Matrix size does not match the rows and columns indicated. Please check.';
  }
  // find the number of "layers" that have to be rotated
  const rotationLayers = Math.min(rows, cols) / 2;

  // loop through the layers, identify the current layer that has to be rotated
  let rotationLayer = 2;
  let topBoundary = rotationLayer - 1;
  let leftBoundary = rotationLayer - 1;
  let bottomBoundary = rows - (1 * rotationLayer);
  let rightBoundary = cols - (1 * rotationLayer);

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === rightBoundary || row === bottomBoundary || col === leftBoundary || row === topBoundary) {
        console.log(matrix[row][col]);
      }
    }
  }

}

matrixRotate(4, 4, 3, testCase1);