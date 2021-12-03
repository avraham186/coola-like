import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../../../assets/cmps/dashboard/dashboardChart.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ManagementChart = ({ projects }) => {
  const [alignment, setAlignment] = useState("N");
  const data = () => {
    let remaining = 0;
    let delay = 0;
    let complete = 0;
    projects.list.map((project) => {
      if (project.projectStatus === "DELAY") {
        delay++;
      } else if (project.projectStatus === "COMPLETED") {
        complete++;
      } else {
        remaining++;
      }
    });

    return [
      {
        name: "complete",
        title: "הושלמו",
        value: complete,
        percentage: Math.round((complete / projects.list.length) * 100),
      },
      {
        name: "remaining",
        title: "נותרו",
        value: remaining,
        percentage: Math.round((remaining / projects.list.length) * 100),
      },
      {
        name: "delay",
        title: "באיחור",
        value: delay,
        percentage: Math.round((delay / projects.list.length) * 100),
      },
    ];
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const Parentdiv = {
    position: "absolute",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    top: "40%",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };
  const COLORS = ["#69EB7D", "#C0A2F4", "#FFA39C"];
  return (
    <div className="management-line-chart">
      <h3>הספק מנהלים</h3>
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
            value: `${item.title} (${item.value})`,
            color: COLORS[index % COLORS.length],
          }))}
        />
      </div>

      <div style={Parentdiv}>
        {data().map((entry, index) => (
          <div
            key={index}
            style={{
              height: "100%",
              width: `${entry.percentage}%`,
              backgroundColor: COLORS[index % COLORS.length],
              borderRadius: 40,
              textAlign: "center",
            }}
          >
            <span style={progresstext}>{`${entry.percentage}%`}</span>
          </div>
        ))}
      </div>
      {/* <PieChart width={250} height={250} style={{ top: "15%", left: "30%" }}>
        <Pie
          data={data()}
          cx={120}
          cy={120}
          innerRadius={0}
          outerRadius={80}
          paddingAngle={0}
          startAngle={0}
          endAngle={180}
          dataKey="value"
          fill="#8884d8"
          label
        >
          {data().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart> */}
    </div>
  );
};
