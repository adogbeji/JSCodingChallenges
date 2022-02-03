'use strict';



// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52


// 1) Create a 'bills' array containing all 10 test bill values

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills);


// 2) Create empty arrays for the tips and totals ('tips' and 'totals')

const tips = [];
const totals = [];

// 3) Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations

// Hint: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, 
// the tip is 20%


const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        const tip = (15 / 100) * bill;
        return tip;
    } else {
        const tip = (20 / 100) * bill;
        return tip;
    }
};

// const tip = calcTip(50);


for (let x = 0; x < bills.length; x++) {
    const tip = calcTip(bills[x]);
    const total = bills[x] + tip;
    console.log(`Tip: £${tip}, Total: £${total}`);
}