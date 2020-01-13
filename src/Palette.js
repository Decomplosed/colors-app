import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import './Palette.css'
import 'rc-slider/assets/index.css'

export class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = { level: 500 }
  }
  render() {
    const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ))

    return (
      <div className='Palette'>
        <Slider />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
      </div>
    )
  }
}

export default Palette
