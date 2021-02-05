const PlayerFactory = (name, mark) => {
  let player = Object.create(playerActions);
  player.name = name;
  player.mark = mark;
  return player;
};

const playerActions = {
  displayMark(cell) {
    document.getElementById(cell).textContent = this.mark;
  },
  endTurn() {
    if (!game.checkWinner()) {
      if (game.gameMode == 'vsComputer') {
        if (game.currentPlayer == game.player1) {
          game.currentPlayer = game.computer;
        } else {
          game.currentPlayer = game.player1;
        }
      } else if (game.gameMode == 'vsPlayer2') {
        if (game.currentPlayer == game.player1) {
          game.currentPlayer = game.player2;
        } else {
          game.currentPlayer = game.player1;
        }
      }

      game.statusMessage(game.currentPlayer);
    } else if (game.checkWinner() == 'tie') {
      game.declareWinner('tie');
    } else {
      game.declareWinner(game.currentPlayer);
    }
  },
};

const gameBoard = (() => {
  'use strict';
  let board = ['', '', '', '', '', '', '', '', ''];
  const boardContainer = document.getElementById('board');

  const displayBoard = () => {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell', 'unmarked');
      cell.id = `cell${i}`;
      cell.textContent = board[i];

      const cellEvent = () => {
        cell.classList.remove('unmarked');
        cell.classList.add('marked');
        game.currentPlayer.displayMark(cell.id);
        board[i] = game.currentPlayer.mark;
        game.currentPlayer.endTurn();
        cell.removeEventListener('click', cellEvent);
      };

      cell.addEventListener('click', cellEvent);
      boardContainer.appendChild(cell);
    }
  };

  return { board, displayBoard };
})();

const game = (() => {
  'use strict';
  gameBoard.displayBoard();

  const player1 = PlayerFactory('X', 'X');
  const player2 = PlayerFactory('O', 'O');
  const computer = PlayerFactory('Computer', 'O');

  let currentPlayer = player1;
  let gameMode = 'vsPlayer2';

  const _radio1Player = document.getElementById('one-player');
  const _radio2Player = document.getElementById('two-player');

  if (_radio1Player.checked) {
    gameMode = 'vsComputer';
  } else if (_radio2Player.checked) {
    gameMode = 'vsPlayer2';
  }

  const _status = document.getElementById('status');
  const statusMessage = (currentPlayer) => {
    if (currentPlayer == player1) {
      _status.textContent = `${player1.mark}'s turn.`;
    } else if (currentPlayer == player2) {
      _status.textContent = `${player2.mark}'s turn.`;
    } else {
      _status.textContent = `${computer.mark}'s turn.`;
    }
  };

  const checkWinner = () => {
    let currentPlayerBoard = [];
    gameBoard.board.forEach((element, index) => {
      if (element == game.currentPlayer.mark) {
        currentPlayerBoard.push(index);
      }
    });

    const winningCombos = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let i = 0; i < winningCombos.length; i++) {
      if (
        currentPlayerBoard.indexOf(winningCombos[i][0]) >= 0 &&
        currentPlayerBoard.indexOf(winningCombos[i][1]) >= 0 &&
        currentPlayerBoard.indexOf(winningCombos[i][2]) >= 0
      ) {
        return true;
      }
    }

    if (gameBoard.board.indexOf('') == -1) {
      return 'tie';
    }
  };

  const declareWinner = (player) => {
    const status = document.getElementById('status');

    if (player == 'tie') {
      status.textContent = 'Tie! No one won.';
    } else {
      status.textContent = `Player ${player.name} won!`;
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.classList.remove('marked', 'unmarked');
      cell.classList.add('marked');
      cell.addEventListener('click', function () {
        cell.textContent = '';
      });
    });

    const button = document.createElement('button');
    button.textContent = 'Clear';
    button.id = 'clear';
    button.addEventListener('click', clearBoard);
    status.append(button);
  };

  const clearBoard = () => {
    location.reload();
  };

  return { player1, player2, computer, currentPlayer, gameMode, statusMessage, checkWinner, declareWinner, clearBoard };
})();
