import React, { Component } from 'react'
import './ColorBox.css'

export class ColorBox extends Component {
  render() {
    const { name, background } = this.props
    return (
      <div style={{ background }} className='ColorBox'>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorBox
