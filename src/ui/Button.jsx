/* eslint-disable react/prop-types */
function Button({
  children,
  customStyles,
  bgColor = "bg-cornflower-blue",
  textColor = "text-white",
  fontSize = "text-sm",
  onClick,
  name,
  type,
  disabled,
  borderRadius = "rounded-3xl",
}) {
  const defaultStyles = "px-6 py-3.5";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      name={name}
      type={type}
      className={`${fontSize} font-bold  hover:bg-opacity-75 hover:scale-[1.02] transition-all ${
        customStyles || defaultStyles
      } ${borderRadius}  ${textColor}   flex items-center ${bgColor}`}
    >
      {children}
    </button>
  );
}

export default Button;
