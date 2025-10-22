// generate first random number from 1 - 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

// name the image
var firstImageName = "./images/dice" + randomNumber1 + ".png";

// select the first image tag
var firstImage = document.querySelectorAll("img")[0] // first image

// change attribute 
firstImage.setAttribute("src", firstImageName);

// generate second random number from 1 - 6
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// name the image
var secondImageName = "./images/dice" + randomNumber2 + ".png";

// select the second image tag
var secondImage = document.querySelectorAll("img")[1] // second image

// change attribute 
secondImage.setAttribute("src", secondImageName);

var heading = document.querySelectorAll("h1")[0];

// set red flag
var flag = "\u{1F6A9}";

// determine winner
if (randomNumber1 > randomNumber2) {
        heading.innerHTML = flag + "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
        heading.innerHTML = "Player 2 Wins!" + flag;
}
else {
        heading.innerHTML = "Draw!";
}
