/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;  // Reads active player's score out of scores array.

document.querySelector('.dice').style.display = 'none';

// Set player 'round' and 'global' scores to 0.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// ex: event listener with anonymous callback function
document.querySelector('.btn-roll').addEventListener('click', function() {

  // Roll the dice to get a random number >= 1 && <= 6
  var dice = Math.floor(Math.random() * 6) + 1;

  // Display the result.
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  // Update the 'round' score IF the rolled number was NOT a 1.

});



// FOR LATER USE
// ----------------------------
// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
