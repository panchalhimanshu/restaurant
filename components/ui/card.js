export const Card = ({ children, className }) => {
	return (
	  <div className={`bg-white shadow-md rounded-lg ${className}`}>
		{children}
	  </div>
	);
  };
  
  export const CardHeader = ({ children, className }) => {
	return (
	  <div className={`px-4 py-2 border-b ${className}`}>
		{children}
	  </div>
	);
  };
  
  export const CardContent = ({ children, className }) => {
	return (
	  <div className={`p-4 ${className}`}>
		{children}
	  </div>
	);
  };
  
  export const CardTitle = ({ children, className }) => {
	return (
	  <h2 className={`text-lg font-semibold ${className}`}>
		{children}
	  </h2>
	);
  };
  