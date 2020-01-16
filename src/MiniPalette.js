import React from 'react'
import  {withStyles} from '@material-ui/styles'

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  },
  secondary: {
    backgroundColor: 'pink'
  }
}

function MiniPalette(props) {
  const {classes} = props
  console.log(classes)
  return (
    <div className={classes.root}>
      <div className={classes.colors}>

      </div>
      <h5 className={classes.title}></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)