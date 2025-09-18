let age = 20;

if (age < 18) {
  console.log("Vous êtes mineur.");
} else if (age === 18) {
  console.log("Vous venez d’atteindre la majorité !");
} else {
  console.log("Vous êtes majeur.");
}

// switch 
let day = 3; 
switch (day) {

    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid Day");
}