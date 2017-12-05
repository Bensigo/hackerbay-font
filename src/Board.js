import React, { Component } from 'react';
import './App.css';

import Square from './components/Square'
import Player from './components/Player'


class Board extends Component {
  state = {
    playerStyle: {
      top: 40,
      left: 0,
      position: 'relative'
    }
  }
  renderSquare =  (i) => {
    // return a square 
    return <Square  value={i}/>
  }
  handleKeyDown = (e) => {
    // check for up down left and right key press down
    // then move the player base on key press
    console.log(e.keyCode)
    switch(e.keyCode){
      case 40: {
        if (this.state.playerStyle.top <= 340){
          this.setState(prevState =>({
            playerStyle: {
              ...prevState.playerStyle,
              top: this.state.playerStyle.top + 34
            }
          }))
        }
        break
      }
      case 38: {
        if (this.state.playerStyle.top >= 34){
          this.setState(prevState =>({
            playerStyle: {
              ...prevState.playerStyle,
              top: this.state.playerStyle.top - (this.state.playerStyle.top === 40 ? 0 : 34)
            }
          }))
        }
        break
      }
      case 39: {
        if ( this.state.playerStyle.left <= 300){
          this.setState(prevState => ({
            playerStyle: {
             ...prevState.playerStyle,
             left: this.state.playerStyle.left + 35
            } 
           }))
        }

        break
      }
      case 37: {
        console.log('move left')
        if (this.state.playerStyle.left > 0){
          this.setState(prevState => ({
            playerStyle:{
              ...prevState.playerStyle,
              left: this.state.playerStyle.left - 35
            }
          }))
        }

        break
      }
      default:
        break
    }

    
  }
  render() {
    const arr = [1, 2,3,4,5,6,7,8,9,10]
    return (
      <div className='board'>
       <Player onKeyDown= {e => {this.handleKeyDown(e)}} style={this.state.playerStyle}/>
       {arr.map((item, i) => {
         return(
          <div className='board-row' key={i}>
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
