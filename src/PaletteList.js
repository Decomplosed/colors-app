import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import  {withStyles} from '@material-ui/styles'

const styles = {
  root: {
    backgroundColor: 'blue',

  }
}

export class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            
          </nav>
        </div>
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette}/>
        ))
        }
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
