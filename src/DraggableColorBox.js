import React from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
  root: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: '#000000',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  }
}

function DraggableColorBox(props) {
  const { classes } = props
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span>{props.name}</span>
        <DeleteIcon />
      </div>
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
