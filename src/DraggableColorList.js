import React from 'react'
import DraggableColorBox from './DraggableColorBox'
import { SortableContainer } from 'react-sortable-hoc'

function DraggableColorList() {
  return (
    <div>
      {this.state.colors.map(color => (
        <DraggableColorBox
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => this.removeColor(color.name)}
        />
      ))}
    </div>
  )
}

export default DraggableColorList
