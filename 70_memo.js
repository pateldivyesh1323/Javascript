// Implementing Memoization in Js
// Memoization is an optimizing technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning result from it.
let sum = 0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache)
        {
            return cache[n];
        }
        else
        {
            console.log("Calculating first time...")
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time(1);
const eff = memoize(calc);
console.log(eff(1000000));
console.timeEnd(1);
console.time(2);
console.log(eff(1000000));
console.timeEnd(2);