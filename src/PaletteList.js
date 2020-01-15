import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <h1>{palette.paletteName}</h1>
        ))}
      </div>
    )
  }
}

export default PaletteList
