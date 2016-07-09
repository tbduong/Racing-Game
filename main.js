//have playerOne animate towards target column(finish line)
//set variables and position of players
//create animate function that moves player to target
  //have it trigger on KEYPRESS, key #

$(document).on("ready", function(){

$(document).on("keypress", function movePlayer(event) {
  if (event.which == (113, 87)); //q key
    $('.playerOne').animate({left: '+=100'});
  });

  // if ('.playerOne' === '.col-md-1'){
  //   alert("winner!");
  //
  // });






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
