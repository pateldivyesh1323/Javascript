const prompt = require("prompt-sync")({sigint:true});

let age = prompt("Enter your Age :");
age = Number.parseInt(age);

switch(age)
{
    case 12:
        console.log("Your age is "+age);
        break;
    
    case 13:
        console.log("Your age is "+age);
        break;

    case 14:
        console.log("Your age is "+age);
        break;

    case 15:
        console.log("Your age is "+age);
        break;

    case 16:
        console.log("Your age is "+age);
        break;
    
    default:
        console.log("This is not a valid Age");
        break;
    
}