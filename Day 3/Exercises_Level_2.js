const prompt = require("prompt-sync")()     //this is just for prompt() to work in nodejs

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter Base: ');
let height = prompt('Enter Height: ');
let areaTriangle = 0.5 * parseInt(base) * parseInt(height);

console.log("1. The area of the triangle is " + areaTriangle)

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt('Enter Side a: ');
let b = prompt('Enter Side b: ');
let c = prompt('Enter Side c: ');
let perimeterTriangle = parseInt(a) + parseInt(b) + parseInt(c);

console.log("2. The perimeter of the triangle is " + perimeterTriangle)

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('Enter Length: ');
let width = prompt('Enter Width: ');
let areaRectangle = parseInt(length) * parseInt(width);
let perimeterRectangle = 2 * (parseInt(length) + parseInt(width));

console.log("3. The area of the rectangle is " + areaRectangle)
console.log("   The perimeter of the rectangle is " + perimeterRectangle)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const PI = 3.14;
let radius = prompt('Enter Radius: ');
let areaCircle = PI * parseInt(radius) * parseInt(radius);
let circumferenceCircle = 2 * PI * parseInt(radius);

console.log("4. The area of the circle is " + areaCircle)
console.log("   The circumference of the circle is " + circumferenceCircle)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter Hours Worked: ');
let rate = prompt('Enter Rate Per Hour: ');
let pay = parseInt(rate) * parseInt(hours);

console.log("9. The total pay is " + pay)

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = 'Lautaro';

if(myName.length > 7){
    console.log("10. your name is long")
} else console.log(" your name is short")

//Compare your first name length and your family name length and you should get this output.
let firstName = 'Lautaro'
let lastName = 'Girard'

console.log("11. Your first name, " + firstName + " is longer than your family name, " + lastName)

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 31
let yourAge = 25
let ageDiff = myAge - yourAge;

console.log(`I am ${ageDiff} years older than you`)

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearBorn = prompt('Enter the year you where born: ');
const now = new Date();
let drivingDiff = 18 - (now.getFullYear() - parseInt(yearBorn));

if(now.getFullYear() - parseInt(yearBorn) >= 18){
    console.log("You are allowed to drive")
}
else console.log(`Please wait ${drivingDiff} years`)

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt('Enter the number of years: ');
let secondsLived = ((((parseInt(years) * 365) * 24) * 60) * 60);

console.log(`You lived ${secondsLived} seconds`)

//Create a human readable time format using the Date time object
const current = new Date();
const currentYear = current.getFullYear();
const currentMonth = current.getMonth() + 1;
const currentDay = current.getDate();
const currenHours = current.getHours();
const currentMinutes = current.getMinutes();

console.log(`${currentYear}-${currentMonth}-${currentDay} ${currenHours}:${currentMinutes}`)
console.log(`${currentDay}-${currentMonth}-${currentYear} ${currenHours}:${currentMinutes}`)
console.log(`${currentDay}/${currentMonth}/${currentYear} ${currenHours}:${currentMinutes}`)