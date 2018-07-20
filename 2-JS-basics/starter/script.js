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
/*
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
*/

/****************************
* Code challenge #3
*/

/*
John and his family went on a holiday and went to 3 different resturants. The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/

// var bills = [124, 48, 268]; // tips 18.6, 9.6, 26.8
/*
function calcTip(billTotal) {
  var tip;
  if (billTotal < 50) {
    tip = billTotal * 0.2;
  } else if (billTotal >= 50 && billTotal <= 200) {
      tip = billTotal * 0.15;
  } else {
      tip = billTotal * 0.1;
  }
  return tip;
}

console.log(calcTip(bills[0]));
console.log(calcTip(bills[1]));
console.log(calcTip(bills[2]));

var allTips = function(paid) {
  var allTips = [];
  allTips[0] = calcTip(paid[0]);
  allTips[1] = calcTip(paid[1]);
  allTips[2] = calcTip(paid[2]);
  return allTips;
}

console.log(allTips(bills));

function allTotalBills(paid, tips) {
  var totalBills = [];
  totalBills[0] = paid[0] + tips[0];
  totalBills[1] = paid[1] + tips[1];
  totalBills[2] = paid[2] + tips[2];
  return totalBills;
}

console.log(allTotalBills(bills, allTips(bills)));
*/
// Refactored
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.20;
  } else if (bill >= 50 && bill <= 200) {
      percentage = 0.15;
  } else {
      percentage = 0.10;
  }
  return percentage * bill;
}

console.log(tipCalculator(10));
console.log(tipCalculator(100));
console.log(tipCalculator(1000));

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
// console.log(tips);

var totalBills = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];
// console.log(totalBills);

console.log(tips, totalBills);
*/

/****************************
* Objects and properties
*/
/*
// Objects group together different variables through defined key:value pairs
// Using "object literal"; a container of variable "properties"
var john = {
  firstName: 'John',
  lastName: 'Roberts',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

// ways of accessing the object through its properties
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutate an object
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// Using new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/****************************
* Objects and methods
*/
// Methods are functions attached to objects.
/*
var john = {
  firstName: 'John',
  lastName: 'Roberts',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    return 2018 - birthYear;
  }
};

console.log(john.calcAge(1990));
console.log(john.calcAge(john.birthYear));
*/

/*
var john = {
  firstName: 'John',
  lastName: 'Roberts',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  // example using "this" keyword to reference object's birthYear
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john.age);
console.log(john);
*/

/****************************
* Coding challenge #4
*/
/*
Implement the same functionality of coding challenge #1 with objects and methods

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height).
** Mass in kg, Height in meters
*/
// 1. Create an object for each Mark and Jon containing properties for their full name, mass, and height.

// 2. Add a method to each object to calculate their BMI.
// Save the BMI to the object and also return it from the method.

// 3. Log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

/*
var john = {
  firstName: 'John',
  lastName: 'Roberts',
  mass: 110,
  height: 12,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  firstName: 'Mark',
  lastName: 'Markson',
  mass: 100,
  height: 10,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);
// console.log(john.bmi);

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.firstName + ' ' + mark.lastName + ' has the highest BMI of ' + mark.bmi);
} else {
    console.log(john.firstName + ' ' + john.lastName + ' and ' + mark.firstName + ' ' + mark.lastName + ' have BMIs that are equal.');
}
*/

/****************************
* Loops and iteration
*/

/*
// For Loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
*/

/*
// continue and break statements
// Break statements to break out of a loop
// Continue statements to quit current itteration of loop and continue with the next one
var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/****************************
* Coding challenge #5
*/

// Create a more advanced version of the previous tip calculator using everything learned in this section.

/*
John and his family went on a holiday and went to 5 different resturants. The bills were $124, $48, $268, $180, and $42.

John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output, create:
  a. A new array containing all tips
  b. An array containing final paid amounts (bill + tip)
  HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different resturants. The bills were $77, $375, $110, and $45.

Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300.

5. Implement the same functionality as before, this time using Mark's tipping rules.

6. Create a function (NOT a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each itteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it.

7. Calculate the average tip for each family.

8. Log to the console which family paid the highest tips on average.
*/

var johnPaid = {
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  finalBills: [],
  calcTip: function() {
    for (i = 0; i < this.billValues.length; i++) {
      var percentage;
      if (this.billValues[i] < 50) {
        percentage = .20;
      } else if (this.billValues[i] >= 50 && this.billValues[i] <= 200) {
          percentage = .15;
      } else {
          percentage = .10;
      }
      this.tips[i] = percentage * this.billValues[i];
      this.finalBills[i] = this.tips[i] + this.billValues[i];
      // return this.tips, this.finalBills;
      // return percentage * this.billValues[i];
    }
  }
};

johnPaid.calcTip();
console.log(johnPaid.tips, johnPaid.finalBills);


var markPaid = {
  billValues: [77, 375, 110, 45],
  tips: [],
  finalBills: [],
  calcTip: function() {
    for (i = 0; i < this.billValues.length; i++) {
      var percentage;
      if (this.billValues[i] < 100) {
        percentage = .20;
      } else if (this.billValues[i] >= 100 && this.billValues[i] <= 300) {
          percentage = .10;
      } else {
          percentage = .25;
      }
      this.tips[i] = percentage * this.billValues[i];
      this.finalBills[i] = this.tips[i] + this.billValues[i];
    }
  }
};

markPaid.calcTip();
console.log(markPaid.tips, markPaid.finalBills);

var averageTip = function(tips) {
  var average = 0;
  var i = 0;
  while (i < tips.length) {
    average = average + tips[i];
    i++;
  }
  average = average / tips.length;
  return average;
}

johnPaid.averageTip = averageTip(johnPaid.tips);
markPaid.averageTip = averageTip(markPaid.tips);
var difference;

if (johnPaid.averageTip > markPaid.averageTip) {
  difference = johnPaid.averageTip - markPaid.averageTip;
  console.log('John\'s family paid $' + johnPaid.averageTip + ', the highest tips on average; $' + difference + ' more than Mark\'s family paid.');
} else {
  difference = markPaid.averageTip - johnPaid.averageTip;
  console.log('Mark\'s family paid $' + markPaid.averageTip + ', the highest tips on average; $' + difference + ' more than John\'s family paid.');
}
