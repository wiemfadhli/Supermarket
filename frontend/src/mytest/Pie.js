import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Sample data (you can pass your own data as a prop)
const data = [
  { name: "Member", value: 5200 },
  { name: "Normal", value: 3800 },
];

// Blue color palette
const COLORS = ["#6CAEFF", "#3B82F6"];

// Custom label function
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
    >
      {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// Component
export function PieChartWithCustomizedLabel({ text = "Customer Type", chartData = data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => setActiveIndex(index);

  return (
    <div
      style={{
  
        color: "#fff",
        width: "360px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(255, 251, 251, 0.5)",
        padding: "4px",
        margin: "10px",
      }}
    >
      <p style={{  fontSize: "18px",
       
       color: "#F5F7FA"}}>{text}</p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
