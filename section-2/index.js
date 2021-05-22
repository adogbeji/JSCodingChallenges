'use strict';


// Coding Challenge 1


/*


Data 1:-

Dolphins: 44, 23, 71
Koalas: 65, 54, 49


Data 2:-

Dolphins: 85, 54, 41
Koalas: 23, 34, 27


*/



// 1) Create an arrow function to calculate the average of 3 scores

const calcAverage = (a, b, c) => {
    const avg = (a + b + c) / 3;
    return avg;
};


// 2) Use the function to calculate the average for both teams

const dolphAvg1 = calcAverage(44, 23, 71);
console.log(dolphAvg1);

const dolphAvg2 = calcAverage(85, 54, 41);
console.log(dolphAvg2);


const koalaAvg1 = calcAverage(65, 54, 49);
console.log(koalaAvg1);

const koalaAvg2 = calcAverage(23, 34, 27);
console.log(koalaAvg2);


// 3) Create a function that takes the average score for each team and calculates a winner!


function checkWinner(koalaAvg, dolphAvg) {
    if (koalaAvg * 2 <= dolphAvg) {
        return `Dolphins win (${dolphAvg} vs. ${koalaAvg})!`;
    } else if (dolphAvg * 2 <= koalaAvg) {
        return `Koalas win (${koalaAvg} vs. ${dolphAvg})!`;
    } else {
        return 'No team wins!';
    } 
}


// 4) Use the above function to determine the winner for Data 1 & Data 2

const data1Winner = checkWinner(koalaAvg1, dolphAvg1);
console.log(data1Winner);

// Data 1 winner: Koalas

const data2Winner = checkWinner(koalaAvg2, dolphAvg2);
console.log(data2Winner);

// Data 2 winner: Dolphins