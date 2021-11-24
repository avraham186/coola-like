import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const MissionPieChart = ({ projects }) => {
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    // ];
    const data = () => {
        let hadash = 0
        let inProcess = 0
        let complete = 0
        projects.list.map((project) => {
            return project.tasks.map(task => {
                if (task.taskStatus === 'IN_PROCESS') {
                    inProcess++
                } else if (task.taskStatus === 'COMPLETED') {
                    complete++
                }
                else {
                    hadash++
                }
            })
        })
        return [
            { name: 'hadash', value: hadash },
            { name: 'inProcess', value: inProcess },
            { name: 'complete', value: complete }
        ]
    }
    const COLORS = ['#7EB3FF', '#FFC474', '#69EB7D'];
    return (
        // <ResponsiveContainer>
        <PieChart width={800} height={400}>
            {console.log('data', data())}
            <Pie
                data={data()}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                // fill="#f2f2f2"
                paddingAngle={5}
                dataKey="value"
            >
                {data().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            {/* <Pie
                data={data}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie> */}
        </PieChart>
        // </ResponsiveContainer> 
    );
}
