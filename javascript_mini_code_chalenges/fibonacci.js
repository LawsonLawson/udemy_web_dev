function fibonacci() {
    const prompt = require("prompt-sync")();
    var userInput = prompt("Please enter a number to create a fibonacci sequence: ");


    var firstNumber = 0;
    var secondNumber = 1;
    var counter = 0;
    var myArray = [];

    if (userInput == 1) {
        myArray.push(0);
    }

    else if (userInput == 2) {
            myArray.push(0);
            myArray.push(1);
        }
    while (counter < (userInput - 2)) {
        var valueToPrint = firstNumber + secondNumber;

        if (counter == 0) {
            myArray.push(firstNumber);
            myArray.push(secondNumber);
        }
        myArray.push(valueToPrint);
        firstNumber = secondNumber;
        secondNumber = valueToPrint;
        counter++;
    }
    return myArray;
}

function main() {
    console.log(fibonacci());
}
main();
