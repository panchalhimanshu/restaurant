export const Button = ({ children, variant, size, className, ...props }) => {
	const baseStyles = "px-4 py-2 font-semibold rounded focus:outline-none focus:ring";
	const variantStyles = variant === "outline"
	  ? "border border-gray-300 text-gray-700"
	  : "bg-blue-500 text-white hover:bg-blue-600";
	const sizeStyles = size === "icon" ? "p-2" : "py-2 px-4";
  
	return (
	  <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
		{children}
	  </button>
	);
  };
  