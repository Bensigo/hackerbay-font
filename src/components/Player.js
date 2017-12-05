import React from 'react'

export default (props) => {
  return (
    <div 
      onKeyDown={props.onKeyDown}
      tabIndex={0}
      style={props.style}
     >
      <img 
        src={'https://www.adiumxtras.com/images/pictures/super_mario_3d_icons_1_35820_8077_image_12514.png'}
        alt="player"
        className='player'
        />
    </div>
  )
}
