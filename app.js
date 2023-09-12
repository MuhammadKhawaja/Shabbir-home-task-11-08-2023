// chapter math expression {2}

// 1.

// var ++x;

// x = x + 1;

// console.log ("x")

// // 2.

// x = x - 1;

// x--;

// // 3.

// var x = 50;
// var y = x++;

// console.log(y)

// // 4.

// var y = 50;

// var z = --y;

// console.log(z)

// // 5.

// var newnum = num--;

// // 6.

// var newVariable = ++oldVariable;

// 7.

var num = 5;

num++;

alert("the new value is: " + num);

// chapter math expression {3}

// 1.

var calculatednum = 2 + 2 * 6;

console.log(calculatednum);

// 2.

var calculatednum = (2 + 2) * 6;

console.log(calculatednum);

// 3.

var calculatedNum = (2 + 2) * (4 + 2);

// 4.

var calculatedNum = (2 + 2) * 4 + 2;

// 5.

var cost = 2 + 2 * 4 + 10;

// 6.

var units = 2 + 2 * 4 + 10;

// 6.

var pressure = (4 / 2) * 4;

// Chapter 8 (Concatenating Text Strings)

// 1.

var num = "2" + "2";

// "22"

// 2.

var message = "Hello," + "Dolly";

alert(message);

// 3.

alert("33" + 3);

//  4.

var first = "Pakistan";
var sec = "Zindabad";
var concatenatedString = first + sec;
alert(concatenatedString);

// 5.

var stringValue = "Hello";
var numberValue = 42;
var concatenatedValue = stringValue + numberValue;
alert(concatenatedValue);

// 6.

var firstString = "Hello, ";
var secondString = "world!";
var concatenatedString = firstString + secondString;

console.log(concatenatedString);

// Chapter 9 (Prompts)

// 1.

var firstName = prompt("Enter first name");

console.log("First Name: " + firstName);

// 2.

var country = prompt("Country?", "China");

console.log("Country: " + country);

// 3.

var yourName = prompt("Enter Your Name");

// 4.

var userInput = prompt("Please enter your favorite color:", "Red");

console.log("User Input: " + userInput);

// 5.

var promptMessage = "Enter your email:";
var defaultEmail = "example@example.com";

var userEmail = prompt(promptMessage, defaultEmail);

console.log("User Email: " + userEmail);

// 6.

var promptMessage = "Please enter your name:";
var defaultName = "Shabbir";

var userName = prompt(promptMessage, defaultName);

alert("You entered: " + userName);

// Chapter 10 (if statments)

// 1.

var city = "Karachi";
if (city === "Karachi") {
  console.log("The City Of Lights");
}

// 2.

// if (x === y) {
  
//     var z = prompt("Please enter the value of z:");
  
//     console.log("The value of z is: " + z);
//   }
  

// 3.


// var ZipCode = "10010";

// if (ZipCode === "10010") {
//   alert("Karachi");
// } 
// else {
//   alert("Please write correct city");
// }


// 4.


var x = 1; 

if (x === 1) {

  x = 2; 
}

console.log(x); 

// Chapter 11 (Comparison Operators)

// 1.


// if (variable1 !== variable2) {
 
// }


//  2.


// if (variable1 >= variable2) {
 
// }


//  3.


var x = 5; 

if (x !== 10) {
  x = 20;
}

console.log(x);


// 4.


var number1 = 5;
var number2 = 10;

if (number1 !== number2) {
  alert("Congratulations! The numbers are unequal.");
}
 else {
  alert("The numbers are equal.");
}


// 5.


var enteredName = prompt("Please enter your first name:");

var otherName = "John";
if (enteredName !== otherName) {
  alert("No match");
} 
else{
  alert("Names match!");
}
