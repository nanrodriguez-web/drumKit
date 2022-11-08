var numofButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i < numofButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound);


}

function playSound() {

    // this.style.color = "white";
    var buttonData = this.innerHTML;


    switch (buttonData) {
        case "W":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

            break;

        case "A":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "J":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "K":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "L":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonData);
    }
    buttonAnimation(buttonData);





}

document.addEventListener("keypress", keysound);

function keysound(event) {
    var keyPressed = event.key;

    switch (keyPressed) {
        case "W":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "J":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "K":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "L":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(event.code);

    }
    buttonAnimation(keyPressed);


}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100)






}