// A program (in any computer langauge) is an assembly line for data
// we are taking raw data and converting to useful output for the user
// Data comes in three common forms
// 1. Numerical data -> Whole numbers vs. decimal numbers (discrete vs. continous)
// In Solidty: unsigned int number;
// JavaScript: Typeless programming language

// THE PRIMITIVE DATA TYPES
let x = 42; // x holds the integer 42 (int)
let y = 3.14; // y holds the floating point number 3.14 (float)
// We can change the data type of a variable
x = 0.09; // this is permissible

// "words" -> "strings" -- sequenes of characters
// solidity: string nameOfPerson;
let rhyme = "She sells seashell at the seashore";
let phrase = 'the quick brown fox jumps over the lazy dog';

// few other data types
// booelan: true/false
let isRaining = true; // internally, it is stored as integer 1
let isSnowing = false; //internally, it is stored as integer 0

// COMPOSITE (loosely) DATA TYPE  (REFERENCE DATA TYPE) - they can store multiple values
// an array - store multple values
let guests = ["Tony Stark", "Hulk", "Hawkeye"]; // an array of strings
let rojak = [42, 3.14, "The quick brown fox", true, [111,222,333]];
console.log("2nd item of the guests array =>", guests[1] );
console.log("rojak @ index 4 => ", rojak[4][1]);

// 2nd reference type: an object (In Python and some other languages, it is also known as a dictionary)
let months = {
 // an object consists of a key/value pair
 "jan": 31,
 "feb": 28,
 "mar": 31,
 "apr": 30
}
// in this object, we have FOUR keys/value pairs/
// left of the colon is the "key"
// right of the colon is the "value"
console.log("How many days hath April:", months["apr"]);
console.log("How many days hath March:", months["mar"]);

// objects are good for look-up tables

// objects are good for structured data
// for example: age, salary range, gender, hobbies, name, email address
let customer = {
    "name":"Jon Snow",
    "age": 33,
    "gender":"M",
    "salaryRange": 3000,
    "hobbies":["walking", "cooking"],
    "email":"jonsnow@winterfell.com"
}

console.log("Age of Jon Snow =", customer["age"]);
console.log("Name of Customer =", customer.name);

// In frontend development using browsers, VERY OFTEN, data is represented
// as an ARRAY OF OBJECTS
let catalog = [
  {
    "sku": "A001",
    "name":"ACME Anvil",
    "price": 300
  },
  {
    "sku":"A002",
    "name":"ACME Screwdriver",
    "price": 300,
    
  }


]