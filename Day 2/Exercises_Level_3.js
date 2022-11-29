//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const pattern = /love/g;

console.log("1. " + sentence.match(pattern))
console.log("------------------------------")

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 = "You cannot end a sentence with because because because is a conjunction";
const pattern2 = /because/gi;

console.log("2. " + sentence2.match(pattern2))
console.log("------------------------------")

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence3 = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const sentence4 = sentence3.replace(/[^a-zA-Z0-9 ]/g, '');

console.log("3. " + sentence4)
console.log("------------------------------")

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const sentence5 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let a = parseInt(sentence5.substring(9, 12));
let b = parseInt(sentence5.substring(42, 46));
let c = parseInt(sentence5.substring(67, 71));

console.log("4. " + ((a * 12) +  b + (c * 12)))
console.log("------------------------------")
