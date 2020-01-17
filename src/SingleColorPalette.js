import React, { Component } from 'react'

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
  }

  gatherShades() {}

  render() {
    return (
      <div>
        <h1>Single Color Palette</h1>
      </div>
    )
  }
}

export default SingleColorPalette
