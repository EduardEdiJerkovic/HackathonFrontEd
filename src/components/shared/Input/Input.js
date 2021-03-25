import React from 'react';
import injectSheet from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { borderColor, inputBackgroundColor } from '../../../assets/shared/styles/general';

import styles from './SmInput.styles';

const SmInput = (props) => {
  const {
    classes,
    name,
    placeholderId,
    onChange,
    type,
    disabled,
    value,
    autoFocus,
    errorClass,
    classAdditional,
    backgroundColor
  } = props;

  const error = errorClass ? 'error' : '';

  return (
    <FormattedMessage id={placeholderId}>
      {(message) => (
        <input
          className={[classes.input, error, classAdditional].join(' ')}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={message}
          disabled={disabled}
          value={value}
          autoFocus={autoFocus}
        />
      )}
    </FormattedMessage>
  );
};

SmInput.defaultProps = {
  type: 'text',
  marginBottom: '0px',
  disabled: false,
  border: `solid 1px ${borderColor}`,
  value: '',
  borderRadius: '3px',
  autoFocus: false
};

export default injectSheet(styles)(SmInput);
