import { useState, useEffect } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    address: '123 Main St',
    pincode: '12345',
    country: 'United States',
    state: 'California'
  });

  useEffect(() => {
    const email = localStorage.getItem('email') || '';
    const password = localStorage.getItem('password') || '';
    setProfile(prev => ({ ...prev, email, password }));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">User Profile</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png" alt="Profile" className="rounded-full w-48 h-48 mx-auto border border-gray-300" />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField label="Email" value={profile.email} />
            <ProfileField label="Password" value="********" />
            <ProfileField label="Address" value={profile.address} />
            <ProfileField label="Pincode" value={profile.pincode} />
            <ProfileField label="Country" value={profile.country} />
            <ProfileField label="State" value={profile.state} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium text-blue-800">{label}</label>
      <p className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-blue-800">{value}</p>
    </div>
  );
}