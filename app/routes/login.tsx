import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from 'react';
import { login, isAuthenticated } from '~/utils/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 bg-[rgb(17,55,84)] text-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border bg-white text-[rgb(17,55,84)] border-[rgb(17,55,84)] rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border bg-white text-[rgb(17,55,84)] border-[rgb(17,55,84)] rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-[rgb(17,55,84)] text-white hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
