// inputs: weight (kg) and height (m) 
// process: how to convert the raw data to useful output 
// -> bmi = weight/(height*height)
// output: BMI and whether the user is healthy weight, overweight etc

// dependency (or what other "plugins" do we need to meet the requirments of the program)
// to ask the user a question in javascript: we need to use prompt-sync package
// a programming language has limited functionalities, so we
// use packages to add new functionality to it

// in the terminal we need to execute this command `npm install prompt-sync`
const prompt = require('prompt-sync')(); // require allows us to add new packages to our program
let weight = prompt("Please enter your weight: ");
let height = prompt("Please enter your height: ");
let bmi = weight / (height * height);
console.log("BMI = ", bmi);
if (bmi < 18.5) {
    console.log("You are underweight");
} else if (bmi < 25) {
    console.log("You are healthy weight")
} else if (bmi < 30) {
    console.log("You are overweight");
} else {
    console.log("You are obesse");
}
