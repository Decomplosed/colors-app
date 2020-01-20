import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'

const styles = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  paletteColors: {
    height: '90%'
  },
  goBackBtn: {
    height: '50%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      
    }
  }
}

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = { format: 'hex' }
    this.changeFormat = this.changeFormat.bind(this)
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

  changeFormat(val) {
    this.setState({ format: val })
  }

  render() {
    const { format } = this.state
    const { classes } = this.props
    const { paletteName, emoji, id } = this.props.palette
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ))

    return (
      <div className={classes.palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBackBtn}>
            <Link to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette)
