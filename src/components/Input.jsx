const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  className,
  checked,
  style = {},
  isViewMode,
  ...props
}) => {
  return (
    <input
      {...props}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value || checked}
      onChange={onChange}
      className={className}
      checked={checked}
      disabled={isViewMode}
      style={{ ...style, height: '30px' }}
    />
  );
};

export default Input;
