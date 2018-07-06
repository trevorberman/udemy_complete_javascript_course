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
