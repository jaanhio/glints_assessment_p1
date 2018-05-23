/*
  Part2, Q2. Sort
*/

/*
  Space-complexity: O(n)
  Time-complexity: O(n log n)
*/
const sort = (size, arr) => {

  const sizeInput = parseInt(size);
  const inputArr = JSON.parse(arr);
  // check that size indicated matches the length of input array
  if (sizeInput !== inputArr.length) {
    throw 'Input array size does not match the size indicated. Please check';
  }

  // store the original index of all elements in dictionary
  let dict = {};
  inputArr.forEach((element, index) => {
    dict[element] = index + 1;
  });

  // create a sorted copy of original array
  let sortedArr = inputArr.slice().sort();

  // keep track of the number of elements that need to be swapped, and also their current/original index and the target/sorted index
  let swapTracker = {
    count: 0,
    indexToBeSwapped: [],
    targetIndex: []
  };

  // compare the index of each element in original vs sorted array and track the index and number of elements that has to be swapped
  sortedArr.forEach((element, index) => {
    if (dict[element] !== index + 1) {
      swapTracker.count++;
      swapTracker.indexToBeSwapped.push(dict[element]);
      swapTracker.targetIndex.push(index + 1);
    }
  });

  // if swap/reverse is required, swap count will definitely be >= 2
  // if swap count is 2, it means only 2 elements have to switch places and therefore can be swapped
  if (swapTracker.count === 2) {
    console.log(`yes swap ${swapTracker.indexToBeSwapped}`);
  }

  // if swap count is above 2, only possible way is reverse
  if (swapTracker.count > 2) {
    const { targetIndex, indexToBeSwapped } = swapTracker;
    // if the target/sorted index is equals to the reversed of current index, that means reverse can be applied to get the target/sorted array
    if (isEqual(targetIndex, indexToBeSwapped.reverse())) {
      console.log(`yes reverse ${indexToBeSwapped[0]},${indexToBeSwapped[indexToBeSwapped.length - 1]}`);
    }
    else {
      console.log('No');
    }
  }
}

// check if 2 arrays are the same
const isEqual = (originalArrIndex, targetArrIndex) => {
  for (let i = 0; i < originalArrIndex.length; i++) {
    if (originalArrIndex[i] !== targetArrIndex[i]) {
      return false;
    }
  }
  return true;
}

const testCase1 = [4, 2];
const testCase2 = [3, 1, 2];
const testCase3 = [1, 5, 4, 3, 2, 6];
const testCase4 = [5, 6, 2, 7, 9];
const testCase5 = [6, 5, 2, 1, 7, 9];

// sort(2, testCase1); // 'yes swap 2,1'
// sort(3, testCase2); // 'no'
// sort(6, testCase3); // 'yes reverse 2,5'
// sort(5, testCase4); // 'no'
// sort(6, testCase5); // 'yes reverse 1,4'

sort(process.argv[2], process.argv[3]);