//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #

$(document).on("ready", function(){
$('.jumbotron').hide();
var playerOneCount = 0;
var winCount = 0;
  console.log ("sanity check");

//win conditions
// function win (winner) {
//      $( '.jumbotron' ).show( 15 );
//      $('.winning').text(winner + "is the winner!");
//      winCount++;
// }

//keypress function
$(document).on("keypress", function movePlayer1(event) {
  if ((playerOneCount>=60) || (winCount===1)){
    console.log("Player One is the Winner!");
    //stops player from going on.
  } else if (event.which == (113)){ //q key
  $('.playerOne').stop().animate({left: '+=50', speed: 'fast'});
  playerOneCount ++;
  console.log(playerOneCount);
  if(playerOneCount === 65){
    alert("PLAYER 1 wins!");
  }
}
//
//   } if (event.which == (112)){ //p key
//   $('.playerTwo').animate({left: '+=30', speed: 'fast'});
// }
//






});
//Reset Button
$('.btn').on("click", function (reset){
  location.reload();
});

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
