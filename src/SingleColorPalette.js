import React, { Component } from 'react'
import ColorBox from './ColorBox'

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }

    return shades.slice(1)
  }

  render() {
    return (
      <div>
        <h1>Single Color Palette</h1>
      </div>
    )
  }
}

export default SingleColorPalette
