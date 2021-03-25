import React from 'react';
import Select from 'react-select';

import { borderColor, inputColor } from '../../assets/shared/styles/general';
import styles from './Select.styles';

const Select = (props) => {
  const {
    isSearchable,
    isClearable,
    defaultValue,
    options,
    onChange,
    isDisabled,
    width,
  } = props;

  return (
    <Select
      isSearchable={isSearchable}
      isClearable={isClearable}
      blurInputOnSelect={true}
      isDisabled={isDisabled}
      value={defaultValue}
      options={options}
      onChange={onChange}
      width={width}
      styles={{ ...styles.select }}
    />
  );
};

SmSelect.defaultProps = {
  isSearchable: false,
  isClearable: false,
  showIcon: true,
  isDisabled: false,
  border: `solid 1px ${borderColor}`,
  borderRadius: '3px',
  marginBottom: '24px',
  backgroundColor: inputColor
};

export default Select;