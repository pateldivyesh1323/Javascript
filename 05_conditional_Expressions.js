const prompt = require("prompt-sync")({sigint:true});

let a = prompt("Enter your Age :");
// a = Number(a);

if(a>=18)
{
    console.log("You are Eligible.");
}
else if(a<18 && a>0)
{
    console.log("You are not ELigible.");
}
else
{
    console.log("Enter a valid age");
}