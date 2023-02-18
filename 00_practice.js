const prompt = require("prompt-sync")({sigint:true});

let arr = [1,2,3,4,5];
console.log(arr);

let a = arr.reduce((value1,value2) => {
    return value1*value2;
});
console.log(a);