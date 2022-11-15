function mergeSort(array) {
  if (array.length <= 1) return array;

  let middleOfArray = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleOfArray);
  let rightArray = array.slice(middleOfArray);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const mergedCollection = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;

    const mergeElement = arrayWithMin.shift();

    mergedCollection.push(mergeElement);
  }

  return mergedCollection.concat(leftArray, rightArray);
}

let array = [4, 8, 2, 5, 1, 1, 7, 3];
let result = mergeSort(array);

console.log(result);
