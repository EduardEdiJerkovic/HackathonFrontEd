import { grey1 } from "../../../assets/shared/styles/general";

const styles = {
  input: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '1',
    height: '40px',
    border: (props) => props.border,
    borderRadius: (props) => props.borderRadius,
    marginBottom: (props) => props.marginBottom,
    margin: '0',
    padding: '8px 16px',
    backgroundColor: grey1,
    color: 'rgba( 28, 33, 39, 0.75 )',
    fontSize: '16px',
    outline: 'none',
    '&::placeholder': {
      color: 'rgba( 28, 33, 39, 0.75 )',
      opacity: '1',
      textAlign: 'left',
      fontSize: '16px'
    },
    '&::-webkit-input-placeholder': {
      color: 'rgba( 28, 33, 39, 0.75 )',
      opacity: '1',
      textAlign: 'left',
      fontSize: '16px'
    },
    '&:::-moz-placeholder': {
      color: 'rgba( 28, 33, 39, 0.75 )',
      opacity: '1',
      textAlign: 'left',
      fontSize: '16px'
    },
    '&::-ms-input-placeholder': {
      color: 'rgba( 28, 33, 39, 0.75 )',
      opacity: '1',
      textAlign: 'left',
      fontSize: '16px'
    },
    '&::-moz-placeholder': {
      color: 'rgba( 28, 33, 39, 0.75 )',
      opacity: '1',
      textAlign: 'left',
      fontSize: '16px'
    },
    '&.max-width': {
      width: '100%'
    }
  }
};

export default styles;
