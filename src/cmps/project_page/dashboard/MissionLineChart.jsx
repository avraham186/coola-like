import React, { PureComponent, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export const MissionLineChart = ({ projects, tasks }) => {
  const data = () => {
    const arr = [];
    projects.list.map((project) => {
      return project.tasks.map((task) => {
        let date = new Date(task.endDate);

        arr.push({
          name: task.title,
          uv: task.endDate ? date : 0,
          pv: task.taskStatus === "COMPLETED" ? task : 0,
        });
      });
    });

    let curr = new Date(); // get current date
    let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    let firstday = new Date(curr.setDate(first)).toUTCString();
    let lastday = new Date(curr.setDate(last)).toUTCString();

    let thisWeekTasks = arr.filter(
      (item) => item.pv !== 0 && item.uv < arr[38].uv && item.uv > arr[23].uv
    );

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let allthisweektasks = [
      { day: "Sunday", numOfTasks: 0 },
      { day: "Monday", numOfTasks: 0 },
      { day: "Tuesday", numOfTasks: 0 },
      { day: "Wednesday", numOfTasks: 0 },
      { day: "Thursday", numOfTasks: 0 },
      { day: "Friday", numOfTasks: 0 },
      { day: "Saturday", numOfTasks: 0 },
    ];
    thisWeekTasks.forEach((x) => {
      let dayName = days[new Date(x.uv).getDay()];
      allthisweektasks.forEach((y) => {
        if (y.day === dayName) {
          y.numOfTasks++;
        }
      });
    });
    return allthisweektasks;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3} className="lineTasksChart">
        <LineChart width={500} height={300} data={data()}>
          <XAxis dataKey="day" />
          <YAxis dataKey="numOfTasks" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="numOfTasks" stroke="#6D49AC" />
          <Tooltip activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
