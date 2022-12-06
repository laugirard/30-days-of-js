const prompt = require("prompt-sync")()     //this is just for prompt() to work in nodejs

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('1. Enter Base: ');
let height = prompt('1. Enter Height: ');
let areaTriangle = 0.5 * base * height;

console.log("1. The area of the triangle is " + areaTriangle)
console.log("------------------------------")

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt('2. Enter Side a: ');
let b = prompt('2. Enter Side b: ');
let c = prompt('2. Enter Side c: ');
let perimeterTriangle = parseInt(a) + parseInt(b) + parseInt(c);

console.log("2. The perimeter of the triangle is " + perimeterTriangle)
console.log("------------------------------")

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('3. Enter Length: ');
let width = prompt('3. Enter Width: ');
let areaRectangle = length * width;
let perimeterRectangle = 2 * (parseInt(length) + parseInt(width));

console.log("3. The area of the rectangle is " + areaRectangle)
console.log("3. The perimeter of the rectangle is " + perimeterRectangle)
console.log("------------------------------")

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radius = prompt('4. Enter Radius: ');
let areaCircle = PI * radius * radius;
let circumferenceCircle = 2 * PI * radius;

console.log("4. The area of the circle is " + areaCircle)
console.log("4. The circumference of the circle is " + circumferenceCircle)
console.log("------------------------------")

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('9. Enter Hours Worked: ');
let rate = prompt('9. Enter Rate Per Hour: ');
let pay = rate * hours;

console.log("9. The total pay is " + pay)
console.log("------------------------------")

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let yourName = prompt('10. Enter your name: ');

if(yourName.length > 7){
    console.log("10. your name is long")
    console.log("------------------------------")
} else{
    console.log("10. your name is short")
    console.log("------------------------------")
}

//Compare your first name length and your family name length and you should get this output.
let firstName = 'Lautaro'
let lastName = 'Girard'

console.log("11. Your first name, " + firstName + " is longer than your family name, " + lastName)
console.log("------------------------------")

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 31
let yourAge = 25
let ageDiff = myAge - yourAge;

console.log(`12. I am ${ageDiff} years older than you`)
console.log("------------------------------")

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearBorn = prompt('13. Enter the year you where born: ');
const now = new Date();
let drivingDiff = 18 - (now.getFullYear() - yearBorn);

if(now.getFullYear() - yearBorn >= 18){
    console.log("13. You are allowed to drive")
    console.log("------------------------------")
} else{
    console.log(`13. Please wait ${drivingDiff} years`)
    console.log("------------------------------")
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt('14. Enter the number of years: ');
let secondsLived = ((((years * 365) * 24) * 60) * 60);

console.log(`14. You lived ${secondsLived} seconds`)
console.log("------------------------------")

//Create a human readable time format using the Date time object
const current = new Date();
const currentYear = current.getFullYear();
const currentMonth = current.getMonth() + 1;
const currentDay = current.getDate();
const currenHours = current.getHours();
const currentMinutes = current.getMinutes();

console.log(`15. ${currentYear}-${currentMonth}-${currentDay} ${currenHours}:${currentMinutes}`)
console.log(`15. ${currentDay}-${currentMonth}-${currentYear} ${currenHours}:${currentMinutes}`)
console.log(`15. ${currentDay}/${currentMonth}/${currentYear} ${currenHours}:${currentMinutes}`)
console.log("------------------------------")