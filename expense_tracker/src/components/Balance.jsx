import React, { useContext } from "react";
import { TranscationContext } from "../contexts/TranscationContext";

export default function Balance() {
  const { transactions } = useContext(TranscationContext);
  const total = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  return (
    <div className="summary">
      <div className="balance">
        <h3>Balance is</h3>
        <p>{total.toFixed(2)}</p>
      </div>
    </div>
  );
}
