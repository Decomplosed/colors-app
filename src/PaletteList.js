import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { withStyles } from '@material-ui/styles'
import styles from './styles/PaletteListStyles'

export class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes, deletePalette } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            <TransitionGroup>
              {palettes.map(palette => (
                <MiniPalette
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                  key={palette.id}
                  id={palette.id}
                  handleDelete={deletePalette}
                />
              ))}
            </TransitionGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)
