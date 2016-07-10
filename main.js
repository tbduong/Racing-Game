//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #
$(document).on("ready", function(){
$('.jumbotron').hide();
var playerOneCount = 0;
var playerTwoCount = 0;
// var playerThreeCount = 0;
// var playerFourCount = 0;
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
    console.log("Player 1 is the Winner!");
  } else if (event.which == (113)){ //q key
    $('.playerOne').stop().animate({left: '+=50', speed: 'fast'});
    playerOneCount ++;
    console.log(playerOneCount);{
  if(playerOneCount === 65){
    alert("PLAYER 1 wins!");
  }
}
}
});
$(document).on("keypress", function movePlayer2(event){
  if ((playerTwoCount>=60) || (winCount===1)){
    console.log("Player 3 is the Winner!");
  } else if (event.which == (112)){ //p key
      $('.playerTwo').stop().animate({left: '+=50', speed: 'fast'});
      playerTwoCount ++;
      console.log(playerTwoCount);
    if(playerTwoCount === 65){
    alert("PLAYER 2 wins!");
  }
}

});

//Reset Button
    $('.btn').on("click", function (reset){
      location.reload();
    });

});
// $(document).on("keypress", function movePlayer3(event) {
//   if ((playerThreeCount>=60) || (winCount===1)){
//     console.log("Player 3 is the Winner!");
//     //stops player from going on.
//   } else if (event.which == (122)){ //z key
//   $('.playerThree').stop().animate({left: '+=50', speed: 'fast'});
//   playerFourCount ++;
//   console.log(playerThreeCount);
//   if(playerThreeCount === 65){
//     alert("PLAYER 3 wins!");
//   }
// }
//
// $(document).on("keypress", function movePlayer4(event) {
//   if ((playerFourCount>=60) || (winCount===1)){
//     console.log("Player 4 is the Winner!");
//     //stops player from going on.
//   } else if (event.which == (109)){ //m key
//   $('.playerFour').stop().animate({left: '+=50', speed: 'fast'});
//   playerFourCount ++;
//   console.log(playerFourCount);
//   if(playerFourCount === 65){
//     alert("PLAYER 4 wins!");
//   }
// }
