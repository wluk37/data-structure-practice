function reverseOrder(array) {
  // reverse message
  reverseHelper(array, 0, array.length - 1);
  // reverse word
  var start = 0,
    end = 0;
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === " " || i === array.length) {
      end = i - 1;
      reverseHelper(array, start, end);
      start = i + 1;
    }
  }
}

function reverseHelper(array, start, end) {
  var midpoint = start + Math.floor((end - start) / 2);
  for (var i = start; i <= midpoint; i++) {
    var index = end - (i - start);
    var temp = array[index];
    array[index] = array[i];
    array[i] = temp;
  }

  return array;
}

/* 
var message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l"
];
*/
