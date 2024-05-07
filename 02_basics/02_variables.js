// //ask user his name and email

// const { read } = require('fs');
// const readline = require('readline');

// // var uid = prompt("Please enter your unique id number");
// var firstName = readline("Enter your name");
// var lastName = prompt("Enter your last name");
// var email = prompt("Enter your email");
// var state = prompt("Enter your state");
// var city = prompt("Enter your city");
// var password = prompt("Enter your password");
// var isLoggedInFromGoggle = prompt("Is your user logged in from the Google account");
// var isLoggedInFromFacebook  = prompt("Is your user logged in from Facebook");


// console.log(`
//     The details of the user with 
//     unique ID ${uid} are as follows:
//     Name: ${firstName} ${lastName}
//     He is from the state of : ${state} and
//     belongs to ${city}
//     his email address is ${email} and password is ${password}
// `);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});