const bills = ['124', '48', '268'];

function calcBillWithTip(arr) {
  const tempArr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 50) {
      tempArr.push(arr[i] * 0.2 + Number(arr[i]));
    }
    if (arr[i] >= 50 && arr[i] <= 200) {
      tempArr.push(arr[i] * 0.15 + Number(arr[i]));
    }
    if (arr[i] > 200) {
      tempArr.push(arr[i] * 0.1 + Number(arr[i]));
    }
  }
  return tempArr;
}


console.log(`Bills: ${bills}`);

console.log(`Bills with tips: ${calcBillWithTip(bills)}`);

/** ***************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
 The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator
(as a function). He likes to tip 20% of the bill when the bill is less than
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more than
$200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
