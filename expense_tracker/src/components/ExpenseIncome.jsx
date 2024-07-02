import React, { useContext } from "react";
import { TranscationContext } from "../contexts/TranscationContext";

export default function ExpenseIncome() {
  const { transactions } = useContext(TranscationContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="summary">
      <div className="income">
        <h3>
          Your Income <p>{income}</p>{" "}
        </h3>
      </div>

      <div className="expense">
        <h3>
          Your Expense <p>{expense}</p>
        </h3>
      </div>
    </div>
  );
}
