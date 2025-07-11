import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useCart } from "../components/CartContext";
import DeviceIcon from '../assets/DeviceIcon.png';


const NavigationBar = () => {
const [isOpen, setIsOpen] = useState(false);
const { logout } = useAuth();
const { username } = useAuth(); 
const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md  font-medium">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={DeviceIcon} alt="Device Icon"  className="w-8 h-8 scale-110"/>
          <div className="text-3xl font-bold text-blue-600 text-white"><span className='text-xl'>XPress</span> Gagets </div>

        </div>
       

       
          {username && (
                <div className="text-right pr-6 pt-2 text-lg text-gray-600">
                    Welcome, <span className="font-bold text-purple-700">{username}</span>!
                      <span className="ml-4 text-lg text-white">
                       
                       <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-purple-600 rounded-full ml-8">{cartCount}</span>  item{cartCount !== 1 && "s"} in cart
                      </span>
                </div>
          )}
         
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="/gagets" className="text-gray-700 hover:text-blue-600 transition">Gagets</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="/profile" className="text-gray-700 hover:text-blue-600 transition">Profile</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
         
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm px-4 pb-4">
         
          {username && (
                <div className="text-left pr-6 pt-2 text-lg text-gray-600">
                    Welcome, <span className="font-bold text-purple-700">{username}</span>!
                </div>
          )}
          
          <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="/gagets" className="block py-2 text-gray-700 hover:text-blue-600">Gagets</a>
          <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="/profile" className="block py-2 text-gray-700 hover:text-blue-600">Profile</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
         
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

