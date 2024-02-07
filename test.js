/** Question 1: FizzBuzz **/
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".




/* Points*/

// If a number is divisible by 3 , we'll say "Fizz.

// If a number is divisible by 5 , we'll say "Buzz.

//If a number is divisible by both 3 and 5, we'll say "FizzBuzz.

function fizzBuzz(num){
    for(let i = 1 ; i <= num ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz(100);



/**Question 2: Fibonacci Sequence**/

//Write a program to generate the Fibonacci sequence up to 100.

function fibonnaci(n){
    const fib = [0,1]  //initialize a variable fib with 2 numbers in an array
    for(let i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]  //i is the sum of two preceeding numbers
    }
    return fib;
}
console.log(fibonnaci(100));