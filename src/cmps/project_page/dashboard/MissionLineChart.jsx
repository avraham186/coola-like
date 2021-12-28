import React, { PureComponent, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

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
      (item) => item.pv !== 0 && item.uv > arr[54].uv && item.uv < arr[58].uv
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

  useEffect(async () => {
    let allthisweektasks = [
      { day: "Sunday", numOfTasks: 0 },
      { day: "Monday", numOfTasks: 0 },
      { day: "Tuesday", numOfTasks: 0 },
      { day: "Wednesday", numOfTasks: 0 },
      { day: "Thursday", numOfTasks: 0 },
      { day: "Friday", numOfTasks: 0 },
      { day: "Saturday", numOfTasks: 0 },
    ];
    var curr = new Date();
    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    let firstDayFormat =
      firstday.getDate() +
      "/" +
      (firstday.getMonth() + 1) +
      "/" +
      firstday.getFullYear();
    let lastDayFormat =
      lastday.getDate() +
      "/" +
      (lastday.getMonth() + 1) +
      "/" +
      lastday.getFullYear();
    console.log(firstDayFormat, lastDayFormat);
    const resp = await axios.get(
      `https://cula-like-master.herokuapp.com/api/projects/tasks/statistics?daily&before=${lastDayFormat}&after=${firstDayFormat}`
    );
    resp.data.forEach((x) => {
      var date = new Date(x[2]);
      console.log(typeof x[2]);
      console.log((allthisweektasks[date.getDay()].numOfTasks += x[1]));
    });

    console.log(allthisweektasks);
  }, []);

  return (
    <div className="lineTasksChart">
      <ResponsiveContainer aspect={3}>
        <LineChart
          width={300}
          height={300}
          data={data()}
          style={{ width: "48%", height: "37%", top: "30%", right: "4%" }}
        >
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
