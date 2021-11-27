import React, { PureComponent, useEffect } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

export const MissionPieChart = ({ projects }) => {
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

  const completedProjects = () => {
    let allProjects = projects.list.length;
    let complete = projects.list.filter(
      (project) => project.projectStatus === "COMPLETED"
    );
    let allOtherProjects = projects.list.filter(
      (project) => project.projectStatus !== "COMPLETED"
    );
    let percentages = Math.round((complete.length / allProjects) * 100);
    let allOtherpercentages = Math.round(
      (allOtherProjects.length / allProjects) * 100
    );
    return [
      {
        name: "allOtherProjects",
        value: allOtherpercentages,
        color: "#EAEFF6",
      },
      { name: "complete", value: percentages, color: "#6D49AC" },
    ];
  };

  const completedTasks = () => {
    const d = new Date();
    let month = d.getMonth() + 1;

    let AllcompletedTasks = 0;
    let allTasks = 0;

    projects.list.forEach((project) => {
      if (project.tasks.length > 0) {
        project.tasks.forEach((task) => {
          allTasks++;
          if (task.taskStatus === "COMPLETED") {
            AllcompletedTasks++;
          }
        });
      }
    });
    return [
      {
        name: "allTasks",
        value: allTasks,
        color: "#EAEFF6",
      },
      {
        name: "completedTasks",
        value: AllcompletedTasks,
        color: "#6D49AC",
      },
    ];
  };

  useEffect(async () => {
    console.log(projects);
    console.log(completedTasks());
  }, []);

  const COLORS = ["#7EB3FF", "#FFC474", "#69EB7D"];
  return (
    <div>
      <div className="completedProject">
        <p className="ChartTitle">
          {completedProjects()[1].value + "%"}
          <p>פרויקטים הושלמו</p>
        </p>

        <PieChart className="Pie" width={800} height={400}>
          <Pie
            data={completedProjects()}
            cx={120}
            cy={100}
            innerRadius={65}
            outerRadius={80}
            dataKey="value"
            fill="#8884d8"
          >
            {completedProjects().map((entry, index) => (
              <Cell fill={entry.color} />
            ))}

            <Label
              value={completedProjects()[1].value + "%"}
              position="center"
              className="label-top"
              fontSize="27px"
            />
          </Pie>
        </PieChart>
      </div>

      <div className="completedTasks">
        <p className="ChartTitle">
          {completedTasks()[1].value + "/" + completedTasks()[0].value}
          <p>
            משימות שהושלמו <br /> החודש
          </p>
        </p>

        <PieChart className="Pie" width={800} height={400}>
          <Pie
            data={completedTasks()}
            cx={120}
            cy={100}
            innerRadius={65}
            outerRadius={80}
            dataKey="value"
            fill="#8884d8"
          >
            {completedTasks().map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}

            <Label
              value={
                Math.round(
                  (completedTasks()[1].value / completedTasks()[0].value) * 100
                ) + "%"
              }
              position="center"
              className="label-top"
              fontSize="27px"
            />
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};
