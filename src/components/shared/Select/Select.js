import React from 'react';
import Select from 'react-select';

import { borderColor, grey1, inputColor } from '../../../assets/shared/styles/general';

const CustomSelect = (props) => {
  const {
    isSearchable,
    isClearable,
    defaultValue,
    options,
    onChange,
    isDisabled,
    width,
    placeholder
  } = props;

  const styles = {
    select: {
      control: (base, state) => ({
        ...base,
        border: props.border ? props.border : 'None',
        backgroundColor: `${isDisabled ? grey1 : props.backgroundColor}`,
        borderRadius: props.borderRadius

      }),
      container: (base, { selectProps: { width } }) => ({
        ...base,
        width: width,
        marginBottom: props.marginBottom,
        color: '#1C2127'
      }),
      valueContainer: (base, state) => ({
        ...base,
        padding: '8px'
      }),
      menuList: (base, state) => ({
        ...base,
        maxHeight: '220px'
      })
    }
  }

  return (
    <Select
      isSearchable={isSearchable}
      isClearable={isClearable}
      placeholder={placeholder}
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

CustomSelect.defaultProps = {
  isSearchable: false,
  isClearable: false,
  showIcon: true,
  isDisabled: false,
  border: `solid 1px ${borderColor}`,
  borderRadius: '3px',
  marginBottom: '24px',
  backgroundColor: inputColor
};

export default CustomSelect;