// Types of primitive datatypes : nn bb ss u = NULL number boolean bigint string symbol undefined
let a = null;
let b = 481;
let c = true; // can also be false
let d = BigInt(5648);
let e = "Divyesh";
let f = Symbol("I am Symbol");
let g = undefined;

console.log(a,b,c,d,e,f,g);
console.log(typeof(g)); //  We can print the datatype of any variable

// Objects in Js : Making a group of variables in a single variable
const student = {
    "name" : "Divyesh",
    "rollno" : 45,
    "result" : 8.29
}
console.log(student.result);
