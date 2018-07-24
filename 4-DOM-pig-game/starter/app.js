/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// Roll Dice event listener with anonymous callback function
document.querySelector('.btn-roll').addEventListener('click', function() {

  if (gamePlaying) {
    // Roll the dice to get a random number >= 1 && <= 6
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the result.
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // Update the 'round' score IF the rolled number was NOT a 1.
    if (dice !== 1) {
      // Add the roll to 'round' score.
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Switch to next player.
      nextPlayer();
    }
  }
});

// Hold Score event listener with anonymous callback function
document.querySelector('.btn-hold').addEventListener('click', function() {

  if (gamePlaying) {
    // Add CURRENT round score to global score.
    scores[activePlayer] += roundScore;

    // Update the UI.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the player won the game.
    if (scores[activePlayer] >= 20) {

      // Show the winner. Set winner styles and remove active player styles.
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // Hide the dice
      document.querySelector('.dice').style.display = 'none';

      // End the game play
      gamePlaying = false;
    } else {
      // Switch to next player.
      nextPlayer();
    }
  }
});

function  nextPlayer() {
  // Switch to next player.
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  // Reset 'round' score to 0.
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Indicate which player is active.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // Hide the dice until the now active player rolls.
  document.querySelector('.dice').style.display = 'none';

  // TODO: Improve UX so player sees a 1 rolled before clearing the score and switching players.
}

// New Game event listener
// Passes 'init' function to event listener rather than creating anonymous function an dcalling the init function from inside it.
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  // activePlayer = 0 because Player 1 always begins by default.
  activePlayer = 0;  // Reads active player's score out of scores array.
  gamePlaying = true;

  // Hide dice at game start.
  document.querySelector('.dice').style.display = 'none';

  // Set player 'round' and 'global' scores to 0.
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Set default player names
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // Set default player info styles
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // Set default 1st player styles
  document.querySelector('.player-0-panel').classList.add('active');
}

// FOR LATER USE
// ----------------------------
// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);
