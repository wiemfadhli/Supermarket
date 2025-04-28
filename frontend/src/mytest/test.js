
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';
export function Numbertext({ text , number, log}) {
  return (
    <div style={{ 
    color: "white",
    width: "300px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px"
    , boxShadow: "0 10px 20px rgba(255, 251, 251, 0.5)",
    margin: "10px" }}>

     <h2 style={{ margin: 0 }}>  {log} {number}</h2>
     <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
}
export function Title() {
  return (
    <div
      style={{
        backgroundColor: "#1E1E2F", // dark navy
        color: "white",
        padding: "20px",
        textAlign: "center",
       
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem", letterSpacing: "1px" }}>
         Sales Dashboard
      </h1>
    </div>
  );
}


const renderActiveShape = (props) => {
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#fff" fontSize={16}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={60}
        outerRadius={80}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={80}
        outerRadius={90}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">{`Sales: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey + 20} textAnchor={textAnchor} fill="#ccc">
        {`(${(percent * 100).toFixed(1)}%)`}
      </text>
    </g>
  );
};

export function CustomerTypePieChart({ data, text }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
       
        color: "white",
        width: "450px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(255, 251, 251, 0.5)",
    
        margin: "4px" 
      }}
    >
      <p style={{
        fontSize: "18px",
       
        color: "#F5F7FA"
      }}>
        {text}
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            onMouseEnter={onPieEnter}
            dataKey="value"
            nameKey="name"
            fill="#00C49F"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}




