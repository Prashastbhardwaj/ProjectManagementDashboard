import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const TaskDistributionChart = ({ tasks }) => {
  const data = [
    { name: 'To Do', value: tasks.filter(task => task.state === 'todo').length },
    { name: 'In Progress', value: tasks.filter(task => task.state === 'inProgress').length },
    { name: 'Completed', value: tasks.filter(task => task.state === 'completed').length },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TaskDistributionChart;
