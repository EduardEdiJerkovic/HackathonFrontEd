import { grey1 } from "../../../assets/shared/styles/general";

const styles = {
  input: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '1',
    height: '40px',
    width: '100%',
    border: (props) => props.border,
    borderRadius: (props) => props.borderRadius,
    marginBottom: (props) => props.marginBottom,
    margin: '0',
    padding: '8px 16px',
    backgroundColor: grey1,
    color: 'rgba( 28, 33, 39, 0.75 )',
    fontSize: '16px',
    outline: 'none'
  }
};

export default styles;
