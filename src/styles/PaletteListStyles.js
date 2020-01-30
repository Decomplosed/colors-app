import sizes from './sizes'
import bg from './bg.svg'

export default {
  '@global': {
    '.fade-exit': {
      opacity: '1'
    },
    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity 0.5s ease-out'
    }
  },
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: 'blue',
    height: '100vh',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#2b29aa',
    backgroundImage: `url(${bg})`,
    overflow: 'scroll'
  },
  heading: {
    fontSize: '2rem',
    [sizes.down('sm')]: {
      fontSize: '1.4rem'
    }
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: '5rem',
    [sizes.down('xl')]: {
      width: '70%'
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
      padding: '0.5rem 0.75rem',
      borderRadius: '5px',
      background: '#f50057',
      border: 'none',
      fontWeight: '700',
      '&:hover': {
        color: '#2b29aa',
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
      gridGap: '1.4rem'
    }
  }
}
