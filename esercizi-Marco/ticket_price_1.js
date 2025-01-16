// creare un programma che determini il prezzo di un biglietto del cinema; in base a età utente e giorno della settimana, applicando sconti. //

const userAge = 17;

const ticketPrice = userAge >= 18? "Regular ticket: 20$" : "Reduced-price ticket: 10$";

console.log(ticketPrice);

const day_Of_The_Week = "Saturday";

switch (day_Of_The_Week) {
    case "Thursday":
        console.log("Discont: -2$")
        break;
    case "Friday":
        console.log("Discont: -3$")
        break;
    case "Saturday":
        console.log("Discont: -4$") 
        break;
    case "Sunday":
        console.log("Discount: -5$")  
        break;
    default: console.log("No discount")     

}
