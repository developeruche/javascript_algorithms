// This is the Fizz Buzz Algorithm.
/* 
    Where Fizz: 3
    and Buzz: 5
 */

const interFunction = (num) => {
    // The function would return Fizz is the current number is divisible be 3
    // Return Buzz is the number is divisible by 5
    // And buzz if the number is divisible by 5 and also bt 3

    if (num % 3 == 0 && num % 5 != 0){
        return "Fizz"
    }else if(num % 5 == 0 && num % 3 != 0){
        return "Buzz"
    }else if(num % 5 == 0 && num % 3 == 0){
        return "FizzBuzz"
    }else return num
}
const FizzBuzz = (number) => {
    // The function would take a number a it parameter and loop through it,
    // The find and replace factor of 3 with Fizz and Five with Buzz.

    // Looping through the "Number"
    for(let i = 1; i <= number; i++){
        console.log(interFunction(i))
    }
}

FizzBuzz(50)