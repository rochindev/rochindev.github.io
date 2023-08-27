import React, { useEffect, useRef } from 'react';

function CursorAnimation() {

  const cursorRef = useRef();
  
  useEffect(() => {
    const updateMousePosition = (ev) => {
      if(!cursorRef.current) return;
      const {clientX, clientY} = ev;
      cursorRef.current.style.setProperty('--x', `${clientX}px`)
      cursorRef.current.style.setProperty('--y', `${clientY}px`)
    }
  
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }

  }, [])
  

  return (
    <div className="cursor-gradient" ref={cursorRef}>
    </div>
  );
}

export default CursorAnimation;


