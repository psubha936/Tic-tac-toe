import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  gameBoard: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  player1Name = '';
  player2Name = '';
  currentPlayer = '';
  winner = '';
  showInputs = true;
  error:string = '';

  startGame() {
    if (this.player1Name && this.player2Name) {
      this.currentPlayer = this.player1Name;
      this.showInputs = false;
    }else{
      this.error = `Please enter player's Name`
    }
  }

  makeMove(row: number, col: number) {
    if (!this.gameBoard[row][col] && !this.winner) {
      this.gameBoard[row][col] = this.currentPlayer === this.player1Name ? 'X' : 'O';
      if (this.checkForWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.checkForDraw()) {
        this.winner = 'Draw';
      } else {
        this.currentPlayer = this.currentPlayer === this.player1Name ? this.player2Name : this.player1Name;
      }
    }
  }

  checkForWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (this.gameBoard[i][0] && this.gameBoard[i][0] === this.gameBoard[i][1] && this.gameBoard[i][1] === this.gameBoard[i][2]) {
        return true;
      }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (this.gameBoard[0][j] && this.gameBoard[0][j] === this.gameBoard[1][j] && this.gameBoard[1][j] === this.gameBoard[2][j]) {
        return true;
      }
    }
    // Check diagonals
    if (this.gameBoard[0][0] && this.gameBoard[0][0] === this.gameBoard[1][1] && this.gameBoard[1][1] === this.gameBoard[2][2]) {
      return true;
    }
    if (this.gameBoard[0][2] && this.gameBoard[0][2] === this.gameBoard[1][1] && this.gameBoard[1][1] === this.gameBoard[2][0]) {
      return true;
    }
    return false;
  }

  checkForDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.gameBoard[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  resetGame() {
    this.gameBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = '';
    this.winner = '';
    this.showInputs = true;
    this.player1Name = '';
    this.player2Name = '';
  }

}
