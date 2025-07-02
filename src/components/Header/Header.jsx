import React from 'react';
 import profile from '../../assets/images/profile.png'; 
 import logo from '../../assets/images/italialogo.png'; 
 import bg1 from '../../assets/images/bg2.jpeg'; 

const Header = () => {
  
  return (
    <header className="bg-white rounded-xl mb-6 border border-gray-200 relative overflow-hidden">
    
      <div className="w-full h-2 flex">
        <div className="w-1/3 bg-green-600" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-red-600" />
      </div>

     
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={logo} 
            alt="El Plato Logo"
            className="w-12 md:w-16 h-auto object-contain"
          />
          <span
            className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide drop-shadow-sm"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            El Plato
          </span>
        </div>

       
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-green-600 transition-colors duration-200">Recipes</a>
          <a href="#" className="hover:text-green-600 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-green-600 transition-colors duration-200">Search</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm w-28 md:w-48"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <img
            src={profile} 
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-green-600 shadow-md object-cover cursor-pointer"
          />
        </div>
      </nav>

      
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-b-xl flex items-center justify-center text-center p-4 overflow-hidden"
       style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
      >
     
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
             Savor the Soul of Italy
          </h1>
          <p className="text-base md:text-lg mb-8 opacity-90">
            Indulge in the warmth and richness of authentic Italian cuisine, where every plate is a celebration of tradition, flavor, and heartfelt hospitality. From handcrafted pasta to rustic wood-fired dishes, our kitchen brings the true taste of Italy to your table.

          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Explore Now
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-8 rounded-full border border-white transition-all duration-300 transform hover:scale-105">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;