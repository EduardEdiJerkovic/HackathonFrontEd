const styles = {
  sidebar: {
    height: '100%',
    backgroundColor: '#ccc',
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    }
  },
  menuItem: {
    backgroundColor: '#ccc',
    '& > div:first-of-type': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  menuSingleItem: {
    display: 'flex',
    alignItems: 'center'
  },
  menuLabel: {
    marginLeft: '16px',
    fontSize: '18px'
  }
}

export default styles;