import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const column = 20;
const row = 20;

function Square(props) {
  return (
    <button className={"square " + (props.isWin ? "squareWin": null)}
     onClick={props.onClick}>
      {props.value}
    </button>
  );
}
  
class Board extends React.Component {


  // render o vuong
  renderSquare(i) {
    return (
      <Square 
        isWin = {this.props.winSquares.includes(i)}
        key = {"square " + i} 
        value = {this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
      />
    ); 
  }
  
  // render cac o vao hang
  renderRow(n) {
    const squares = [];
    const table = n * column;
    for (let i = 0; i < column; i++)
    {
      squares.push(this.renderSquare(table + i))
    }
    return (
      <div className = "board-row">
          {squares}
      </div>
    )
  }  

  // render cac hang vao table
  render() {
    const rows = [];
    for (let i = 0; i < column; i++){
      rows.push(this.renderRow(i));
    }  
    return (
      <div>
        {rows}
      </div>
    )
    
  }
}
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(column*row).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true
      }
    }

    handleClick(i) {
      
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      var locations = []
      for (let i=0; i < row*column; i++)
      {
        let obj = [Math.floor(i/row), i%row]
        locations.push(obj);
      }
      
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
            squares: squares,
            location: locations[i]
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        isAscending: false,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    // Set tinh trang sap xep history
    sortHistory()
    {
      this.setState({
        isAscending: !this.state.isAscending
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);  

      const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move + " Location: (" + history[move].location + ")" : 'Go to game start';
          return (
            <li key={move}>
              <button onClick = {() => this.jumpTo(move)}>
              {move === this.state.stepNumber ? <b>{desc}</b> : desc}
              </button>
            </li>
          );
      });

      let status;

      // kiem tra tinh trang dang trong game hay het game(win/draw)

      if (winner) {
        status = 'Winner: ' + winner.winner;
      }
      else if (!current.squares.includes(null)) {
        status = 'Draw';
        //alert('Draw');
      } 
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              winSquares = {winner ? winner.line: []}
              squares = {current.squares}
              onClick = {i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button onClick = {() => this.sortHistory()}>
              Sort: {this.state.isAscending ? "Ascending" : "Descending"}
            </button>
            <ol>{this.state.isAscending ? moves.reverse() : moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  function calculateWinner(squares) {

    for (let i = 0; i < row*column; i++)
    {

      // Kiem tra duong ngang
      if (squares[i] 
        && squares[i] === squares[i+1]
        && squares[i] === squares[i+2]
        && squares[i] === squares[i+3]
        && squares[i] === squares[i+4]
        )
        {
          return {winner: squares[i], line: [i, i+1, i+2, i+3, i+4] };
        }
      
      // Kiem tra duong doc
      if (squares[i] 
        && squares[i] === squares[i+20]
        && squares[i] === squares[i+40]
        && squares[i] === squares[i+60]
        && squares[i] === squares[i+80]
        )
        {
          return {winner: squares[i], line: [i, i+20, i+40, i+60, i+80] };
        }

      // Kiem tra duong cheo phai
      if (squares[i] 
        && squares[i] === squares[i+21]
        && squares[i] === squares[i+42]
        && squares[i] === squares[i+63]
        && squares[i] === squares[i+84]
        )
        {
          return {winner: squares[i], line: [i, i+21, i+42, i+63, i+84] };
        }
      
      // Kiem tra duong cheo trai
      if (squares[i] 
        && squares[i] === squares[i+19]
        && squares[i] === squares[i+38]
        && squares[i] === squares[i+57]
        && squares[i] === squares[i+76]
        )
        {
          return {winner: squares[i], line: [i, i+19, i+38, i+57, i+76] };
        }
    }
   
    return null;
  }