'use strict';


// Coding Challenge #2



// 1) Create a function which takes any bill value as an input & returns the corresponding tip.
//    Test the function using a bill value of 100


const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        const tip = (15 / bill) * 100;  // 15% tip
        return tip;
    } else {
        const tip = (20 / bill) * 100;  // 20% tip
        return tip;
    }
};

// const tip = calcTip(100);
// console.log(tip);


// 2) Create an array called 'bills' using the following test data: 125, 155, 44

const bills = [125, 155, 44];


// 3) Use the function created in step 1) to create a 'tips' array, containing the tip for each bill


const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1])];


// 4) Create an array called 'total' which contains the total values - bill + tip

const total_1 = bills[0] + tips[0];
const total_2 = bills[1] + tips[1];
const total_3 = bills[2] + tips[2];

const total = [total_1, total_2, total_3];