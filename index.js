for (var i = 0 ; i < 7 ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var button = this.innerHTML;
    makesound(button);
    buttonanimation(button);
});
}
document.addEventListener("keypress",function (event){
  var keys = event.key;
  makesound(keys);
  buttonanimation(keys);
})


function makesound(parameter){
  switch (parameter) {
    case "d":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "f":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "g":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "h":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default:
    console.log(parameter);
  }
}

function buttonanimation(parameter){
  var ani = "." + parameter;
  document.querySelector(ani).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(ani).classList.remove("pressed");
  },100);
}
