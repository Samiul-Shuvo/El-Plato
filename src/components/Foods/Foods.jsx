import PropTypes from 'prop-types';
import { PiCookingPot } from "react-icons/pi";

const Foods = ({ menu, handleTotalBill, handleBillCount }) => {
  const { name, category, image, description, price, rating } = menu;

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    return (
      <div className="text-yellow-500 text-sm">
        {"★".repeat(fullStars) + "☆".repeat(5 - fullStars)}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200">
      
      
      <div className="p-3 pt-4">
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

    
      <div className="px-4 pb-5 space-y-3">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          {renderStars()}
        </div>

        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-sm text-red-500 font-medium">Category: {category}</p>

        <div className="flex justify-between items-center pt-2">
          <p className="text-green-700 font-bold text-lg">৳ {price}</p>
         <button
  onClick={() => {
    handleTotalBill(menu);
    handleBillCount(price);
  }}
  className="
    flex items-center gap-2
    px-4 py-2
    bg-gradient-to-r from-pink-500 to-pink-400
    text-white font-semibold
    rounded-full
    shadow-md
    hover:from-green-500 hover:to-green-400
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
  "
>Order
  <PiCookingPot className="text-2xl" />
  
</button>
        </div>
      </div>
    </div>
  );
};

Foods.propTypes = {
  menu: PropTypes.object.isRequired,
  handleTotalBill: PropTypes.func,
  handleBillCount: PropTypes.func,
};

export default Foods;