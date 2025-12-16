import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-lg sm:text-xl font-bold">
          Twin Cities Event
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/eventschedule" className="hover:text-yellow-300">Schedule</Link>
          <Link to="/sports" className="hover:text-yellow-300">Sports</Link>
          <Link to="/music" className="hover:text-yellow-300">Music</Link>
          <Link to="/attractions" className="hover:text-yellow-300">Attractions</Link>
          <Link to="/guidedtour" className="hover:text-yellow-300">Guided Tour</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/eventschedule" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Schedule</Link>
          <Link to="/sports" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Sports</Link>
          <Link to="/music" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Music</Link>
          <Link to="/attractions" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Attractions</Link>
          <Link to="/guidedtour" onClick={() => setOpen(false)} className="block hover:text-yellow-300">Guided Tour</Link>
        </div>
      )}
    </nav>
  );
}