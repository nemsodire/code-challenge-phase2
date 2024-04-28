import React, { useState } from 'react';

function AddTransaction({ onAddTransaction }) {
  const [date, setDate] = useState('');
const [description, setDescription] = useState('');
const [amount, setAmount] = useState(0); 
return (
  <form onSubmit={(e) => {
    e.preventDefault(); 
    onAddTransaction({ date, description, amount });
    setDate('');
    setDescription('');
    setAmount(0);
  }}>
    <label htmlFor="date">Date:</label>
    <input
      type="date"
      id="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    />
    <label htmlFor="description">Description:</label>
    <input
      type="text"
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    />
    <label htmlFor="amount">Amount:</label>
    <input
      type="number"
      id="amount"
      value={amount}
      onChange={(e) => setAmount(parseFloat(e.target.value))}
      required
    />
    <button type="submit">Add Transaction</button>
  </form>
);


  
}



export default AddTransaction;