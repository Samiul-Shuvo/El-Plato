const Hero = () => {
  return (
    <section
      className="
        group
        relative
        bg-gradient-to-br from-white via-yellow-50 to-amber-100
        rounded-3xl shadow-md overflow-hidden my-8
        transition duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-2xl
      "
    >
      {/* Background Image with hover zoom */}
      <div
        className="
          absolute inset-0
          bg-[url('/hero-food.jpg')] bg-cover bg-center
          opacity-10
          transition-transform duration-1000 ease-in-out
          group-hover:scale-105
        "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 drop-shadow-lg animate-slide-up transition-colors duration-300">
          Welcome to <span className="text-red-600 group-hover:text-red-700">El Plato</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
          🇮🇹 Authentic Italian flavors crafted with love. From hand-tossed pizzas to creamy pastas — your culinary escape awaits.
        </p>

       
       
      </div>
    </section>
  );
};

export default Hero;