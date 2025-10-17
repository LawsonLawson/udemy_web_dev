function isGuest(name) {
    var guestList = ["Lawson", "Israel", "Pascal", "Deladem", "Miriam", "Addo"];

    return guestList.includes(name);
}

function main() {
    const prompt = require("prompt-sync")();
    var name = prompt("What is your name?: ");

    if (isGuest(name)) {
        console.log("Hi " + name + ", you are welcome. Make yourself at home");
    }
    else {
        console.log("Sorry, " + name + ", you are not on the guestlist. Go home.");
    }
}

main();

