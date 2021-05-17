// jshint esversion:6


// 1) Calculate the average score for each team


const dolphinsAverageScore_1 = (96 + 108 + 89) / 3;
// console.log(dolphinsAverageScore_1);


const koalasAverageScore_1 = (88, 91, 110) / 3;
// console.log(koalasAverageScore_1);



// 2) Use teams' average score to determine the winner

if (dolphinsAverageScore_1 > koalasAverageScore_1) {
  console.log('DOLPHINS TEAM WON!');
} else if (dolphinsAverageScore_1 === koalasAverageScore_1) {
  console.log('IT\'S A DRAW!');
} else {
  console.log('KOALAS TEAM WON!');
}



// 3) BONUS 1: Teams must also score at least 100 to win

const dolphinsAverageScore_2 = (97 + 112 + 101) / 3;
// console.log(dolphinsAverageScore_2);


const koalasAverageScore_2 = (109 + 95 + 123) / 3;
// console.log(koalasAverageScore_2);


if (dolphinsAverageScore_2 > koalasAverageScore_2 && dolphinsAverageScore_2 >= 100) {
  console.log('DOLPHINS TEAM WON!');
} else if (koalasAverageScore_2 > dolphinsAverageScore_2 && koalasAverageScore_2 >= 100) {
  console.log('KOALAS TEAM WON!');
} else {
  console.log('NO WINNERS!');
}


// 4) BONUS 2: The minimum score now also applies to a draw!

const dolphinsAverageScore_3 = (97 + 112 + 101) / 3;
console.log(dolphinsAverageScore_3);


const koalasAverageScore_3 = (109 + 95 + 123) / 3;
console.log(koalasAverageScore_3);


if (dolphinsAverageScore_3 > koalasAverageScore_3 && dolphinsAverageScore_3 >= 100) {
  console.log('DOLPHINS TEAM WON!');
} else if ((dolphinsAverageScore_3 === koalasAverageScore_3 && dolphinsAverageScore_3 >= 100) && koalasAverageScore_3 >= 100) {
  console.log('IT\'S A DRAW!');
} else if (koalasAverageScore_3 > dolphinsAverageScore_3 && koalasAverageScore_3 >= 100) {
  console.log('KOALAS TEAM WON!');
} else {
  console.log('NO WINNERS!');
}
