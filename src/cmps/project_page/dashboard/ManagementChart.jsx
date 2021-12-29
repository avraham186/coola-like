import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../../../assets/cmps/dashboard/dashboardChart.scss";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import shimon from "../../../assets/images/founders-imgs/shimon.png";

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
    position: "relative",
    width: "100%",
    borderRadius: 40,
    top: "15%",
    display: "flex",
    margin: 5,
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
      <div className="TasksTitle" style={{ left: "22%" }}>
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

      <div style={Parentdiv}>
        <div
          style={{
            width: "88%",
            position: "absolute",
            top: "11px",
            display: "inherit",
          }}
        >
          {data().map((entry, index) => (
            <span
              style={{
                // position: "absolute",
                width: `${entry.percentage}%`,
                backgroundColor: COLORS[index % COLORS.length],
                borderTopRightRadius: index === 2 ? "17px" : 0,
                borderBottomRightRadius: index === 2 ? "17px" : 0,
                borderTopLeftRadius: index === 0 ? "17px" : 0,
                borderBottomLeftRadius: index === 0 ? "17px" : 0,
                textAlign: "center",
                // display: "table-cell",
                padding: 3,
                color: "#545454",
              }}
            >
              {alignment === "N" ? entry.value : `${entry.percentage}%`}
            </span>
          ))}
        </div>
        <img
          style={{ width: 50, height: 50, position: "absolute", right: 12 }}
          src={shimon}
          alt="Logo"
        />
      </div>
    </div>
  );
};
