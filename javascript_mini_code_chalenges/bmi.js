/**
 * This is a simple function that computes the bmi given the weight in kilograms
 * (kg) and height in metres (m).
 *

Testing the function ... 
function main() {
    var bmi = bmiCalculator(65, 1.8); // output should be 20

    console.log(bmi);
}
*/


function bmiCalculator(weight, height) {
    return Math.floor(weight / (height * height));
}
