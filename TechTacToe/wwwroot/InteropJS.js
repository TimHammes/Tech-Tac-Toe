let squares = [];

window.setElementText = (el,text) => {
  
  //console.log(el);
  el.innerText = text;
  
  window.checkDiagonals(squares);
  window.checkRows(squares);
};

window.checkDiagonals = (squares) => {

  if(squares[0].innerText === 'X' && squares[5].innerText === 'X' && squares[10].innerText === 'X' && squares[15].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[12].innerText === 'X' && squares[9].innerText === 'X' && squares[6].innerText === 'X' && squares[3].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[12].innerText === 'O' && squares[9].innerText === 'O' && squares[6].innerText === 'O' && squares[3].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[0].innerText === 'O' && squares[5].innerText === 'O' && squares[10].innerText === 'O' && squares[15].innerText === 'O'){
    window.alert("X Wins");
  }
  else{
    return 
  }

};

window.checkRows = (squares) => {
  
  if(squares[0].innerText === 'X' && squares[4].innerText === 'X' && squares[8].innerText === 'X' && squares[12].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[1].innerText === 'X' && squares[5].innerText === 'X' && squares[9].innerText === 'X' && squares[13].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[2].innerText === 'X' && squares[6].innerText === 'X' && squares[10].innerText === 'X' && squares[14].innerText === 'X'){
    window.alert("O Wins");
  }
  else if(squares[3].innerText === 'X' && squares[7].innerText === 'X' && squares[11].innerText === 'X' && squares[15].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[0].innerText === 'X' && squares[1].innerText === 'X' && squares[2].innerText === 'X' && squares[3].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[4].innerText === 'X' && squares[5].innerText === 'X' && squares[6].innerText === 'X' && squares[7].innerText === 'X'){
    window.alert("X Wins");
  }
  else if(squares[8].innerText === 'X' && squares[9].innerText === 'X' && squares[10].innerText === 'X' && squares[11].innerText === 'X'){
    window.alert("O Wins");
  }
  else if(squares[12].innerText === 'X' && squares[13].innerText === 'X' && squares[14].innerText === 'X' && squares[15].innerText === 'X'){
    window.alert("O Wins");
  }
  else if(squares[0].innerText === 'O' && squares[4].innerText === 'O' && squares[8].innerText === 'O' && squares[12].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[1].innerText === 'O' && squares[5].innerText === 'O' && squares[9].innerText === 'O' && squares[13].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[2].innerText === 'O' && squares[6].innerText === 'O' && squares[10].innerText === 'O' && squares[14].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[3].innerText === 'O' && squares[7].innerText === 'O' && squares[11].innerText === 'O' && squares[15].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[0].innerText === 'O' && squares[1].innerText === 'O' && squares[2].innerText === 'O' && squares[3].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[4].innerText === 'O' && squares[5].innerText === 'O' && squares[6].innerText === 'O' && squares[7].innerText === 'O'){
    window.alert("O Wins");
  }
  else if(squares[8].innerText === 'X' && squares[9].innerText === 'X' && squares[10].innerText === 'X' && squares[11].innerText === 'X'){
    window.alert("O Wins");
  }
  else if(squares[12].innerText === 'X' && squares[13].innerText === 'X' && squares[14].innerText === 'X' && squares[15].innerText === 'X'){
    window.alert("O Wins");
  }
  else
  {
    return
  }
 

};

window.createElementArray = (element) => {

  element.forEach(el => {
       squares.push(el);
    });
    
}


