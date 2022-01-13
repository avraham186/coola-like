import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]);

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
    let curr = new Date();
    let firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    let lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
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
      let date = new Date(x[2]);
      console.log(date);
      allthisweektasks[date.getDay()].numOfTasks += x[1];
    });
    console.log(allthisweektasks);
    setData(allthisweektasks);
  }, [projects]);

  return (
    <div className="lineTasksChart">
      <ResponsiveContainer aspect={3}>
        <LineChart
          width={300}
          height={300}
          data={data}
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
