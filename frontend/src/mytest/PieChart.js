import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

  
  export function HorizontalBarChart({ text, data }) {
    return (
      <div
        style={{
          color: "white",
          width: "450px",
          height: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(255, 251, 251, 0.5)",
      
          margin: "4px" 
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            color: "#F5F7FA"
          }}
        >
          {text}
        </h3>
  
        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 70, bottom: 5 }}
              barCategoryGap={10}
            >
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                labelStyle={{ color: "#fff" }}
                contentStyle={{ backgroundColor: "#1f1f2e", border: "none" }}
              />
              <Bar
                dataKey="value"
                fill="#007bff"
                barSize={10}
                radius={[10, 10, 10, 10]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }


  