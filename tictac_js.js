var data = $('td');

function checkSymbol(one,two,three)
{
  if(one === two && one === three && one !=''){
    return true;
  }
  return false;
}



function checkWin()
{
    for(var i=0;i<3;i++)
    {
      if(checkSymbol($('tr').eq(i).find('td').eq(0).text(),$('tr').eq(i).find('td').eq(1).text(),$('tr').eq(i).find('td').eq(2).text())){
        return true;
      }
    }

    for(var i=0;i<3;i++)
    {
      if(checkSymbol($('tr').eq(0).find('td').eq(i).text(),$('tr').eq(1).find('td').eq(i).text(),$('tr').eq(2).find('td').eq(i).text())){
        return true;
      }
    }

    if(checkSymbol($('tr').eq(0).find('td').eq(0).text(), $('tr').eq(1).find('td').eq(1).text(), $('tr').eq(2).find('td').eq(2).text())){
      return true;
    }
    if(checkSymbol($('tr').eq(0).find('td').eq(2).text(), $('tr').eq(1).find('td').eq(1).text(), $('tr').eq(2).find('td').eq(0).text())){
      return true;
    }

    return false;
}

var curr = 1;
var sym = 'X';
var term = 0;
data.on('click', function(){

  if(curr === 1 && $(this).text()===''){
    sym = 'X';
    curr = curr *(-1);

    $(this).text(sym);
    term = term + 1;
    if(checkWin()){
      $('h1').text(sym + " Won the Game !");
      data.off('click');
    }
    else if(term === 9){
      $('h1').text( "Draw :(");
      data.off('click');
    }
  }
  else if(curr === -1 && $(this).text()===''){
    sym = 'O';
    curr = curr *(-1);
    term = term + 1;
    $(this).text(sym);

    if(checkWin()){
      $('h1').text(sym + " Won the Game !");
      data.off('click');
    }
    else if(term === 9){
      $('h1').text( "Draw :(");
      data.off('click');
    }
  }
})
