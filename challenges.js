var roundScore, scores, activePlayer, gamePlaying, dice_prev, count;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // if (dice === 6)
        //     count++;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        if (dice1 !== 1 || dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        // if (count === 2) {
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // }

        // if (dice === 6 && dice_prev === 6) {
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // } else if (dice !== 1) {
        //     roundScore += dice;
        //     document.getElementById('current-' + activePlayer).textContent = roundScore;
        // } else {
        //     nextPlayer();
        // }
        // dice_prev = dice;
        // console.log(dice_prev);
    }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        var value = document.querySelector('.final-score').value;

        var winningScore;

        if (value) {
            winningScore = value;
        } else {
            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            var player = document.getElementById('name-' + activePlayer);
            player.textContent = 'WINNER!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            nextPlayer();
        }
    }
})

var nextPlayer = function () {

    count = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}