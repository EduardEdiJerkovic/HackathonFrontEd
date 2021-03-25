import { ashPale, buttonColor, primaryColor } from '../../../assets/shared/styles/general';

const styles = {
  smButton: {
    minWidth: (props) => props.minWidth,
    border: (props) => (props.secondary ? `1px solid ${ashPale}` : 'none'),
    borderRadius: '3px',
    padding: '8px 16px',
    backgroundColor: buttonColor,
    color: (props) => props.textColor,
    fontSize: (props) => props.fontSize,
    fontWeight: (props) => props.fontWeight,
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer'
  }
};

export default styles;
