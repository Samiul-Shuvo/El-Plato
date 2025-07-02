import Bill from "../Bill/Bill";

const TotalBill = ({ totalBill, countBill }) => {
  return (
    <div
      className="
        w-full sm:w-3/4 lg:w-1/2 xl:w-1/3
        p-6 sm:p-8
        rounded-3xl
        bg-gradient-to-br from-amber-100 via-yellow-50 to-yellow-200
        shadow-2xl border border-yellow-300
        animate-fade-in
        h-auto
      "
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-6 tracking-wide">
        🍽️ Your Order
      </h1>

      {/* Item count and total bill */}
      <div className="mb-8 space-y-4">
        <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-white bg-green-600 px-5 py-3 rounded-t-2xl shadow-md tracking-wide">
            🇮🇹 Total Items: <span className="font-bold">{totalBill.length}</span>
          </h2>
        </div>

        <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-white bg-red-500 px-5 py-3 rounded-b-2xl shadow-md tracking-wide">
            💶 Total Bill: ৳<span className="font-bold"> {countBill}</span>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6 animate-slide-up">
        {totalBill.map((bill, idx) => (
          <div
            key={idx}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <Bill bill={bill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalBill;