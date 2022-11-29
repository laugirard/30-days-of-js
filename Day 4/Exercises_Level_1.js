const prompt = require("prompt-sync")()     //this is just for prompt() to work in nodejs

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt('1. Enter your age: ');
let ageDiff = 18 - age;

if(age >= 18){
    console.log("1. You are old enough to drive.")
    console.log("------------------------------")
} else{
    console.log(`1. You are left with ${ageDiff} years to drive`)
    console.log("------------------------------")
}

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
age = prompt('2. Enter your age: ');
let myAge = 31;
ageDiff = age - myAge;

if(myAge > age){
    console.log("2. I'm am older than you")
    console.log("------------------------------")
} else if(myAge < age) {
    console.log(`2. You are ${ageDiff} years older than me`)
    console.log("------------------------------")
} else{
    console.log(`2. We are the same age`)
    console.log("------------------------------")
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let a = 4
let b = 3

if(a > b){
    console.log(`3. ${a} is greater than ${b}`)
    console.log("------------------------------")
} else{
    console.log(`3. ${b} is greater than ${a}`)
    console.log("------------------------------")
}

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number: ')

if(number % 2==0){
    console.log("4. The number is even")
    console.log("------------------------------")
 }
 else{
    console.log("4. The number is odd")
    console.log("------------------------------")
 }