const userMark = {
  name: 'Mark',
  mass: 78,
  height: 1.69,
  calculeteBMI() {
    this.BIM = this.mass / (this.height * this.height);
    return this.BIM;
  },
};

const userJohn = {
  name: 'John',
  mass: 92,
  height: 1.95,
  calculeteBMI() {
    this.BIM = this.mass / (this.height * this.height);
    return this.BIM;
  },
};

console.log(`The highet BMI has: ${userMark.calculeteBMI > userJohn.calculeteBMI ? userMark.name : userJohn.name}`);

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const isMarkBMIhigher = BMIMark > BMIJohn;

// console.assert(isMarkBMIhigher === true, 'Some thing wrong');

// * CODING CHALLENGE 4
// */

// /*
// Let's remember the first coding challenge where Mark and John compared their BMIs.
//  Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass,
//  and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and
// also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and
//  the respective BMI. Don't forget they might have the same BMI.
// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
// GOOD LUCK 😀
