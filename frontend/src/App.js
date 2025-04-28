
import './App.css';
import { DollarSign,ArrowLeftRight, ArrowDownRight } from 'lucide-react';
import {Numbertext,Title,CustomerTypePieChart} from './mytest/test.js';
import {HorizontalBarChart} from './mytest/PieChart.js';
import{ PieChartWithCustomizedLabel} from './mytest/Pie.js';
import {SalesOverTimeChart} from './mytest/TimeChart.js';
function App() {

     const data = [
      { name: 'Member', value: 5200, fill: '#6CAEFF' },
      { name: 'Normal', value: 3800, fill: '#3B82F6' }
    ];
    const paymentMethodData = [
      { name: "Credit Card", value: 5200, fill: "#6CAEFF" },
      { name: "PayPal", value: 3800, fill: "#3B82F6" },
      { name: "Cash", value: 2500, fill: "#1D4ED8" },
      { name: "Bank Transfer", value: 1300, fill: "#2563EB" }
    ];
    const productLineData = [
      { name: "Health & Beauty", value: 7500, fill: "#60A5FA" },
      { name: "Electronic Accessories", value: 6300, fill: "#3B82F6" },
      { name: "Home & Lifestyle", value: 5400, fill: "#1E40AF" },
      { name: "Sports & Travel", value: 4800, fill: "#2563EB" },
      { name: "Food & Beverages", value: 6700, fill: "#38BDF8" },
      { name: "Fashion Accessories", value: 4100, fill: "#93C5FD" }
    ];
    const dataChart = [
      { name: "Men", value: 400 },
      { name: "Women", value: 300 },
      { name: "Children", value: 200 }
    ];
    const salesOverTime = [
      { date: "2025-01-01", sales: 1200 },
      { date: "2025-01-02", sales: 1500 },
      { date: "2025-01-03", sales: 900 },
      { date: "2025-01-04", sales: 1800 },
      { date: "2025-01-05", sales: 2200 },
      { date: "2025-01-06", sales: 1700 },
      { date: "2025-01-07", sales: 2000 },
    ];
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#1E1E2F", minHeight: "100vh", padding: "4px", color: "#FFFFFF" }}>
    <Title />
  
    {/* MAIN LAYOUT */}
    <div style={{ display: "flex", width: "100%", height: "calc(100vh - 60px)", gap: "4px", marginTop: "4px" }}>
      {/* LEFT SIDE */}
      <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: "4px" }}>
        {/* STATS */}
        <div style={{ display: "flex", gap: "5px", justifyContent: "space-between" }}>
          <Numbertext text="Total Sales" number={90.248} log={<DollarSign size={18} />} />
          <Numbertext number={1000} text="Transactions" log={<ArrowLeftRight size={20} />} />
          <Numbertext number={90.25} text="Average Sale" log={<ArrowDownRight size={20} />} />
        </div>
  
        {/* CHARTS */}
        <div style={{ display: "flex", gap: "4px", justifyContent: "space-between", flexGrow: 1 }}>
          <div style={{ flex: 1, borderRadius: "12px", padding: "4px" }}>
            <CustomerTypePieChart data={data} text="Customer Type" />
          </div>
  
          <div style={{ flex: 1, borderRadius: "12px", padding: "4px" }}>
            <PieChartWithCustomizedLabel text="Sales by Customer Type" />
          </div>
        </div>
      </div>
  
      {/* RIGHT SIDE */}
      <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ backgroundColor: "#1E1E2F", borderRadius: "12px", padding: "4px" }}>
          <CustomerTypePieChart data={paymentMethodData} text="Payment Method" />
        </div>
  
        <div style={{ backgroundColor: "#1E1E2F", borderRadius: "12px", padding: "4px", flexGrow: 1 }}>
          <HorizontalBarChart text="Sales by Product Line" data={dataChart} />
        </div>
      </div>
    </div>
  
    {/* TRANSPORT TABLE AT BOTTOM */}
    <div style={{
      width: "60%",
      marginTop: "4px",
      backgroundColor: "#2A2F45",
      borderRadius: "12px",
      padding: "4px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    }}>
    

    <SalesOverTimeChart data={salesOverTime} />
    </div>
  </div>
  
  

  
  );
}

export default App;
