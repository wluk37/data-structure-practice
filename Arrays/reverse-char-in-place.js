function reverseInPlace(array) {
  var midpoint = Math.floor(array.length / 2);

  for (var i = 0; i < midpoint; i++) {
    var index = array.length - i - 1;
    var temp = array[index];
    array[index] = array[i];
    array[i] = temp;
  }
}
