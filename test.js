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



/*
Question 3: Power of Two
Write a program that takes an integer as input and returns true if the input is a power of two.
Examples: 
8=> returns true
6=> returns false */


function isPowerTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n % 2 !== 0){
            return false;
        }
        n=n/2;
    }
    return true;
}
console.log(isPowerTwo(2)) //true
console.log(isPowerTwo(8)) //true
console.log(isPowerTwo(9)) //false
console.log(isPowerTwo(16)) //true


/*Question 4: Capitalize Words
Write a program that accepts a string as input, capitalizes the first letter of each word in the 
string, and then returns the result string.
Examples: 
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"*/

function capitalizeWords(str) {
 
  const words = str.split(" "); // Split the string into an array of words

  // Loop through each word
  for (let i = 0; i < words.length; i++) {
  
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);  // Capitalize the first letter
  }

  
  return words.join(" "); // Join the capitalized words back into a string
}

// Example usage
const inputString = "hi there, i love programming";
const capitalizedString = capitalizeWords(inputString);


console.log(capitalizedString); 


/*Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit 
ordering.
Examples */

//use toString to convert it to a new string
//Use the split() method to return a new array
// Use the reverse() method to reverse the new created array
//Use the Join() method to join all the elements of the array into a string

const revInt = (num) =>{
    let myRevNum = num.toString().split("").reverse()
    console.log(myRevNum)
}
revInt(123);