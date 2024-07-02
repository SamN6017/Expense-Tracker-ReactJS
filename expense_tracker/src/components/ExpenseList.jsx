import React, { useContext } from "react";
import { TranscationContext } from "../contexts/TranscationContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(TranscationContext);

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`transaction-item ${
            transaction.amount < 0 ? "expense" : "income"
          }`}
        >
          <p>{transaction.description}</p>
          <p>
            {transaction.amount < 0 ? "-" : "+"}$
            {Math.abs(transaction.amount).toFixed(2)}
          </p>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
