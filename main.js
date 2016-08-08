$(document).ready(function(){

  var name1 = "player X";//prompt("Player X, what is your name?");
  var name2 = "player O";//prompt("Player O, what is your name?");

  $("#scoreName1").text(name1);
  $("#scoreName2").text(name2);

  var game = {
    currentPlayerVal: 2,
    playerOne: {
      symbol: 'X',
      value: '2'
    },
    playerTwo:{
      symbol: 'O',
      value: '5'
    },

    initial: 0,
    called: false,
    toggle: function(){
      if(!this.called){
        this.called = true; //toggle
        $('.playerturn').children('div').remove(); //removeline
        $('.playerturn').append("<div>" + name2 + ", it's your turn!" + "</div>"); //add "name2, it's your turn"
        this.currentPlayerVal = this.playerTwo['value'];
        return this.playerOne['symbol'];
      } else {
        this.called = false;
        $('.playerturn').children('div').remove();
        $('.playerturn').append("<div>" + name1 + ", it's your turn!" + "</div>");
        this.currentPlayerVal = this.playerOne['value'];
        return this.playerTwo['symbol'];
      }
    },
    nameOneScore: 0,
    nameTwoScore: 0,
    draw: 0,
    player1Score:function(){
      if(nameOneScore++){
        $("#P1Score").val(nameOneScore);//not sure if this works
      };
    },
    player2Score:function(){
      if(nameOneScore++){
        $("#P1Score").val(nameOneScore);//not sure if this works
      };
    },
//Below is the actual board where we need to put in values;
    board: [[0,0,0],
            [0,0,0],
            [0,0,0]]//, don't forget comma if you put anything afterwards

    // winner: function(){//announce winner. worry about this later.
    //   return;
    // }
  }

//To show the x's and o's in the game
  $('.tictacdata').click(function(){
    var currentVal = $(this).children('button').text();
    if (currentVal === 'X' || currentVal === 'O'){
      return;
    }
    $(this).children('button').text(game.toggle());
  })

//initially change the player name on the board
  if(game.initial === 0){
    $('.playerturn').append("<div>" + name1 + ", it's your turn!" + "</div>");
    game.initial === 1;
  }
// $(board[0]).find('button').text()
  if(game.called){
    if(game.initial === 1){
      $('.playerturn').append("<div>" + name2 + " , it's your turn!" + "</div>");
      game.initial === 0;
    }
  }

  //all the buttons have an ID that changes the value of the board

  $("#a1").click(function(){
    game.board[0][0] = game.currentPlayerVal;
    $("a1").hide();
    console.log('when you click a1', game.board[0][0]);
  });

  // $("#a2").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a2").hide();
  //   console.log('when you click a2', game.board[0][0]);
  // });
  //
  // $("#a3").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a1").hide();
  //   console.log('when you click a3', game.board[0][0]);
  // });
  //
  // $("#b1").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("b1").hide();
  //   console.log('when you click b1', game.board[0][0]);
  // });
  //
  // $("#b2").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a1").hide();
  //   console.log('when you click b2', game.board[0][0]);
  // });
  //
  // $("#b3").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a1").hide();
  //   console.log('when you click b3', game.board[0][0]);
  // });
  //
  // $("#c1").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a1").hide();
  //   console.log('when you click c1', game.board[0][0]);
  // });
  //
  // $("#c2").click(function(){
  //   game.board[0][0] = game.currentPlayerVal;
  //   $("a1").hide();
  //   console.log('when you click c2', game.board[0][0]);
  // });
  //reset button
  $('#reset').click(function(){
    console.log('you clicked reset');
  });

})//end of document.ready
