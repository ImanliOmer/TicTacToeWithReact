import '../App.css'
import React from 'react'


 function Square({val, clickSquare}) {
  return (
    <div className='square' onClick={clickSquare}>
        {val}
    </div>
  )
}

export default Square;
