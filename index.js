var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    // setTimeout(buttonAnimation(soundLetter), 000);

    var soundLetter = this.innerText;
    buttonAnimation(soundLetter);

    switch (soundLetter) {
      case 'w':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 's':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'k':
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'l':
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(soundLetter);
    }
  });
}

document.addEventListener('keypress', function (e) {
  //   var key = new key();
  // setTimeout(buttonAnimation(keyPressed), 00);
  var keyPressed = e.key;
  // console.log(keyPressed);
  buttonAnimation(keyPressed);
  switch (keyPressed) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(e);
  }
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

/*********  Extra (Notes) ******/

// var el = document.querySelectorAll('.drum');
// for (var i = 0; i < el.length; i++) {
//     el[i].addEventListener('click', function () {
//         alert('hello');
//     }, false);
// }

// var test = document.getElementsByClassName("drum:nth-child(2)");
// var arr = Array.from(test);
// // alert(arr);
// arr.innerText = "yellow";
// alert(arr);
