import React, { PureComponent, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Legend,
} from "recharts";
import "../../../assets/cmps/dashboard/dashboardChart.scss";

export const AllTasksPieChart = ({ projects }) => {
  const data = () => {
    let hadash = 0;
    let inProcess = 0;
    let complete = 0;
    projects.list.map((project) => {
      return project.tasks.map((task) => {
        if (task.taskStatus === "IN_PROCESS") {
          inProcess++;
        } else if (task.taskStatus === "COMPLETED") {
          complete++;
        } else {
          hadash++;
        }
      });
    });
    return [
      { name: "hadash", title: "חדש", value: hadash },
      { name: "inProcess", title: "בתהליך", value: inProcess },
      { name: "complete", title: "הושלם", value: complete },
    ];
  };

  const COLORS = ["#7EB3FF", "#FFC474", "#69EB7D"];
  return (
    <div className="pie-Tasks-chart">
      <h3>משימות</h3>
      <p className="TasksTitle">
        <Legend
          payload={data().map((item, index) => ({
            id: item.name,
            type: "circle",
            value: `${item.title} (${item.value})`,
            color: COLORS[index % COLORS.length],
          }))}
        />
      </p>

      <PieChart width={250} height={250} style={{ top: "15%", left: "30%" }}>
        <Pie
          data={data()}
          cx={120}
          cy={120}
          innerRadius={65}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
          fill="#8884d8"
          label
        >
          {data().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
