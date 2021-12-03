import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../../../assets/cmps/dashboard/dashboardChart.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const AllTasksPieChart = ({ projects }) => {
  const [alignment, setAlignment] = useState("N");

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
    let totalTasks = hadash + inProcess + complete;

    return [
      {
        name: "hadash",
        title: "חדש",
        value: hadash,
        percentage: Math.round((hadash / totalTasks) * 100),
      },
      {
        name: "inProcess",
        title: "בתהליך",
        value: inProcess,
        percentage: Math.round((inProcess / totalTasks) * 100),
      },
      {
        name: "complete",
        title: "הושלם",
        value: complete,
        percentage: Math.round((complete / totalTasks) * 100),
      },
    ];
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const COLORS = ["#7EB3FF", "#FFC474", "#69EB7D"];
  return (
    <div className="pie-Tasks-chart">
      <h3>משימות</h3>
      <div className="toggleButton">
        <ToggleButtonGroup
          color="secondary"
          value={alignment}
          exclusive
          onChange={handleChange}
          style={{
            height: "35px",
          }}
        >
          <ToggleButton
            value="N"
            style={{
              width: "64px",
              borderBottomLeftRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            N
          </ToggleButton>
          <ToggleButton
            value="%"
            style={{
              width: "64px",
              borderBottomRightRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            %
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="TasksTitle">
        <Legend
          payload={data().map((item, index) => ({
            id: item.name,
            type: "circle",
            value:
              alignment === "N"
                ? `${item.title} (${item.value})`
                : `${item.title} (${item.percentage}%)`,
            color: COLORS[index % COLORS.length],
          }))}
        />
      </div>
      <PieChart width={250} height={250} style={{ top: "15%", left: "30%" }}>
        <Pie
          data={data()}
          cx={120}
          cy={120}
          innerRadius={65}
          outerRadius={80}
          paddingAngle={3}
          dataKey={alignment === "N" ? "value" : "percentage"}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill={COLORS[index % COLORS.length]}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
              >
                {alignment === "N"
                  ? data()[index].value
                  : data()[index].percentage + "%"}
              </text>
            );
          }}
        >
          {data().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
