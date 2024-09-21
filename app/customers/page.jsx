export default function Customers() {
	return (
	  <div className="p-4">
		<h1 className="text-2xl font-bold mb-4">Customers</h1>
		<div className="bg-white p-4 rounded-lg shadow">
		  <h2 className="text-lg font-semibold mb-2">Customer List</h2>
		  <table className="min-w-full divide-y divide-gray-200">
			<thead className="bg-gray-50">
			  <tr>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Order</th>
			  </tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
			  <tr>
				<td className="px-6 py-4 whitespace-nowrap">Alice Johnson</td>
				<td className="px-6 py-4 whitespace-nowrap">alice@example.com</td>
				<td className="px-6 py-4 whitespace-nowrap">$1,200.00</td>
				<td className="px-6 py-4 whitespace-nowrap">2023-09-15</td>
			  </tr>
			  {/* Add more rows as needed */}
			</tbody>
		  </table>
		</div>
	  </div>
	)
  }