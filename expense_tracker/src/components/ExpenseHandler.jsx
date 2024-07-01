import React, { useState, useContext } from "react";
import { TranscationContext } from "../contexts/TranscationContext";

function ExpenseHandler() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [expenseType, setExpenseType] = useState("Expense");
  const { addTransaction } = useContext(TranscationContext);

  function handleSubmit(e) {
    e.preventDefault();
    amount = expenseType === "Expense" ? -amount : amount;
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      description,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount(0);
    setDescription("");
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Amount
          <input
            type="number"
            id="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label htmlFor="Description">
          Description
          <input
            type="text"
            id="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div>
          <label>
            <input
              type="radio"
              value="Expense"
              checked={expenseType === "Expense"}
              onChange={() => setExpenseType("Expense")}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              value="Income"
              checked={expenseType === "Income"}
              onChange={() => setExpenseType("Income")}
            />
            Income
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseHandler;
