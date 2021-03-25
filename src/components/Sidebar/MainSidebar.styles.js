const styles = {
  sidebar: {
    height: '100%',
    position: 'relative',
    backgroundColor: '#ccc',
    width: '300px',
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    },
    '& div': {
      backgroundColor: '#ccc'
    }
  },
  menuItem: {
    '& > div:first-of-type': {
      display: 'flex',
      alignItems: 'center',
    }
  },
  menuSingleItem: {
    display: 'flex',
    alignItems: 'center'
  },
  menuLabel: {
    marginLeft: '16px',
    fontSize: '18px',
  }
}

export default styles;