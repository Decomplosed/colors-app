import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export class Navbar extends Component {
  render() {
    return (
      <header className='Navbar'>
        <div className="logo">
          <a href='#'>reactcolorpicker</a>
        </div>
        <div className='slider'>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
      </header>
    )
  }
}

export default Navbar
