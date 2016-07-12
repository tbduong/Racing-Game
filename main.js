//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
//have it trigger on KEYPRESS, key #
$(document).on("ready", function(){
  // console.log("sanity test!");
  // var playerOneCount = 0;
  // var playerTwoCount = 0;
  // var winCount= 0;

  var MOVE_AMT = 32;
  var CHAR_ONE = 113;
  var CHAR_TWO = 112;
  var winCount = 0;
  var playerOneCount=0;
  var playerTwoCount=0;

  var playerOne = {
    charChode: CHAR_ONE,
    num: 0,
    position: 0,
    $el: $(".player").eq(0),
    name: "Seahorse 1"
  };
  var playerTwo = {
    charChode: CHAR_TWO,
    num: 1,
    position: 0,
    $el: $(".player").eq(1),
    name: "Seahorse 2"
  };
  var players = [playerOne, playerTwo];

  //keypress function
  $(document).on("keypress", function move(player) {
    if ((playerOneCount===MOVE_AMT) || (winCount===1)){
    } else if (event.which == (CHAR_ONE)){ //q key
      $('.playerOne').css({"left": '+=35'});
      player.position ++;

    }
  });
  $(document).on("keypress", function movePlayer2(event){
    if ((playerTwoCount===MOVE_AMT) || (winCount===1)){
    } else if (event.which == (CHAR_TWO)){ //p key
      $('.playerTwo').css({"left": '+=35'});
      player ++;

      if (function winCheck(num){
        if(num === 1 ) {
          if((playerOneCount === MOVE_AMT) || (winCount===1)) {
            $("#result").text("PLAYER 1 wins!");
            winCount ++;
            $("#playerOneScore").text(winCount);//Win counter on scoreboard
          }
        } else if (num === 2) {
          if((playerTwoCount === MOVE_AMT) || (winCount===1)){
            $("#result").text("PLAYER 2 wins!");
            winCount ++;
            $("#playerTwoScore").text(winCount); //Win counter on scoreboard
          }
        }
      });
    }


  });


  //Reset Button
  function reset(){
    $(".btn").on("click", function handleClick(event){
      $(".playerOne").clearQueue();
      $(".playerOne").stop();
      $(".playerOne").css("left",("0"));
      $(".playerTwo").css("left",("0"));



    });
  }

});
