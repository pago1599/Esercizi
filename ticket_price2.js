const ticketPrice = 15;
const userAge = 18;
const day_Of_The_Week = "Saturday";

const finalTicketPrice = (userAge < 18 || userAge > 60) ? ticketPrice - 4 : ticketPrice;

switch (day_Of_The_Week) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log(finalTicketPrice - 5);
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log(finalTicketPrice);
        break;
    default: console.log("Day of the week is not valid");
}

