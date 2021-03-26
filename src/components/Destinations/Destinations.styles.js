const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      flexGrow: '1'
    }
  },
  pageTitle: {
    width: '100%',
    borderBottom: '1px solid #ccc',
    paddingBottom: '16px'
  },
  destinationList: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
    '& span': {
      width: '60px'
    }
  },
  listHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& span': {
      flexGrow: '1'
    }
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& span': {
      flexGrow: '1'
    }
  }

}

export default styles;