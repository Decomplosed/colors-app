import sizes from './sizes'
import bg from './bg.svg'

export default {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: 'blue',
    height: '100vh',
    backgroundColor: '#064cd5',
    backgroundImage:
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      border: '1px solid white',
      padding: '0.5rem 0.75rem',
      borderRadius: '5px',
      '&:hover': {
        color: 'blue',
        backgroundColor: 'white',
        transition: '0.5s'
      }
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
}
