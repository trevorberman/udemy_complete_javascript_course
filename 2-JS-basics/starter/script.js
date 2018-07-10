// Single line comment example
// console.log('Hello World!!!');

/*
Multi-line comment example...
...for more than one line
*/
/****************************
* Variables and data types
*/

/*
var firstName = 'Trevor';
console.log(firstName);

var lastName = 'Berman';
var age = 41;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Digital Folk Artist'
console.log(job);
*/

/****************************
* Variable mutation and type coercion
*/

/*
var firstName = 'Trevor';
var age = 41;

// Convert num to string to join them.
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Digital Folk Artist';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation redefines or changes value in variables
age = 'forty one'
job = 'Sk8er'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/****************************
* Basic operators
*/
/*
// Math operators
var currYear, ageTrevor, ageElyse, yearTrevor, yearElyse;
currYear = 2018;
ageTrevor = 41;
ageElyse = 30;

yearTrevor = currYear - ageTrevor;
yearElyse = currYear - ageElyse;

console.log(yearTrevor);

console.log(currYear + 2);
console.log(currYear * 2);
console.log(currYear / 10);

// Logical operators
var ElyseOlder = ageElyse > ageTrevor;
console.log(ElyseOlder);

// TypeOf operator
console.log(typeof ElyseOlder);
console.log(typeof ageElyse);
console.log(typeof 'Trevor is older than Elyse.');

var x;
console.log(typeof x);
*/

/****************************
* Operator precedence
*/
/*
var currYear, yearTrevor, fullAge;
currYear = 2018;
yearTrevor = 1976;
fullAge = 18;

// Multiple operators
var isFullAge = currYear - yearTrevor >= fullAge;
console.log(isFullAge);

// Grouping
var ageTrevor = currYear - yearTrevor;
var ageElyse = 30;
var averageAge = (ageTrevor + ageElyse) / 2;
console.log(averageAge);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
// x = x * 2;
x *= 2;
console.log(x);

x += 10;
console.log(x);

// x = x + 1;
// x += 1;
x++;
console.log(x);
*/

/****************************
* Coding Challenge 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
** Mass in kg, Height in meters
*/
/*
// 1. Store Mark's and Jon's mass and height in variables.
var massMark, heightMark, massJohn, heightJohn;
massMark = 100;
heightMark = 10;
massJohn = 110;
heightJohn = 12;

// 2. Calculate both their BMIs.
var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);
*/

/* 3.Create a boolean variable containing information about whether Mark has a higher BMI than John. */
// var compareBMI = bmiMark > bmiJohn;

/* 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). */
// console.log('Is Mark\'s BMI higher than John\'s? ' + compareBMI);

/****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

/****************************
* Coding Challenge 1 Revisited
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
** Mass in kg, Height in meters
*/
/*
// 1. Store Mark's and Jon's mass and height in variables.
var massMark, heightMark, massJohn, heightJohn;
massMark = 100;
heightMark = 10;
massJohn = 210;
heightJohn = 12;

// 2. Calculate both their BMIs.
var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);
*/
/* 3.Create a boolean variable containing information about whether Mark has a higher BMI than John. */
// var compareBMI = bmiMark > bmiJohn;

/* 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). */
// console.log('Is Mark\'s BMI higher than John\'s? ' + compareBMI);
/*
if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI higher than John\'s.');
} else {
    console.log('John\'s BMI higher than Mark\'s.');
}
*/

/****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // Between 13 and 20
    console.log(firstName + ' is a teenager.');
}
  else {
  console.log(firstName + ' is a man.');
}
*/

/****************************
* The ternary operator and switch statements
*/
/*
var firstName = 'John';
var age = 16;

// Ternary operator
// condition ? if : else
age >= 21 ? console.log(firstName + ' drinks beers.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 21 ? 'beers' : 'juice';
console.log(firstName + ' drinks ' + drink + '.');

// Switch statement
// Another way of writing if/else statements
var job = 'instructor';

switch (job) {
  case 'teacher':
  case 'instructor':
  case 'magister':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'plumber':
    console.log(firstName + ' unclogs the drains.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // Between 13 and 20
    console.log(firstName + ' is a teenager.');
}
  else {
  console.log(firstName + ' is a man.');
}
*/

/*
// Refactor above example as a switch statement
var firstName = 'John';
var age = 16;

switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  default:
    console.log(firstName + ' is a man!');
}
*/

