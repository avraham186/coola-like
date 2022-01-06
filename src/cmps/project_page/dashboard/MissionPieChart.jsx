import { off } from "node-notifier";
import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

export const MissionPieChart = ({ projects }) => {
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
      },
      { name: "complete", value: percentages },
    ];
  };

  const completedTasks = () => {
    const d = new Date();
    let month = d.getMonth() + 1;

    let AllcompletedTasks = 0;
    let allOtherTasks = 0;

    projects.list.forEach((project) => {
      if (project.tasks.length > 0) {
        project.tasks.forEach((task) => {
          let taskMonth = new Date(task.endDate).getMonth() + 1;
          if (task.taskStatus !== "COMPLETED" && taskMonth === month) {
            allOtherTasks++;
          }
          if (task.taskStatus === "COMPLETED" && taskMonth === month) {
            AllcompletedTasks++;
          }
        });
      }
    });
    return [
      {
        name: "allOtherTasks",
        value: allOtherTasks,
      },
      {
        name: "completedTasks",
        value: AllcompletedTasks,
      },
    ];
  };

  const allTasksThisMonth = () => {
    const d = new Date();
    let month = d.getMonth() + 1;

    let allTasks = 0;

    projects.list.forEach((project) => {
      if (project.tasks.length > 0) {
        project.tasks.forEach((task) => {
          let taskMonth = new Date(task.endDate).getMonth() + 1;
          if (taskMonth === month) {
            allTasks++;
          }
        });
      }
    });
    return allTasks;
  };

  const COLORS = ["#EAEFF6", "#6D49AC", "#69EB7D"];
  return (
    <div>
      <div className="completedProject">
        <div className="ChartTitle">
          {completedProjects()[1].value + "%"}
          <p>פרויקטים הושלמו</p>
        </div>

        <PieChart className="Pie" width={400} height={400}>
          <Pie
            data={completedProjects()}
            cx={120}
            cy={100}
            innerRadius={65}
            outerRadius={80}
            dataKey="value"
            fill="#8884d8"
          >
            {completedProjects().map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#6D49AC" />;
              }
              return <Cell key={`cell-${index}`} fill="#EAEFF6" />;
            })}
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
        <div className="ChartTitle">
          {completedTasks()[1].value}{" "}
          <p
            style={{
              position: "absolute",
              width: "88px",
              height: "24px",
              left: "46%",
              top: "12px",
              fontSize: "17px",
              color: "rgb(210, 178, 250)",
              marginTop: "0px",
            }}
          >
            {" "}
            / {allTasksThisMonth()}
          </p>
          <p>משימות שהושלמו החודש</p>
        </div>

        <PieChart className="Pie" width={400} height={400}>
          <Pie
            data={completedTasks()}
            cx={120}
            cy={100}
            innerRadius={65}
            outerRadius={80}
            dataKey="value"
            fill="#8884d8"
            max={completedTasks()[0].value}
          >
            {completedTasks().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={
                Math.round(
                  (completedTasks()[1].value / allTasksThisMonth()) * 100
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
