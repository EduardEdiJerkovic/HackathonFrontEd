const styles = {
  '@keyframes lds-ripple': {
    '0%': {
      top: '28px',
      left: '28px',
      width: '0',
      height: '0',
      opacity: '1'
    },
    '100%': {
      top: '-1px',
      left: '-1px',
      width: '58px',
      height: '58px',
      opacity: '0'
    }
  },
  spinnerOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(240, 241, 241, 0.85)'
  },
  ldsRipple: {
    display: 'inline-block',
    position: 'relative',
    width: '64px',
    height: '64px',
    '& div': {
      position: 'absolute',
      border: '4px solid #111',
      opacity: '1',
      borderRadius: '50%',
      animationName: 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite'
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.5s'
    }
  }
};

export default styles;
