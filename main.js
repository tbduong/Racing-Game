//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #
$(document).on("ready", function(){
// $('.jumbotron').hide();
// // var playerOneCount = 0;
// // var playerTwoCount = 0;
// // var winCountOne = 0;
// // var winCountTwo = 0;


//keypress function
//Player One
$(document).on("keypress", function (event) {
    if(event.which == 112) { //p key
        $(".playerOne").css("left", ("+=30"));
          if ($(".container").width() <= $(".playerOne").offset().left + $(".playerTwo").outerWidth()){
            stopMove();
        }
    }


});

// $(document).on("keypress", function movePlayer1(event) {
//   if ((playerOneCount>=50) || (winCountOne===1)){
//   } else if (event.which == (113)){ //q key
//     $('.playerOne').stop(true, false).animate({left: '+=70px'},{speed:
//     'fast'});
//     playerOneCount ++;
//     console.log(playerOneCount);{
//       if(playerOneCount === 50){
//     winCountOne ++;
//   $("#scoreboard").text("Seahorse One is the winner!"); //Player One wins!
//       }
//     }
//   }
// });

//Player Two
$(document).on("keypress", function (event) {
    if(event.which == 112) { //p key
        $(".playerTwo").css("left", ("+=30"));
        if ($(".container").width() <= $(".playerTwo").offset().left + $(".playerTwo").outerWidth());{
          stopMove();
        }
    }


});

function stopMove() {
    $('.playerOne').clearQueue();
    $('.playerOne').stop();
    $('.playerTwo').clearQueue();
    $('.playerTwo').stop();
    $(document).off("keypress");
    }


//Reset Button
    $('.btn').on("click", function (reset){
      location.reload();
    });



});
