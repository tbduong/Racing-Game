//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #
$(document).on("ready", function(){
  console.log("sanity test!");
var playerOneCount = 0;
var playerTwoCount = 0;
var winCount= 0;

//keypress function
$(document).on("keypress", function movePlayer1(event) {
  if ((playerOneCount>=32) || (winCount===1)){
    console.log("Player 1 is the Winner!");

  } else if (event.which == (113)){ //q key
    $('.playerOne').css({"left": '+=35'});
    playerOneCount ++;
    console.log(playerOneCount);
}   if(playerOneCount === 32){
      $("#result").text("PLAYER 1 wins!");
      winCount ++;
      $("#playerOneScore").text(winCount);
  }

});

$(document).on("keypress", function movePlayer2(event){
  if ((playerTwoCount>=32) || (winCount===1)){
    console.log("Player 2 is the Winner!");
  } else if (event.which == (112)){ //p key
      $('.playerTwo').css({"left": '+=35'});
      playerTwoCount ++;
      console.log(playerTwoCount);
  }   if(playerTwoCount === 35){
      $("#result").text("PLAYER 2 wins!");
      winCount ++;
      $("#playerTwoScore").text(winCount);

//TODO: atm the scoreboard continues to add to playerOneScore from both players' wins. Player 2 wins accumulate inside there as well...
//need to make two separate variables winOne and winTwo, so append into player Two's box




  // if (function winCheck(num){
  //   if(num === 1 ) {
  //     if(playerOneCount === 32) {
  //       $("#result").text("PLAYER 1 wins!");
  //       winCount ++;
  //       $("#playerOneScore").text(winCount);//Win counter on scoreboard
  //     }
  //   } else if (num === 2) {
  //     if(playerTwoCount === 32) {
  //       $("#result").text("PLAYER 2 wins!");
  //       winCount ++;
  //       $("#playerTwoScore").text(winCount); //Win counter on scoreboard
  //     }
  //   }
  // });
  }


});



//Reset Button
    // function $reset(){
    //     $(".btn").on("click", function(){
    //
    //
    //
    //     });
    // }

});
