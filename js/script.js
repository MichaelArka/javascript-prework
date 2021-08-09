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
// Calculating

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

// Prompt

printMessage('Mój ruch to: ' + argComputerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName;

  if(playerInput == '1'){
    argPlayerMove = 'kamień';
  } else if(playerInput == '2'){
    argPlayerMove = 'papier';
  } else if(playerInput == '3'){
    argPlayerMove = 'nożyce';
  }

// Moves
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
  printMessage('Twój ruch to: ' + argPlayerMove); 

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
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