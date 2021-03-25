const styles = {
  select: {
    control: (base, state) => ({
      ...base,
      border: props.border ? props.border : 'None',
      backgroundColor: `${isDisabled ? grey : props.backgroundColor}`,
      borderRadius: props.borderRadius,
      '& input': {
        width: '0'
      }
    }),
    container: (base, { selectProps: { width } }) => ({
      ...base,
      width: width,
      marginBottom: props.marginBottom,
      flexShrink: '0',
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

export default styles;