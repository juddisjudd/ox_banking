import React from 'react';
import { Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    day: 'Mon',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Tue',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Wed',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Thu',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Fri',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Sat',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: 'Sun',
    income: Math.floor(Math.random() * 5000) + 1000,
    expenses: Math.floor(Math.random() * 5000) + 1000,
  },
];

const OverviewChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart data={data}>
        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Line type="monotone" dataKey="income" stroke="hsl(var(--primary))" dot={false} />
        <Line type="monotone" dataKey="expenses" stroke="hsl(var(--destructive))" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
