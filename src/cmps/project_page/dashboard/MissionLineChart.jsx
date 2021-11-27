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
        arr.push({
          name: task.title,
          uv: task.taskStatus,
          pv: project.id,
          // pv: 100,
        });
      });
    });
    return arr;
  };
  return (
    <div className="graph">
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={data()}>
          <Area dataKey="pv" />
          <XAxis dataKey="uv" />
          <YAxis dataKey="pv" axisLine={false} tickLine={true} />
          <Tooltip activeDot={{ r: 8 }} />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
        {/* <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal="true" vertical="" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(tick) => {
            return `${tick}%`;
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart> */}
      </ResponsiveContainer>
    </div>
  );
};
