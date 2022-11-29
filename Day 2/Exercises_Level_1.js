//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days of JavaScript';
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const sentence = 'You cannot end a sentence with because because because is a conjunction';

//Print the string on the browser console using console.log()
console.log('2. ' + challenge)

//Print the length of the string on the browser console using console.log()
console.log('3. ' + challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log('4. ' + challenge.toUpperCase())

//Change all the string characters to lowercase letters using toLowerCase() method
console.log('5. ' + challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log('6. ' + challenge.substring(1))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log('7. ' + challenge.substring(0, 3))

//Check if the string contains a word Script using includes() method
console.log('8. ' + challenge.includes('Script'))

//Split the string into an array using split() method
console.log('9. ' + challenge.split())

//Split the string 30 Days Of JavaScript at the space using split() method
console.log('10. ' + challenge.split( ))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('11. ' + companies.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('12. ' + challenge.replace('JavaScript', 'Python'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log('13. ' + challenge.charAt(15))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log('14. ' + challenge.charCodeAt('J'))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log('15. ' + challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log('16. ' + challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('17. ' + sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('18. ' + sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('19. ' + sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log('20. ' + challenge.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('21. ' + challenge.startsWith('3'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log('22. ' + challenge.endsWith('t'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log('23. ' + challenge.match('a'))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const stringA = '30 Days of';
const stringB = 'JavaScript';
const stringAB = '';

console.log('24. ' + stringAB.concat(stringA, stringB))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log('25. ' + challenge.repeat(2))