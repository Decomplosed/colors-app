import React from 'react'
import { withStyles } from '@material-ui/styles'

const styles = {
  PaletteFooter: {
    backgroundColor: '#fff',
    height: '5vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  Emoji: {
    fontSize: '1.5rem',
    margin: '1rem'
  }
}

function PaletteFooter(props) {
  const { paletteName, emoji } = props
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  )
}

export default PaletteFooter
