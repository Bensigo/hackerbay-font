import React from 'react'

export default ({row, col}) => {
  const style = {
    top: col,
    left: row,
    position: 'fixed'
  }
  return (
    <div >
      <div  style={{...style, backgroundColor: 'red'}}  className='player enemy'/ >
    </div>
  )
}
