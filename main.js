$(document).ready(function(){

  var name1 = "player X";//prompt("Player X, what is your name?");
  var name2 = "player O";//prompt("Player O, what is your name?");

  $("#scoreName1").text(name1);
  $("#scoreName2").text(name2);

  var game = {
    initial: 0,
    p1: 'X',
    p2: 'O',
    called:false,
    toggle:function(){
      if(!this.called){
        this.called = true; //toggle
        $('.playerturn').children('div').remove(); //removeline
        $('.playerturn').append("<div>" + name2 + ", it's your turn!" + "</div>"); //add "name2, it's your turn"
        return this.p1;
      } else {
        this.called = false;
        $('.playerturn').children('div').remove();
        $('.playerturn').append("<div>" + name1 + ", it's your turn!" + "</div>");
        return this.p2;
      }
    }
//Below is keeping track of the score for the two players
    name1Score: 0,
    name2Score: 0,
    Draw: 0,

  }

//initially change the player name on the board
  if(game.initial === 0){
    $('.playerturn').append("<div>" + name1 + ", it's your turn!" + "</div>");
    game.initial === 1;
  }

  if(game.called){
    if(game.initial === 1){
      $('.playerturn').append("<div>" + name2 + " , it's your turn!" + "</div>");
      game.initial === 0;
    }
  }

  //reset button
  $('#reset').click(function(){
    console.log('you clicked reset');
  });
  $('.tictacdata').click(function(){
    $(this).children('button').text(game.toggle());
  })

})//end of document.ready
