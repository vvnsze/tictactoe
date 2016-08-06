$(document).ready(function(){

  var game = {
    p1: 'X',
    p2: 'O',
    called:false,
    toggle:function(){
      if(!this.called){
        this.called = true;
        return this.p2;
      } else {
        this.called = false;
        return this.p1;
      }
    }
  }

  console.log('document is ready!')

  //reset button
  $('#reset').click(function(){
    console.log('you clicked reset');
  });
  $('.tictacdata').click(function(){
    $(this).children('button').text(game.toggle());
  })

})//end of document.ready
