function generateFibonacci(n) {
    var myArray = [];

    if (n === 1) {
        myArray = [0];
    }

    else if (n == 2) {
        myArray = [0, 1];
    }

    else {
        myArray = [0, 1];

        for (var counter = 2; counter < n; counter++) {
            myArray.push(myArray[myArray.length - 2] + myArray[myArray.length - 1]);
        }
    }

    return myArray;
}

function main() {
    const prompt = require("prompt-sync")();

    var n = prompt("Please enter a number to generate a Fibonacci sequence with: ");

    console.log(generateFibonacci(n));
}

main();
