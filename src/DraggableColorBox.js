import React from 'react'

function DraggableColorBox(props) {
  return <div style={{ backgroundColor: props.color }}>{props.color}</div>
}

export default DraggableColorBox
