import React, { useState, useEffect } from 'react';
import CustomerTable from './components/CustomerTable';
import TransactionGraph from './components/TransactionGraph';
import './index.css'; // تأكد من استيراد ملف CSS

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/customers')
      .then((response) => response.json())
      .then((data) => setCustomers(data));

    fetch('http://localhost:3001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="container">
      <h1>Customer Transactions</h1>
      <CustomerTable customers={customers} transactions={transactions} />
      <div className="chart-container">
        <TransactionGraph transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
