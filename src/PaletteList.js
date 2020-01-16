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
    const { palettes } = this.props
    return (
      <div className={this.props.classes.root}>
        <div className='container'></div>
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
