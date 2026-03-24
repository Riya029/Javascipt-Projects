var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
    console.log("success");
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  } else{
    console.log("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over, Press any key to restart");

     startOver();
  }
}
  
function nextSequence() {


  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  userClickedPattern = [];
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//1. Create a new function called startOver().
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}








// alert("Hola");
// document.addEventListener("keypress", function(event){
//     // alert("Key was pressed");
//     // console.log(event);
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
//   playSound(userChosenColour);

  

// });

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//   playSound(randomChosenColour);
// }

// //2. Create a new function called playSound() that takes a single input parameter called name.
// function playSound(name) {

//   //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// // step 6 
// function animatePress(currentColor){
//   $("#" + currentColor).addClass("pressed");

//   setTimeout(function(){
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }


// // document.getElementById("green").click();
// // document.getElementById("red").click();
// // document.getElementById("yellow").click();
// // document.getElementById("blue").click();



// // function makeSound(key) {
// //     switch(key) {
// //             case "b":
// //                 var blue = new Audio("sounds/blue.mp3");
// //                      blue.play();
// //                  break;
                
// //              case "g":
// //                     var green = new Audio("sounds/green.mp3");
// //                      green.play();
// //                  break;
// //             case "r":
// //                     var red = new Audio("sounds/red.mp3");
// //                      red.play();
// //                  break;
// //             case "y":
// //                     var yellow = new Audio("sounds/yellow.mp3");
// //                      yellow.play();
// //                  break;
          
// //             case "w":
// //                     var wrong = new Audio("sounds/wrong.mp3");
// //                      wrong.play();
// //                  break;
            

            

// //                 default:console.log(buttonInnerHTML);

// //             }

// // }