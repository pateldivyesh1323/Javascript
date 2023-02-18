const prompt = require("prompt-sync")({sigint:true});

let player;
let comp;
let playAgain;



do{
    comp = Math.ceil(Math.random()*3);

    if(comp == 1)
    {
        comp = "s";
    }
    else if(comp == 2)
    {
        comp ="w";
    }
    else
    {
        comp = "g";
    }

    player = prompt("Enter your choice between s,w or g :");

    if((player == "s" && comp =="w") || (player == "g" && comp =="s") || (player == "w" && comp =="g"))
    {
        console.log("You Win");
    }
    else if((player == "w" && comp =="s") || (player == "s" && comp =="g") || (player == "g" && comp =="w"))
    {
        console.log("You Lose");
    }
    else if((player == "s" && comp =="s") || (player == "g" && comp =="g") || (player == "w" && comp =="w"))
    {
        console.log("It's a Draw");
    }
    else
    {
        console.log("Enter a Valid Choice!");
        break;
    }
    console.log("Computer chose "+comp);

    playAgain = prompt("Do you want to play again y/n : ");

}while(playAgain == "y");