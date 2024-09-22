export const isAuthenticated = () => {
	if (typeof window === "undefined") return false;
	return localStorage.getItem('email') && localStorage.getItem('password');
  };
  
  export const login = (email: string, password: string) => {
	localStorage.setItem('email', email);
	localStorage.setItem('password', password);
  };
  
  export const logout = () => {
	localStorage.removeItem('email');
	localStorage.removeItem('password');
  };