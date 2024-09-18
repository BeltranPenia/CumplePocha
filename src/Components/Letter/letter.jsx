import React from 'react'
import './letter.css';
import {useRef, useEffect} from 'react';

const Letter = ({closure, onAnimationEnd}) => {

    const letterClass = closure ? 'letter open' : 'letter';

    const animationRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === 'open-animation') {
        // Notify parent when animation ends
        onAnimationEnd();
      }
    };

    const node = animationRef.current;
    node.addEventListener('animationend', handleAnimationEnd);

    // Cleanup on unmount
    return () => {
      node.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [onAnimationEnd]);

    return (
        <div className={letterClass} ref={animationRef}>letter</div>
    )
}

export default Letter