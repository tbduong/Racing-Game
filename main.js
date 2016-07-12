
$(document).on("ready", function(){
//variables needed to tally scoreboard-- still buggy
  var playerOneCount = 0;
  var playerTwoCount = 0;
  var winCount= 0;

  var MOVE_AMT = 32;
  var CHAR_ONE = 113;
  var CHAR_TWO = 112;
  //function to move:


  //keypress function
  $(document).on("keypress", function movePlayer1(event) {
    if ((playerOneCount>=MOVE_AMT) || (winCount===1)){
    } else if (event.which == (CHAR_ONE)){ //q key
      $('.playerOne').css({"left": '+=35'});
      playerOneCount ++;
    }   if(playerOneCount === MOVE_AMT){
      $("#result").text("PLAYER 1 wins!");
      winCount ++;
      $("#playerOneScore").text(winCount);
    }
  });

  $(document).on("keypress", function movePlayer2(event){
    if ((playerTwoCount>=MOVE_AMT) || (winCount===1)){
    } else if (event.which == (CHAR_TWO)){ //p key
      $('.playerTwo').css({"left": '+=35'});
      playerTwoCount ++;

    }   if(playerTwoCount === MOVE_AMT){
      $("#result").text("PLAYER 2 wins!");
      winCount ++;
      $("#playerTwoScore").text(winCount);
    }
  });

  //Reset Button-- remove/add classes, text, etc.
  function reset(){
    $(".btn").on("click", function handleClick(event){
      $(".playerOne").css("left",("0"));
      $(".playerTwo").css("left",("0"));
      $(".playerOne").removeClass("#result");




    });
  }

});
