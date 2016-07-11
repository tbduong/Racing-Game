function winCheck(num){
  if(num === 1 ) {
    if(playerOneCount === 35) {
      $("#result").append("PLAYER 1 wins!");
      winCount ++;
      $("#playerOneScore").append(winCount); //Win counter on scoreboard
    }
  } else if (num === 2) {
    if(playerOneCount === 35) {
      $("#result").append("PLAYER 2 wins!");
      winCount ++;
      $("#playerTwoScore").append(winCount); //Win counter on scoreboard
    }
  }
}
