const Header = () => {
	return (
	  <header className="bg-white shadow-lg py-4 px-4">
		<div className="flex items-center justify-between">
		  <h1 className="text-xl font-bold">Dashboard</h1>
		  <div className="flex items-center">
			<input
			  type="text"
			  placeholder="Search..."
			  className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
			  Search
			</button>
		  </div>
		</div>
	  </header>
	)
  }
  
  export default Header