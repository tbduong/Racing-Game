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
  if ((playerOneCount>=35) || (winCount===1)){
    console.log("Player 1 is the Winner!");

  } else if (event.which == (113)){ //q key
    $('.playerOne').stop(true, false).animate({left: '+=60'});
    playerOneCount ++;
    console.log(playerOneCount);
//     {if(playerOneCount === 35){
//       $("#result").append("PLAYER 1 wins!");
//       winCount ++;
//       $("#playerOneScore").append(winCount); //Win counter on scoreboard
//   }
// }
}
});
$(document).on("keypress", function movePlayer2(event){
  if ((playerTwoCount>=35) || (winCount===1)){
    console.log("Player 2 is the Winner!");
  } else if (event.which == (112)){ //p key
      $('.playerTwo').stop(true, false).animate({left: '+=60'});
      playerTwoCount ++;
      console.log(playerTwoCount);

//     if(playerTwoCount === 35){
//       $("#result").append("PLAYER 2 wins!");
//       winCount ++;
//       $("#playerTwoScore").append(winCount);
//   }
// }
  }
});


//Reset Button
    $('.btn').on("click", function (reset){
      location.reload();
    });

});
