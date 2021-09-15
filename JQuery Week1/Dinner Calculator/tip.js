//  dinner CALCULATOR
function calculateTip(bill) {
    var rating, tip, answer;

    if (isNaN(bill)) {
        alert("Sorry cost must be a number");
        return;
    }

    rating = prompt("Rate your service as either: Poor, Fair, Good or Excellent", "");

    if (rating === "poor") {
        tip = Math.round(((8 / 100) * bill) * 100) / 100;

    } else if (rating === "fair") {
        tip = Math.round(((10 / 100) * bill) * 100) / 100;

    } else if (rating === "good") {
        tip = Math.round(((15 / 100) * bill) * 100) / 100;

    } else if (rating === "excellent") {
        tip = Math.round(((20 / 100) * bill)) * 100 / 100;

    } else {
        alert("Sorry, you rated wrong");
        return;
    }

    bill = Math.round((bill + tip) * 100) / 100;

    alert("Your tip is: " + tip);
    alert("Your total is: " + bill);
}

calculateTip(prompt("Amount of Bill: ", 0));