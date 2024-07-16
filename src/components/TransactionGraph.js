import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const TransactionGraph = ({ transactions }) => {
  const data = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) {
      acc[date] = { date, amount: 0 };
    }
    acc[date].amount += transaction.amount;
    return acc;
  }, {});

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={Object.values(data)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionGraph;



