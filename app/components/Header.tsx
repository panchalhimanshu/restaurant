// components/Header.tsx
import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold  text-[rgb(17,55,84)]">Dashboard</h1>
        <div className="flex items-center">
          <Bell className="mr-4 cursor-pointer text-[rgb(17,55,84)]" size={20} />
          <span className="text-[rgb(17,55,84)]">Welcome, User!</span>
        </div>
      </div>
    </header>
  );
}