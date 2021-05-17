// jshint esversion:6
// jshint esversion:7


// 1) Variables for Mark & John's Mass and Height

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


// 2) Calculate BMI with formula supplied in PDF

// Mark's BMI

const markBMI1 = markWeight1 / markHeight1 ** 2;
console.log(markBMI1);

const markBMI2 = markWeight2 / markHeight2 ** 2;
console.log(markBMI2);

// John's BMI

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
console.log(johnBMI1);

const johnBMI2 = johnWeight2 / johnHeight2 ** 2;
console.log(johnBMI2);


// 3) Check whether Mark has a higher BMI than John

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
