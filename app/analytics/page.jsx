export default function Analytics() {
	return (
	  <div className="p-4">
		<h1 className="text-2xl font-bold mb-4">Analytics</h1>
		<div className="bg-white p-4 rounded-lg shadow">
		  <h2 className="text-lg font-semibold mb-2">Traffic Sources</h2>
		  <div className="flex justify-between items-center">
			<div className="w-1/4">
			  <div className="text-sm font-medium text-gray-500">Organic Search</div>
			  <div className="mt-1 text-3xl font-semibold text-gray-900">60%</div>
			</div>
			<div className="w-1/4">
			  <div className="text-sm font-medium text-gray-500">Direct</div>
			  <div className="mt-1 text-3xl font-semibold text-gray-900">20%</div>
			</div>
			<div className="w-1/4">
			  <div className="text-sm font-medium text-gray-500">Referral</div>
			  <div className="mt-1 text-3xl font-semibold text-gray-900">15%</div>
			</div>
			<div className="w-1/4">
			  <div className="text-sm font-medium text-gray-500">Social</div>
			  <div className="mt-1 text-3xl font-semibold text-gray-900">5%</div>
			</div>
		  </div>
		</div>
	  </div>
	)
  }