import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'


export class Palette extends Component {

  constructor(props) {
    super(props)
    this.state = { level: 500, format: 'hex' }
    this.changeLevel = this.changeLevel.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
  }

  changeLevel(level) {
    this.setState({ level })
  }

  changeFormat(val) {
    this.setState({ format: val })
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette
    const { level, format } = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink
      />
    ))

    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllCOlors
        />
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        <footer className='Palette-footer'>
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    )
  }
}

export default Palette
