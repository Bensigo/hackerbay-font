import React from 'react'

export default ({row, col, display}) => {
  const style = {
    top: col,
    left: row,
    display
  }
  return (
    <div >
      <div  style={{...style, backgroundColor: 'red'}}  className=' enemy'/ >
    </div>
  )
}
