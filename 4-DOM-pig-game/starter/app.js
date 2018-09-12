/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, winningScore, activePlayer, gamePlaying, previousRoll;

init();

// Roll Dice event listener with anonymous callback function
document.querySelector('.btn-roll').addEventListener('click', function() {

  if (gamePlaying) {
    // Roll the dice to get a random number >= 1 && <= 6
    // var dice = Math.floor(Math.random() * 6) + 1;
    var dice = [];
    var diceDom = document.querySelectorAll('.dice');
    for (var i = 0; i < diceDom.length; i++) {
      // diceDom[i].style.display = 'block';
      dice[i] = Math.floor(Math.random() * 6) + 1;
    }

    // Display the result.
    /*
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    */
    document.querySelector('.dice-tray').style.display = 'block';

    // var diceDom = document.querySelectorAll('.dice');
    for (var i = 0; i < diceDom.length; i++) {
      // diceDom[i].style.display = 'block';
      diceDom[i].src = 'dice-' + dice[i] + '.png';
    }
    // diceDom.src = 'dice-' + dice + '.png';

    // Clear the 'global' score IF two 6's are rolled in a row.
    // Update the 'round' score IF the rolled number was NOT a 1.
    if (dice + previousRoll === 12) {
      // Player loses their ENTIRE score and it's the next players turn
      // console.log('You hit two 6\'s in a row!');  // TEST
      scores[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else if (dice !== 1) {
      // Store the value of this roll in previousRoll.
      previousRoll = dice;
      // Add the roll to 'round' score.
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // console.log('You hit a 1!');  // TEST
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
    // if (scores[activePlayer] >= 100)
    if (scores[activePlayer] >= winningScore) {

      // Show the winner. Set winner styles and remove active player styles.
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

      // Hide the dice.
      // document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice-tray').style.display = 'none';

      // End the game play.
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

  // Reset previous roll.
  previousRoll = 0;

  // Reset 'round' score to 0.
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Indicate which player is active.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // Hide the dice until the now active player rolls.
  // document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-tray').style.display = 'none';

  // TODO: Improve UX so player sees a 1 rolled before clearing the score and switching players.
}

// New Game event listener
// Passes 'init' function to event listener rather than creating anonymous function and calling the init function from inside it.
document.querySelector('.btn-new').addEventListener('click', init);

// Initiate game by setting defaults for players' scores, turns, and displays.
function init() {
  scores = [0, 0];
  roundScore = 0;
  // activePlayer = 0 because Player 1 always begins by default.
  activePlayer = 0;
  // gamePlaying = true;
  previousRoll = 0;  // Initialize and set default value.

  // Hide dice at game start.
  // document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-tray').style.display = 'none';
  /*
  var els = document.querySelectorAll('.dice');
  for (var i = 0; i < els.length; i++) {
    els[i].style.display = 'none';
  }
  */

  // Hide the winning-score-threshold at game start.
  document.querySelector('.winning-score-threshold').style.display = 'none';

  // Reset default WST and show set-score form at game start.
  document.getElementById('winningScore').value = 100;
  document.querySelector('.set-score').style.display = 'block';

  // Set player 'round' and 'global' scores to 0.
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Set default player names.
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // Set default player info styles.
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // Set default 1st player styles.
  document.querySelector('.player-0-panel').classList.add('active');
}

// Set Score event listener with anonymous callback function
document.getElementById('setScore').addEventListener('submit', function(evt) {

  // Prevent default submit event.
  evt.preventDefault();

  // Hide set-score form after players submit a value.
  document.querySelector('.set-score').style.display = 'none';

  // Insert 'winningScore' value into winning-score-threshold message.
  winningScore = document.getElementById('winningScore').value;
  document.querySelector('.winning-score-threshold p span').textContent = winningScore;

  // Show the winning-score-threshold for reference.
  document.querySelector('.winning-score-threshold').style.display = 'block';
  // Try to smooth appearance with CSS transition or animation.

  // Move gamePlaying = true; from init() to disable all other controls until user sets a score.
  gamePlaying = true;
});


/*
3-part Coding Challenge
Change the game functionality in the following ways:

// Completed #1 20180726
1. A player loses their ENTIRE score when they roll two 6's in a row. After that, it's the next players turn. (HINT: Always save the previous dice roll in a seperate variable.)

// Completed #2 20180906
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. This is a good opportunity to use Google to build some coding skills you haven't yet learned. (HINT: You can read that value with the JS .value property.)

// TODO
3. Add another dice to the game so that there are two different dice visible. A player now looses their current score when one of the dice rolls a 1. (HINT: You will need CSS to position the 2nd dice, so take a look at the CSS code for the first one.)

// TODO
EXTRA: Improve UX so player sees the dice rolled a 1 before clearing the score and switching players.

// TODO
EXTRA EXTRA: Build tally of wins for each player so they can play best x of y.

// TODO
EXTRA EXTRA EXTRA: Make layout mobile-first, responsive at all breakpoints, and generally bake in as much accessibility as possible in this tutorial.
*/
