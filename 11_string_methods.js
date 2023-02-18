const prompt = require("prompt-sync")({sigint:true});

let name = "Divyesh";
console.log(name.length); // To find the length of the string

// To Uppercase
console.log(name.toUpperCase());

// To Lowercase
console.log(name.toLowerCase());

// Slice
console.log(name.slice(2,5));
// or
console.log(name.slice(1));

// Replace
console.log(name.replace("yesh","ation"));

// To Join another string
let surname = "Patel";
console.log(name.concat(surname));

// Trim
let friend = "Harry";
console.log(friend.trim());

// Using a for loop to print a string
for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}