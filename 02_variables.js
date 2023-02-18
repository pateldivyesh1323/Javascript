// "let" only allows you to overwrite a variable but it does allow you to redeclare a variable but you can declare a variable inside a block "{ }". But with var you can redeclare a variable multiple times which can create a bug.So use "let" as much as possible.
// "const" keyword is used to create a variable whose value cannot be changed throughout the entire code.

var a = "Hello";
var a = "Kaisi chal rahi hai padhai";
let b = "Nice";
const c = "See you Later";
let d = undefined;
console.log(a+" "+b+" "+c);

{
    let b = "Kabhi khushi kabhi gum";
    console.log(b);
}
console.log(d);