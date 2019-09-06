const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const isMarkBMIhigher = BMIMark > BMIJohn;

console.assert(isMarkBMIhigher === true, 'Some thing wrong');

console.log(`Is Mark's BMI higher then John's? ${isMarkBMIhigher}`);
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a
higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something
    like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/
