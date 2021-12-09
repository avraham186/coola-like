import React, {useEffect, useState, PureComponent} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  

const managers_output = () => {

    return (
        <div className="managers-output-chart">
            <h3> הספק מנהלים</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

};

export default managers_output;