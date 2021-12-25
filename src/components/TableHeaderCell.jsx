import React, { useRef, useEffect } from 'react'

export const TableHeaderCell = ({ children }) => {

  const resizableElRef = useRef(null);
  const resizerRef = useRef(null);
  
  useEffect(() => {
    const resizeableEl = resizableElRef.current;
    const styles = window.getComputedStyle(resizeableEl);
    let width = parseInt(styles.width, 10);
    let srartWidth = width;
    let x = 0;

    // Right resize
    const onMouseMoveResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx > srartWidth ? width + dx : srartWidth;
      resizeableEl.style.width = `${width}px`;
    };

    const onMouseUpResize = () => {
      document.removeEventListener("mousemove", onMouseMoveResize);
    };

    const onMouseDownResize = (event) => {
      x = event.clientX;
      document.addEventListener("mousemove", onMouseMoveResize);
      document.addEventListener("mouseup", onMouseUpResize);
    };


    const resizer = resizerRef.current;
    resizer.addEventListener("mousedown", onMouseDownResize);

    return () => {
      resizer.removeEventListener("mousedown", onMouseDownResize);
    }
  }, [])
  

  

  return (
    <th 
    style={{
      position: 'relative',
  }}>
    <div 
        ref={resizableElRef}
    style={{
      position: 'relative',
      height: '100%',
    }}>
    {children}
      <span
      ref={resizerRef}
        style={{
          cursor: 'col-resize',
          borderRight: '4px solid black',
          position: 'absolute',
          height: '100%',
          right: -2,
          top: 0
        }}></span>
    </div>
      
    </th>
  )
}
