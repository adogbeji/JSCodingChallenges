// jshint esversion:6
// jshint esversion:7

// Mark's Data
const markWeight1 = 78;
const markWeight2 = 95;

const markHeight1 = 1.69;
const markHeight2 = 1.88;

// John's Data
const johnWeight1 = 92;
const johnWeight2 = 85;

const johnHeight1 = 1.95;
const johnHeight2 = 1.76;

// ---- BMI -----

const markBMI1 = markWeight1 / markHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;


// 1) Print out whose BMI is higher

// if (markBMI2 > johnBMI2) {
//   console.log('Mark\'s BMI is higher than John\'s!');
// } else {
//   console.log('John\'s BMI is higher than Mark\'s!');
// }


// 2) Use ES6 Template Literals to include BMI values

if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI(${markBMI1}) is higher than John's BMI(${markBMI2})!`);
} else {
  console.log(`John's BMI(${johnBMI1}) is higher than Mark's BMI(${markBMI1})!`);
}
