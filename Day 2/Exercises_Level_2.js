//Using console.log() print out the following statement:
console.log("1. The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//Using console.log() print out the following quote by Mother Teresa:
console.log("2. Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let value = '10'
console.log("3. typeof '10': " + typeof (value) + " | exactly equal: " + Number(value))
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("4. parseFloat '9.8': " + parseFloat('9.8'))
//Check if 'on' is found in both python and jargon
const a = 'python', b = 'jargon'
console.log("5. python: " + a.includes('on') + " | jargon: " + b.includes('on'))
//I hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = 'I hope this course is not full of jargon'
console.log("6. " + sentence.includes('jargon'))
//Generate a random number between 0 and 100 inclusively.
const randNum1 = Math.floor(Math.random() * 101)
console.log("7. " + randNum1)
//Generate a random number between 50 and 100 inclusively.
const randNum2 = Math.floor(Math.random() * 51) + 50
console.log("8. " + randNum2)
//Generate a random number between 0 and 255 inclusively.
const randNum3 = Math.floor(Math.random() * 256)
console.log("9. " + randNum3)
//Access the 'JavaScript' string characters using a random number.
const stringChar = 'JavaScript'
const randNum4 = Math.floor(Math.random() * 11)
console.log("10. " + stringChar[randNum4])
//Use console.log() and escape characters to print the following pattern.
console.log("11. 1 1 1 1 1\n    2 1 2 4\n    3 1 3 9 27\n    4 1 4 16 64\n    5 1 5 25 125")
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = "You cannot end a sentence with because because because is a conjunction"
console.log("12. " + phrase.substr(31, 23))