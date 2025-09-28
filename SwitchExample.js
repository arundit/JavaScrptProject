let age = 18;
//using switch case determine if a person is eligible to vote or not


switch (true) {
    case (age === 18):
        console.log("Just eligible to vote");
        break;
    case (age > 18):
        console.log("Already Eligible to vote");
        break;
    case (age < 18 && age > 0):
        console.log("Not eligible to vote");
        break;
    default:
        console.log("Invalid age");
        break;
}



// simple switch case example
let day = 5;
let dayName = "";


switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";  
        break;
    case 4:
        dayName = "Thursday";  
        break;
    case 5:
        dayName = "Friday";  
        break;  
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}


console.log("Day " + day + " is " + dayName);






