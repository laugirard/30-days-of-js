//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
const date = new Date();
const dateYear = date.getFullYear();
const dateMonth = date.getMonth() + 1;
const dateDay = date.getDate();
let dateHours = date.getHours();
let dateMinutes = date.getMinutes();

if (dateHours < 10){
    dateHours = '0' + dateHours
}

if (dateMinutes < 10){
    dateMinutes = '0' + dateMinutes
}

console.log(`${dateYear}-${dateMonth}-${dateDay} ${dateHours}:${dateMinutes}`)