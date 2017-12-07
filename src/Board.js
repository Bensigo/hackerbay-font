import React, { Component } from 'react';
import './App.css';

import Square from './components/Square'
import Player from './components/Player'
import Enemy from './components/Enemy'

const rand = () => Math.floor(Math.random() * 250)

class Board extends Component {
  state = {
    display: null
  }

  componentDidMount = () => {
    this.renderEnemy()
  }
  renderEnemy = () => {
    
    return (
      <Enemy row={rand()} col={rand()} />
    )
  }
  renderSquare =  (i) => {
    // return a square 
    return <Square  value={i}/>
  }
  render() {
    const arr = [1, 2,3,4,5,6,7,8,9,10]
    return (
   
      <div className='board'>
       <Player />
       {this.renderEnemy()}  
       {this.renderEnemy()}  
       {this.renderEnemy()}  
       {this.renderEnemy()}  
       {arr.map((item, i) => {
         return(
          <div className='board-row' key={i} >
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
        </div>
         )
         })
       }
      </div> 

    );
  }
}

export default Board;
