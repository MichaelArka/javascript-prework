function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);
  if(randomNumber == 1){
      argComputerMove = 'kamień';
    } else if (randomNumber == 2){
      argComputerMove = 'papier';
    } else {
      argComputerMove = 'nożyce';
  }
    printMessage('Mój ruch to: ' + argComputerMove);

    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    console.log('Gracz wpisał: ' + argPlayerMove);

    /*if(playerInput == '1'){
      argPlayerMove = 'kamień';
    } else if(playerInput == '2'){
      argPlayerMove = 'papier';
    } else if(playerInput == '3'){
      argPlayerMove = 'nożyce';
    }*/

  // Moves
    console.log('moves:', argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove){
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){ 
        printMessage('Ty wygrywasz!');
      }
      else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      else if(argComputerMove == argPlayerMove){
        printMessage('Remis!');
      }
      else {
        printMessage('nieznany ruch!');
      }
  }
      displayResult(argComputerMove, argPlayerMove);
}
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scisors').addEventListener('click', function(){
    playGame('3');
  });

