# [Tic-Tac-Toe](https://louvang.github.io/tictactoe/)

A Tic-Tac-Toe game made with JavaScript factory functions and modules. Play a game with a friend (or yourself). Whoever gets 3 in a row wins! [View this webapp live.](https://louvang.github.io/tictactoe/)

<p align="center"><a href="https://louvang.github.io/tictactoe/" target="_blank"><img src="https://louvang.github.io/tictactoe/img/preview.png" alt="Tic-Tac-Toe Preview" width="750px" />
Click to view the live version.</a></p>

## How To

Click on the box you want to mark. You can see whose turn it is from the text at the bottom of the Tic-Tac-Toe board.

Once a player wins, the bottom text will indicate the winner and display a button to restart the game. If there are no winners, the bottom text will indicate that the game is a tie.

## About Code

I'll be honest, this was a lot more daunting than I thought it would be. I'm not too familiar with factory functions and modules and the goal was to have as little global code as possible. So working with this was a bit of a challenge. I would like to think this would've been much easier if I opted not to use factory functions and modules.

The code is set up for a 1-player mode (player vs. computer) that will hopefully be implemented later on. (Though if I'm to be frank, I found this project a little dull despite its complexities).

## Thoughts

I still can't say I'm very familiar with factory functions and modules despite spending some time with this code. I found it very difficult where to even start especially with the daunting challenge of trying to limit global code.

Regardless, I do at least have a better understanding of modules as opposed to before. It makes sense to keep things enclosed (closure!) and private so they can't be modified. But then there's a lot of stuff you have to pass up and down and it can get confusing to detangle all that.

## Further Improvements

I most likely won't be improving this project but just in case, here are a few things to consider:

- [ ] Better design
- [ ] Implement 1-player mode
- [ ] Use minimax to create an unbeatable AI
- [ ] Allow players to choose icons as their marks (rather than X's and O's)
- [ ] Have players input their names
