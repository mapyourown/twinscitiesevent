import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="bg-blue-800 text-white px-6 py-4 mb-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
<h1 className="text-xl font-bold">Twin Cities Event</h1>
<div className="space-x-4">
<Link to="/" className="hover:text-yellow-300">Home</Link>
<Link to="/eventschedule" className="hover:text-yellow-300"> View Schedule</Link>
<Link to="/sports" className="hover:text-yellow-300">Sports</Link>
<Link to="/music" className="hover:text-yellow-300">Music</Link>
<Link to="/attractions" className="hover:text-yellow-300">Attractions</Link>
<Link to="/guidedtour" className="hover:text-yellow-300">Guided Tour</Link>
</div>
</nav>
);
}
