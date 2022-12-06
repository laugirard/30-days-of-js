//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Lautaro';
let lastName = 'Girard';
let country = 'Argentina';
let city = 'Buenos Aires';
let age = 31;
let isMarried = false;
let year = 2022;

console.log("1.     " + typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried)
console.log("------------------------------")

//Check if type of '10' is equal to 10
console.log("2.     " + typeof '10')
console.log("------------------------------")

//Check if parseInt('9.8') is equal to 10
console.log("3.     " + parseInt('9.8'))
console.log("------------------------------")

//Boolean value is either true or false.
let truthyA = true;
let truthyB = (1 >= 0);
let truthyC = (3 < 4);
let falsyA = false;
let falsyB = (1 <= 0);
let falsyC = (3 > 4);

console.log("4i.    " + truthyA + " " + truthyB + " " + truthyC)
console.log("4ii.   " + falsyA + " " +  falsyB + " " + falsyC)
console.log("------------------------------")

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("5i.    " + (4 > 3))      //true
console.log("5ii.   " + (4 >= 3))     //true
console.log("5ii.   " + (4 < 3))      //false
console.log("5iv.   " + (4 <= 3))     //false
console.log("5v.    " + (4 == 4))     //true
console.log("5vi.   " + (4 === 4))    //true
console.log("5vii.  " + (4 != 4))     //false
console.log("5viii. " + (4 !== 4))    //false
console.log("5ix.   " + (4 != '4'))   //false
console.log("5x.    " + (4 == '4'))   //true
console.log("5xi.   " + (4 === '4'))  //false
console.log("5xii.  " + ("python".length > "jargon".length ))  //false
console.log("------------------------------")

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("6i.    " + (4 > 3 && 10 < 12))     //true
console.log("6ii.   " + (4 > 3 && 10 > 12))     //false
console.log("6ii.   " + (4 > 3 || 10 < 12))     //true
console.log("6iv.   " + (4 > 3 || 10 > 12))     //true
console.log("6v.    " + !(4 > 3))               //false
console.log("6vi.   " + !(4 < 3))               //true
console.log("6vii.  " + !(false))               //true
console.log("6viii. " + !(4 > 3 && 10 < 12))    //false
console.log("6ix.   " + !(4 > 3 && 10 > 12))    //true
console.log("6x.    " + !(4 === '4'))           //true
console.log("6xi.   " + !("dragon".search('on') && "python".search('on'))) //false
console.log("------------------------------")

//Use the Date object to do the following activities
const now = new Date();

console.log("7i.    " + now.getFullYear())
console.log("7ii.   " + now.getMonth())
console.log("7iii.  " + now.getDate())
console.log("7iv.   " + now.getDay())
console.log("7v.    " + now.getHours())
console.log("7vi.   " + now.getMinutes())
console.log("7vii.  " + now.getTime())
console.log("------------------------------")
