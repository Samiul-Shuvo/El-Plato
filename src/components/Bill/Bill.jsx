const Bill = ({ bill }) => {
  const { name, description, category, price, rating } = bill;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    return (
      <span className="text-yellow-500 text-sm">
        {"★".repeat(fullStars) + "☆".repeat(5 - fullStars)}
      </span>
    );
  };

  return (
    <div
      className="
        group
        bg-gradient-to-r from-yellow-100 via-yellow-50 to-amber-100
        p-5 sm:p-6
        mx-2 sm:mx-4
        rounded-2xl
        shadow-md
        transform transition-transform duration-300
        hover:scale-[1.03] hover:shadow-xl
        border border-amber-200
        animate-fade-in-up
      "
    >
      {/* Top section: name and rating */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg sm:text-xl font-semibold text-amber-800 group-hover:underline tracking-wide">
          {name}
        </h3>
        <div>{renderStars()}</div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-gray-700 italic mb-3 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
      )}

      {/* Bottom info: category, price */}
      <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs">
          {category}
        </span>
        <span className="text-red-600 font-semibold text-base">৳ {price}</span>
      </div>
    </div>
  );
};

export default Bill;