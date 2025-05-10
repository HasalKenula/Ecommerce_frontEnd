// import React, { useState } from 'react';

// const NavigationBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false); // Dropdown state for Services

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-lg font-bold">
//           MyLogo
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#" className="text-white hover:text-gray-200">Home</a>
//           <a href="#" className="text-white hover:text-gray-200">About</a>

//           <div className="relative group">
//             <button
//               className="text-white hover:text-gray-200 focus:outline-none"
//             >
//               Services
//             </button>
//             {/* Dropdown for Desktop */}
//             <div className="absolute left-0 mt-2 bg-blue-600 shadow-md rounded hidden group-hover:block z-10">
//               <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">Television</a>
//               <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">Laptops</a>
//               <a href="#" className="block px-4 py-2 text-white hover:bg-blue-700">Watches</a>
//             </div>
//           </div>

//           <a href="#" className="text-white hover:text-gray-200">Contact</a>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2">
//           <a href="#" className="block text-white hover:bg-blue-600 p-2">Home</a>
//           <a href="#" className="block text-white hover:bg-blue-600 p-2">About</a>

//           {/* Dropdown Toggle for Mobile */}
//           <button
//             onClick={() => setServicesOpen(!servicesOpen)}
//             className="w-full text-left text-white hover:bg-blue-600 p-2 focus:outline-none"
//           >
//             Services
//           </button>

//           {servicesOpen && (
//             <div className="ml-4">
//               <a href="#" className="block text-white hover:bg-blue-600 p-2">Television</a>
//               <a href="#" className="block text-white hover:bg-blue-600 p-2">Laptops</a>
//               <a href="#" className="block text-white hover:bg-blue-600 p-2">Watches</a>
//             </div>
//           )}

//           <a href="#" className="block text-white hover:bg-blue-600 p-2">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavigationBar;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAuth } from "../context/AuthContext";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { logout } = useAuth();
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md sticky top-0 z-50 font-medium">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

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
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition duration-200 ease-out z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-t-xl">Television</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Laptops</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-b-xl">Watches</a>
              
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          

          {/* Services Mobile Dropdown */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            Services <ChevronDown size={16} className={`${servicesOpen ? 'rotate-180' : ''} transition-transform`} />
          </button>
          {servicesOpen && (
            <div className="ml-4 mt-1 space-y-1">
              <a href="#" className="block text-gray-600 hover:text-blue-500">Television</a>
              <a href="#" className="block text-gray-600 hover:text-blue-500">Laptops</a>
              <a href="#" className="block text-gray-600 hover:text-blue-500">Watches</a>
            </div>
          )}

          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
          <button className="bg-gray-800 text-white px-5 py-2 me-3" onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;

