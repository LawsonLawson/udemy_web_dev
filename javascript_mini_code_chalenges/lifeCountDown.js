/**
 * Given the age, this function tells the days, weeks and months you have
 * left to live if you are living till age 90
 */

function lifeInWeeks(age) {
    age = 90 - age;
    var days = 365 * age;
    var weeks = 52 * age;
    var months = 12 * age;

    console.log("You have " + days + ", " + weeks + " weeks, and " + months + " left.");
}

function main() {

    lifeInWeeks(56);
}

main();
