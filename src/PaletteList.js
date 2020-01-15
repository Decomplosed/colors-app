import React, { Component } from 'react'

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return (
      <div>
        <h1>Palette Colors</h1>
      </div>
    )
  }
}

export default PaletteList
