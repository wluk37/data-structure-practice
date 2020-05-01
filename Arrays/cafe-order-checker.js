function cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders) {
  // Obj: check if orders were served first-cometh, first-serveth
  // returns a bool
  var takeOutIndex = 0,
    dineInIndex = 0,
    servedIndex = 0;

  while (servedIndex < takeOutOrders.length + dineInOrders.length) {
    var isTakeOutExhausted = takeOutIndex >= takeOutOrders.length;
    var isDineInExhausted = dineInIndex >= dineInOrders.length;

    if (
      !isTakeOutExhausted &&
      (isDineInExhausted ||
        takeOutOrders[takeOutIndex] < dineInOrders[dineInIndex]) &&
      takeOutOrders[takeOutIndex] === servedOrders[servedIndex]
    ) {
      takeOutIndex++;
      servedIndex++;
    } else if (
      !isDineInExhausted &&
      (isTakeOutExhausted ||
        takeOutOrders[takeOutIndex] > dineInOrders[dineInIndex]) &&
      dineInOrders[dineInIndex] === servedOrders[servedIndex]
    ) {
      dineInIndex++;
      servedIndex++;
    } else {
      return false;
    }
  }

  return true;
}
