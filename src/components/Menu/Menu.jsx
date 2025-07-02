import { useEffect, useState } from "react";
import Foods from "../Foods/Foods";

const Menu = ({ handleTotalBill, handleBillCount }) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenuList(data));
  }, []);

  return (
    <section className="w-full md:w-11/12 lg:w-4/5 mx-auto px-4 pt-1">
    
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-10 tracking-wide">
        🍴 Our Menu <span className="text-sm font-medium text-gray-500">({menuList.length} items)</span>
      </h1>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuList.map((menu, i) => (
          <div
            key={menu.id}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
          >
            <Foods
              menu={menu}
              handleTotalBill={handleTotalBill}
              handleBillCount={handleBillCount}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;