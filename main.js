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
  if ((playerOneCount>=50) || (winCount===1)){
    console.log("Player 1 is the Winner!");
  } else if (event.which == (113)){ //q key
    $('.playerOne').stop(true, false).animate({left: '+=50'});
    playerOneCount ++;
    console.log(playerOneCount);{
  if(playerOneCount === 50){
    alert("PLAYER 1 wins!");
  }
}
}
});
$(document).on("keypress", function movePlayer2(event){
  if ((playerTwoCount>=50) || (winCount===1)){
    console.log("Player 2 is the Winner!");
  } else if (event.which == (112)){ //p key
      $('.playerTwo').stop(true, false).animate({left: '+=50'});
      playerTwoCount ++;
      console.log(playerTwoCount);
    if(playerTwoCount === 50){
    alert("PLAYER 2 wins!");
  }
}

});

//Reset Button
    $('.btn').on("click", function (reset){
      location.reload();
    });

});
