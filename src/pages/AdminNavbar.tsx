import { useState } from "react";

function AdminNavbar({ logout }: { logout: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md sticky top-0 z-50 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center">
            <div className="text-3xl font-bold text-white">
              <span className="text-xl">XPress</span> Gadgets
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/orders" className="text-white hover:text-gray-200 transition duration-200">Orders</a>
            <a href="/profiletable" className="text-white hover:text-gray-200 transition duration-200">Profile Details</a>
            <a href="/contactTable" className="text-white hover:text-gray-200 transition duration-200">Contact Details</a>
            <button className="bg-gray-800 text-white px-5 py-2 rounded" onClick={logout}>Logout</button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4 mt-2">
            <a href="/orders" className="text-white hover:text-gray-200">Orders</a>
            <a href="/profiletable" className="text-white hover:text-gray-200">Profile Details</a>
            <a href="/contactTable" className="text-white hover:text-gray-200">Contact Details</a>
            <button className="bg-gray-800 text-white px-5 py-2 rounded w-fit" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default AdminNavbar;
