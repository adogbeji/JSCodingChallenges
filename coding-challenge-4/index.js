// jshint esversion:6



// Data
const billValue_1 = 275;
const billValue_2 = 40;
const billValue_3 = 430;


// 1) Calculate the tip
const tipValue_1 = billValue_1 >= 50 && billValue_1 <= 300 ? (15/100) * billValue_1: (20/100) * billValue_1;
console.log(`Tip 1: ${tipValue_1}`);

const tipValue_2 = billValue_2 >= 50 && billValue_2 <= 300 ? (15/100) * billValue_2: (20/100) * billValue_2;
console.log(`Tip 2: ${tipValue_2}`);

const tipValue_3 = billValue_3 >= 50 && billValue_3 <= 300 ? (15/100) * billValue_3: (20/100) *  billValue_3;
console.log(`Tip 3: ${tipValue_3}`);



// 2) Log out bill value, tip & final value (tip + bill)
const finalValue_1 = billValue_1 + tipValue_1;
const finalValue_2 = billValue_2 + tipValue_2;
const finalValue_3 = billValue_3 + tipValue_3;


const message_1 = `The bill was ${billValue_1}, the tip was ${tipValue_1} and the total cost is ${finalValue_1}!`;
console.log(message_1);

const message_2 = `The bill was ${billValue_2}, the tip was ${tipValue_2} and the total cost is ${finalValue_2}!`;
console.log(message_2);

const message_3 = `The bill was ${billValue_3}, the tip was ${tipValue_2} and the total cost is ${finalValue_3}!`;
console.log(message_3);
