import React from 'react'
import './envelope.css';

const Envelope = ({closure}) => {

const flapClass = closure ? 'front open flap' : 'front flap';

  return (
    <div className='envelope'>
        <div className={flapClass}></div>
        <div className='front pocket'></div>
    </div>
  )
}

export default Envelope