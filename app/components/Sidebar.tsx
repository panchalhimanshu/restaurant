// components/Sidebar.tsx
import { NavLink } from '@remix-run/react';
import { Home, User, Users, LogOut } from 'lucide-react';
import { logout } from '~/utils/auth';

export default function Sidebar() {
  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="bg-[rgb(17,55,84)] text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className="space-y-3">

		
        <NavLink to="/dashboard" end className={({ isActive }) => 
          `flex items-center py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-[rgb(22,73,112)]' : 'hover:bg-[rgb(22,73,112)]'}`
        }>
          <Home className="mr-2" size={20} />
          Home
        </NavLink>
		<NavLink to="/dashboard/users" className={({ isActive }) => 
          `flex items-center py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-[rgb(22,73,112)]' : 'hover:bg-[rgb(22,73,112)]'}`
        }>
          <Users className="mr-2" size={20} />
          Users
        </NavLink>
        <NavLink to="/dashboard/profile" className={({ isActive }) => 
          `flex items-center py-2.5 px-4 rounded transition duration-200 ${isActive ? 'bg-[rgb(22,73,112)]' : 'hover:bg-[rgb(22,73,112)]'}`
        }>
          <User className="mr-2" size={20} />
          Profile
        </NavLink>
        
        <button onClick={handleLogout} className="flex items-center w-full py-2.5 px-4 rounded transition duration-200 hover:bg-[rgb(22,73,112)]">
          <LogOut className="mr-2" size={20} />
          Logout
        </button>
      </nav>
    </div>
  );
}