/****************************
* Truthy/Falsy values and Equality operators
*/

// JS Falsy values: undefined, null, 0, '', NaN
// JS Truthy values: all values that are NOT Falsy
/*
var height;
height = 23;

if (height || height === 0) {
  console.log('The variable is defined.');
} else {
    console.log('The variable is not defined.');
}

// Equality operators
if (height == 23) {
  console.log('The == operator does type coercion!');
}
*/

/****************************
* Coding Challenge #2
*/
/*
John and Mike both play basketball on different teams. In the last 3 games John's team scored 89, 120, and 103 points while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.

2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

4. **BONUS** Mary also plays basketball and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.
--HINT: You will need the && operator to take the decision.

5. Like before, change the scores to generate different winners keeping in mind there might be draws.
*/
/*
// Original average scores
var johnAvgScore = (89 + 210 + 103) / 3;
var mikeAvgScore = (116 + 94 + 123) / 3;
var maryAvgScore = (97 + 134 + 105) / 3;
*/

/*
// 1.
var johnAvgScore = (89 + 210 + 400) / 3;
var mikeAvgScore = (89 + 210 + 400) / 3;
var maryAvgScore = (89 + 210 + 400) / 3;
console.log('The average scores are:' + '\n' + 'John: ' + johnAvgScore + '\n' + 'Mike: ' + mikeAvgScore + '\n' + 'Mary: ' + maryAvgScore);

// 2-5.
if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John wins with an average score of ' + johnAvgScore);
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log('Mike wins with an average score of ' + mikeAvgScore);
} else if (maryAvgScore > johnAvgScore && maryAvgScore > mikeAvgScore) {
  console.log('Mary wins with an average score of ' + maryAvgScore);
} else {
    console.log('We have a draw!');
    switch (true) {
      case johnAvgScore === mikeAvgScore && johnAvgScore === maryAvgScore:
        console.log('Everyone tied with average scores of ' + johnAvgScore);
        break;
      case johnAvgScore === mikeAvgScore:
        console.log('John and Mike are tied with average scores of ' + johnAvgScore);
        break;
      case johnAvgScore === maryAvgScore:
        console.log('John and Mary are tied with average scores of ' + johnAvgScore);
        break;
      case mikeAvgScore === maryAvgScore:
        console.log('Mike and Mary are tied with average scores of ' + mikeAvgScore);
        break;
    }
}
*/

/****************************
* Functions
*/
/*
function calcAge(birthYear) {
  return 2018 - birthYear;
}

// Function call
var ageJohn = calcAge(1990);
var ageMike = calcAge(1948);
var ageMary = calcAge(1976);
console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetired(birthDate, firstName) {
  var age = calcAge(birthDate);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired.');
  }
}

yearsUntilRetired(1990, 'John');
yearsUntilRetired(1948, 'Mike');
yearsUntilRetired(1976, 'Mary');
*/

/****************************
* Function statements and expressions
*/
/*
// Function statement / declaration
// JS statements perform actions, but do not produce immediate values.
// function whatDoYouDo(job, firstName) {}

// Function expression example
// JS 'expressions' always produce a (single) value.
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.'
    case 'magister':
      return firstName + ' teaches kids how to speak Latin.'
    case 'instructor':
      return firstName + ' keeps the kids in line.';
    default:
      return firstName + ' does something else.'
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('magister', 'Mike'));
console.log(whatDoYouDo('instructor', 'Mary'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/****************************
* Arrays
*/

// Different ways of initializing arrays
var names = ['John', 'Mike', 'Mary'];
var years = new Array(1990, 1948, 1976);

console.log(names); // returns length of array + list of contents
console.log(names[0]); // returns value at position 0 (1st value in array)
console.log(names.length); // returns number of values in the arrays

// Matate array data
names[1] = 'Ben';
names[names.length] = 'Grosso'; // adds value as last element in the array
console.log(names);

// Arrays with different data types
var john = ['John', 'Smith', 1990, 'teacher', false];


// SOME methods that apply to Arrays
john.push('blue'); // add element at end of Arrays
john.unshift('Mr.'); // add element to begining of array
console.log(john);

john.pop(); // removes element from end of the array
john.shift(); // removes element to begining of array
console.log(john);

console.log(john.indexOf(1990)); // returns position of value passed in
console.log(john.indexOf(23)); // returns -1 if element is not in the array

// test for element/value in an array
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer.';

console.log(isDesigner);
