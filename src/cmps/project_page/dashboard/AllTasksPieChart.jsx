import React, { PureComponent, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
} from "recharts";
import dashboard from "../../../assets/cmps/dashboard/dashboardChart.scss";

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
      { name: "hadash", value: hadash },
      { name: "inProcess", value: inProcess },
      { name: "complete", value: complete },
    ];
  };

  const COLORS = ["#7EB3FF", "#FFC474", "#69EB7D"];
  return (
    <div className="allTaskPie">
      <h3>משימות</h3>
      <p className="TasksTitle">
        <p className="hadash">חדש ({data()[0].value}) </p>
        <p className="inProccess">בתהליך ({data()[1].value}) </p>
        <p className="complete">הושלם ({data()[2].value}) </p>
      </p>

      <PieChart width={400} height={400} className="TasksPie">
        <Pie
          data={data()}
          cx={120}
          cy={100}
          innerRadius={65}
          outerRadius={80}
          dataKey="value"
          fill="#8884d8"
        >
          {data().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
