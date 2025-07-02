import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import TotalBill from './components/TotalBill/TotalBill';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero /Hero';

function App() {
  const [totalBill, setTotalBill] = useState([]);
  const [countBill, setCountBill] = useState(0);

  const handleTotalBill = (food) => {
    const newTotalBill = [...totalBill, food];
    setTotalBill(newTotalBill);
  };

  const handleBillCount = (bill) => {
    setCountBill(countBill + bill);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-red-200 p-4 bg-fixed bg-no-repeat bg-cover">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Hero></Hero>
        
        {/* Fix applied here ↓↓↓ */}
        <div className="md:flex gap-6 items-start">
          <Menu handleTotalBill={handleTotalBill} handleBillCount={handleBillCount} />
          <TotalBill totalBill={totalBill} countBill={countBill} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;