'use strict';


/* Test Data

Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]

*/


// 1) Create a function 'printForecast' which takes in an array 'arr' and logs a 
//    string like the above to the console. Try it with both test datasets.

const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];


function printForecast(arr) {
    console.log(arr);
    for (let x = 0; x < arr.length; x++) {
        const days = x + 1;
        console.log(days);
    }
}  printForecast(data_1);