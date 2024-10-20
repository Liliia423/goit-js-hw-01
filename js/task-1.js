'use strict';
/*function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));*/

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const value = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return value;
}
value = makeTransaction(5, 3000);
console.log(value);
value = makeTransaction(3, 1000);
console.log(value);
value = makeTransaction(10, 500);
console.log(value);
