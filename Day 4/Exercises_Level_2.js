const prompt = require("prompt-sync")()     //this is just for prompt() to work in nodejs

//Write a code which can give grades to students according to theirs scores:
let score = prompt('1. Enter your score: ');

    if (score >= 90){
        console.log("1. Your grade is A")
        console.log("------------------------------")
    } else if(score >= 70 && score <= 89){
        console.log("1. Your grade is B")
        console.log("------------------------------")
    } else if(score >= 60 && score <= 69){
        console.log("1. Your grade is C")
        console.log("------------------------------")
    } else if(score >= 50 && score <= 59){
        console.log("1. Your grade is D")
        console.log("------------------------------")
    } else if(score >= 0 && score <= 49){
        console.log("1. Your grade is F")
        console.log("------------------------------")
    } else{
        console.log(`1. ${score} is not a valid score.`)
        console.log("------------------------------")
    }

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
let month = prompt('2. Enter the month: ').toLowerCase();

    if(month === 'september' || month === 'october' || month === 'november'){
        console.log("2. The season is Autumn")
        console.log("------------------------------")
    } else if(month === 'december' || month === 'january' || month === 'february'){
        console.log("2. The season is Winter")
        console.log("------------------------------")
    } else if(month === 'march' || month === 'april' || month === 'may'){
        console.log("2. The season is Spring")
        console.log("------------------------------")
    } else if(month === 'june' || month === 'july' || month === 'august'){
        console.log("2. The season is Summer")
        console.log("------------------------------")
    } else{
        console.log(`2. ${month} is not a valid month.`)
        console.log("------------------------------")
    }

//Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('3. Enter the day: ').toLowerCase();

    if(day === 'saturday' || day === 'sunday'){
        console.log(`3. ${day} is a weekend.`)
        console.log("------------------------------")
    } else if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
        console.log(`3. ${day} is a working day.`)
        console.log("------------------------------")
    } else{
        console.log(`3. ${day} is not a valid day.`)
        console.log("------------------------------")
    }