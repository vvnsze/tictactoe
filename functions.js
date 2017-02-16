
//player starts
//clicks a square
//draw that players letter in box
//check for a winner
// - winner found
//  --

function checkBoard() {
  // takes a square and checks the row and column of the square

  //check rows
  if(game.board[0] + game.board[1] + game.board[2] === 6 || game.board[3] + game.board[4] + game.board[5] === 6 || game.board[6]+ game.board[7] + game.board[8] === 6){
    //player x wins
    game.player1Score();
  }

  if(game.board[0] + game.board[1] + game.board[2] === 15 || game.board[3] + game.board[4] + game.board[5] === 15 || game.board[6]+ game.board[7] + game.board[8] === 15){
    //player O wins
    game.player2Score();
  }

  //check check columns
  if(game.board[0] + game.board[3] +game.board[6] === 6 ||
  game.board[1] + game.board[4] + game.board[7] === 6 || game.board[2]  + game.board[5] + game.board[8] === 6){
    game.player1Score();
  }

  if(game.board[0] + game.board[3] +game.board[6] === 15 ||
  game.board[1] + game.board[4] + game.board[7] === 15 || game.board[2]  + game.board[5] + game.board[8] === 15){
    game.player2Score();
  }

  //check diagonals
  if(game.board[0] + game.board[4] + game.board[8] === 6 || game.board[2] + game.board[4] + game.board[6] === 6){
    //player x wins
    game.player1Score();
  }
  if(game.board[0] + game.board[4] + game.board[8] === 15 || game.board[2] + game.board[4] + game.board[6] === 15){
    //player o wins
    game.player2Score();
  }

  for(var spot = 0; spot < game.board; spot++){
    var count = 0;
    if (game.board[0] !== 0){
      count++;
    }
    if(count === 9){
      game.tie();
    }
}


function gameOver() {

}
//
// game = {
//   currentPlayer: 0,
//   players: [
//     {symbol: X, value: 2},
//     {symbol: O, value: 1}
//   ]
// }
//
// function togglePlayer() {
//   game.currentPlayer =  Math.abs(game.currentPlayer - 1)
// }
//
// game.players[game.currentPlayer].symbol
// game.players[game.currentPlayer].value
