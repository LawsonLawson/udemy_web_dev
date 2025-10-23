// Detecting button click and making the appropriate sound

for (var counter = 0; counter < document.querySelectorAll('.drum').length; counter++) {
    document.querySelectorAll('.drum')[counter].addEventListener("click", function () {

        var buttonText = this.innerHTML;
        makeSound(buttonText); // as usual, after a click, we obtain the inner html of the button clicked then pass that value as a parameter to the makeSound function
        animateButton(buttonText);

    });
}


// Detecting button press and making the appropriate sound


document.addEventListener("keypress", function(event) {
    makeSound(event.key); // event returns an array so we use . to access the 'key' value and pass that value as a parameter to the makeSound function
    animateButton(event.key);
});


function makeSound(key) {

            switch(key) {
            case "w":
                var tom1Drum = new Audio('./sounds/tom-1.mp3');
                tom1Drum.play();
                break;
            case "a":
                var tom2Drum = new Audio('./sounds/tom-2.mp3');
                tom2Drum.play();
                break;
            case "s":
                var tom3Drum = new Audio('./sounds/tom-3.mp3');
                tom3Drum.play();
                break;
            case "d":
                var tom4Drum = new Audio('./sounds/tom-4.mp3');
                tom4Drum.play();
                break;
            case "j":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
            default:
                console.log(buttonText);
        }
}


// Let's add some animation


function animateButton(activeButton) {
    // select the pressed button
    var pressedButton = document.querySelector("." + activeButton);

    // add the 'pressed' class from the css to it
    pressedButton.classList.add("pressed");

    // set a timeout and remove class added
    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 100);
}