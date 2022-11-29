const prompt = require("prompt-sync")()     //this is just for prompt() to work in nodejs

//Write a program which tells the number of days in a month, now consider leap year.
let month = prompt('1. Enter the month: ').toLowerCase();

    switch (month){
        case 'january':
            console.log("1. January has 31 days")
            console.log("------------------------------")
            break
        case 'february':
            console.log("1. February can have 28 or 29 days")
            console.log("------------------------------")
            break
        case 'march':
            console.log("1. March has 31 days")
            console.log("------------------------------")
            break
        case 'april':
            console.log("1. April has 30 days")
            console.log("------------------------------")
            break
        case 'may':
            console.log("1. May has 31 days")
            console.log("------------------------------")
            break
        case 'june':
            console.log("1. June has 30 days")
            console.log("------------------------------")
            break
        case 'july':
            console.log("1. July has 31 days")
            console.log("------------------------------")
            break
        case 'august':
            console.log("1. August has 31 days")
            console.log("------------------------------")
            break
        case 'september':
            console.log("1. September has 30 days")
            console.log("------------------------------")
            break
        case 'october':
            console.log("1. OCtober has 31 days")
            console.log("------------------------------")
            break
        case 'november':
            console.log("1. November has 30 days")
            console.log("------------------------------")
            break
        case 'december':
            console.log("1. December has 31 days")
            console.log("------------------------------")
            break
        default:
                console.log(`1. ${month} is not a valid month.`)
                console.log("------------------------------")
    }