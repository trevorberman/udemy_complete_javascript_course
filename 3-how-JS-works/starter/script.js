///////////////////////////////////////
// Lecture: Hoisting

/*
// Function Hoisting
calcAge(1965);

// Function statement/declaration
function calcAge(year) {
  console.log(2018 - year);
}

// calcAge(1976);

// ------------------------------------

// calcRetirment(1990);

// Function expression
var calcRetirment = function(year) {
  console.log(65 - (2018 - year));
}

calcRetirment(1990);

// Variable Hoisting
console.log(age);  // Hoisted variables are set as 'undefined'.
var age = 23;
// console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/




///////////////////////////////////////
// Lecture: Scoping

// The ONLY way to create a new scope in JS is to write a new function!

/*
// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
/*
calcAge(1985);

function calcAge(year) {
  console.log(2018 - year);
  console.log(this);
}

// var age = calcAge(1985);
// console.log(age);
*/
/*
var calcAge = function(year) {
  console.log(2018 - year);
  console.log(this);
}

calcAge(1985);
*/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);
    /*
    function innerFunction() {
      console.log(john.name);
      console.log(this);
    }
    innerFunction();
    */
  }
};

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// Method borrowing example
mike.calculateAge = john.calculateAge;
mike.calculateAge();
