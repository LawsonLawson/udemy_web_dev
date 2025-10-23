for (var counter = 0; counter < document.querySelectorAll('.drum').length; counter++) {
    document.querySelectorAll('.drum')[counter].addEventListener("click", function () {

        var buttonText = this.innerHTML;
        switch(buttonText) {
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
    });
}



/*         var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();*/