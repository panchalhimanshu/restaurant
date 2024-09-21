export default function Sales() {
	return (
	  <div className="p-4">
		<h1 className="text-2xl font-bold mb-4">Sales</h1>
		<div className="bg-white p-4 rounded-lg shadow">
		  <h2 className="text-lg font-semibold mb-2">Recent Sales</h2>
		  <table className="min-w-full divide-y divide-gray-200">
			<thead className="bg-gray-50">
			  <tr>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
				<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
			  </tr>
			</thead>
			<tbody className="bg-white divide-y divide-gray-200">
			  <tr>
				<td className="px-6 py-4 whitespace-nowrap">#1234</td>
				<td className="px-6 py-4 whitespace-nowrap">John Doe</td>
				<td className="px-6 py-4 whitespace-nowrap">$120.00</td>
				<td className="px-6 py-4 whitespace-nowrap">
				  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
					Completed
				  </span>
				</td>
			  </tr>
			  {/* Add more rows as needed */}
			</tbody>
		  </table>
		</div>
	  </div>
	)
  }