export const Input = ({ type = "text", className, ...props }) => {
	return (
	  <input
		type={type}
		className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 ${className}`}
		{...props}
	  />
	);
  };
  