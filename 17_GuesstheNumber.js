let num = Math.ceil(Math.random()*100);
let counter = 0;
let user_ans;

do
{
    user_ans = prompt("Enter your Guess between 1 to 100 : ");
    if(user_ans>num)
    {
        console.log("Your guess was Greater than the Actual Number");
    }
    else if(user_ans<num)
    {
        console.log("Your guess was Lower than the Actual Number");
    }
    counter++;
}while(user_ans!=num);

console.log("***************************************************************");
console.log("Congratulations! you guessed it. You took "+counter+" number of guess.\nCorrect answer is "+num+".");