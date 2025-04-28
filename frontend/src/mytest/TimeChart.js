import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
  } from "recharts";
  
  export function SalesOverTimeChart({ data }) {
    return (
      <div style={{
  
        borderRadius: "12px",
        padding: "20px",
        color: "#FFFFFF",
        height: "300px",
        boxShadow: "0 10px 20px rgba(255, 251, 251, 0.5)",
      }}>

       <p style={{
        fontSize: "18px",
       
        color: "#F5F7FA"
      }}>
      
       Sales Over Time</p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#3B3F5C" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#A0AEC0" />
            <YAxis stroke="#A0AEC0" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1E1E2F", border: "none", color: "#FFFFFF" }}
              labelStyle={{ color: "#00D1B2" }}
              itemStyle={{ color: "#FFFFFF" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#00BFFF" // light blue tone for line
              strokeWidth={3}
              dot={{ r: 4, stroke: "#00BFFF", strokeWidth: 2, fill: "#1E1E2F" }}
              activeDot={{ r: 6, fill: "#00BFFF" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  