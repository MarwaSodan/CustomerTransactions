import React, { useState, useEffect } from 'react';

const CustomerTable = ({ customers, transactions }) => {
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setFilteredCustomers(
      customers.filter((customer) =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, customers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by customer name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Transactions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            const totalAmount = transactions
              .filter((transaction) => transaction.customer_id === customer.id)
              .reduce((sum, transaction) => sum + transaction.amount, 0);
            return (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{totalAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;




