import logo from '../../assets/images/italialogo.png';

const Footer = () => {
  return (
    <footer className="w-full mt-12 border-t border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-14 text-center text-gray-900">
       
        <blockquote className="italic text-lg md:text-xl font-medium mb-2 text-amber-800">
          “La buona cucina è onesta, sincera e semplice.”
        </blockquote>
        <p className="text-sm text-gray-600 mb-4">
          “Good cooking is honest, sincere, and simple.”
        </p>
        <span className="text-sm text-gray-500 mb-6 block">
          — Gualtiero Marchesi
        </span>

       
        <div className="w-20 h-1 mx-auto bg-green-500 rounded-full mb-6"></div>

        
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={logo}
            alt="El Plato Logo"
            className="w-10 h-10 object-contain"
          />
          <span
            className="text-2xl font-bold text-amber-900 tracking-wide"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            El Plato
          </span>
        </div>

       
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm font-medium mb-4">
          <a href="#" className="hover:text-green-700 transition">Home</a>
          <a href="#" className="hover:text-green-700 transition">Menu</a>
          <a href="#" className="hover:text-green-700 transition">About</a>
          <a href="#" className="hover:text-green-700 transition">Contact</a>
          <a href="#" className="hover:text-green-700 transition">Feedback</a>
        </div>

        
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} El Plato. All rights reserved. Crafted with ❤️ in Italy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;