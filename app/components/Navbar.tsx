// import { Link } from '@remix-run/react';
// import { logout } from '~/utils/auth';

// export default function Navbar() {
//   const handleLogout = () => {
//     logout();
//     window.location.href = '/login';
//   };

//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <ul className="flex space-x-4">
//         <li><Link to="/dashboard" className="hover:text-gray-300">Home</Link></li>
//         <li><Link to="/dashboard/profile" className="hover:text-gray-300">Profile</Link></li>
//         <li><Link to="/dashboard/users" className="hover:text-gray-300">Users</Link></li>
//         <li><button onClick={handleLogout} className="hover:text-gray-300">Logout</button></li>
//       </ul>
//     </nav>
//   );
// }