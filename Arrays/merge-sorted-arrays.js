function mergeSortedArrays(array1, array2) {
  var mergedArray = [];
  var i = 0,
    j = 0;

  while (mergedSortedArray.length < array1.length + array2.length) {
    var isArray1Exhausted = i >= array1.length,
      isArray2Exhausted = j >= array2.length;

    if (!isArray1Exhausted && (isArray2Exhausted || array1[i] < array2[j])) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  return mergedArray;
}
