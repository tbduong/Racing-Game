//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #

$(document).on("ready", function(){

var counter = 0;

//keypress function
$(document).on("keypress", function movePlayer(event) {
  if (counter=100){


  }else if (event.which == (113)){ //q key
  $('.playerOne').animate({left: '+=20', speed: 'fast'});{

    }
  }

  {if (event.which == (112)){ //p key
  $('.playerTwo').animate({left: '+=20', speed: 'fast'});
  }





}

});

//win conditions







});

















// var playerOne = [".image", "null", "null", "null"];
//
// function move(){
//     playerOne.pop(null);
//     playerOne.unshift(".image");
//     if(playerOne === (playerOne.length-1)){
//       console.log("test");
//     }
//
// }

//
// $("#startAnimation").click(function(){
//     $(".toBeAnimated").animate({
//         marginLeft: "+=250px",
//     }, 1000 );
// });
