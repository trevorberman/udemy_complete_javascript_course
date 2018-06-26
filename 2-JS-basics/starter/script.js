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
