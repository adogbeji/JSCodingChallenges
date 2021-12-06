'use strict';


/* Test Data


 Data Set #1

 Full Name: Mark Miller
 Mass: 78kg
 Height: 1.69m


 Data Set #2

 Full Name: John Smith
 Mass: 92kg
 Height: 1.95m



 BMI = mass / height * height

*/


// 1) Create an object for each of them with properties for their full name, mass and height


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69
};  

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
};

// console.log(mark);
// console.log(john);


// 2) Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};  

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
};

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.BMI);
// console.log(john.BMI);


// 3) Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"


mark.calcBMI();
john.calcBMI();

const markBMI = mark.BMI;
const johnBMI = john.BMI;


const message = () => {
    if (markBMI > johnBMI) {
        return `Mark Miller's BMI (${markBMI}) is higher than John Smith's (${johnBMI})!`;
    } else {
        return `John Smith's BMI (${johnBMI}) is higher than Mark Miller's (${markBMI})!`
    }
};  console.log(message());