// routes/dashboard/index.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts'; // Import LineChart
import { PieChart, Pie, Cell } from 'recharts'; // Import PieChart
import { AreaChart, Area } from 'recharts'; // Import AreaChart
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 560 },
  { name: 'Apr', value: 320 },
  { name: 'May', value: 540 },
  { name: 'Jun', value: 580 },
];

const pieData = [
  { name: 'Direct', value: 400 },
  { name: 'Referral', value: 300 },
  { name: 'Social', value: 300 },
];

const areaData = [
  { name: 'Jan', value: 240 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 450 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 600 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Users size={24} />} title="Total Users" value="1,234" />
        <StatCard icon={<DollarSign size={24} />} title="Revenue" value="$56,789" />
        <StatCard icon={<ShoppingCart size={24} />} title="Orders" value="890" />
        <StatCard icon={<TrendingUp size={24} />} title="Growth" value="12.5%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[rgb(17,55,84)]">Monthly Sales (Bar Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="rgb(17,55,84)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[rgb(17,55,84)]">Revenue Trend (Line Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="rgb(17,55,84)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[rgb(17,55,84)]">Traffic Sources (Pie Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" fill="#8884d8" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[rgb(17,55,84)]">User Engagement (Area Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="rgb(17,55,84)" fillOpacity={0.3} fill="rgb(17,55,84)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="bg-[rgb(17,55,84)] p-3 rounded-full mr-4 text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[rgb(17,55,84)]">{title}</h3>
          <p className="text-2xl font-bold text-[rgb(17,55,84)]">{value}</p>
        </div>
      </div>
    </div>
  );
}
