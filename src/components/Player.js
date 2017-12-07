import React, {Component} from 'react'

export default class Player extends Component {
    // setting app state for squares and player style
    state = {
      playerStyle: {
        top: 40,
        left: 0,
        position: 'relative'
      },  
    }
  handleKeyUp = (e) => {
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
  render(){
    return (
      <div 
        onKeyUp={this.handleKeyUp}
        tabIndex={0}
        style={this.state.playerStyle}
       >
        <img 
          src={'https://www.adiumxtras.com/images/pictures/super_mario_3d_icons_1_35820_8077_image_12514.png'}
          alt="player"
          className='player'
          />
      </div>
    )
  }
  
}
