function isLeap(year) {
    var message = "";
    
    if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
        message = "Leap year.";
    }
    else {
        message = "Not leap year.";
    }
    
    return (message);
}

function main() {
    console.log(isLeap(1989));
}
