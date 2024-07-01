import React, { useContext } from "react";
import { TranscationContext } from "../contexts/TranscationContext";

const TransactionList = () => {
  const { transcations } = useContext(TranscationContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transcations.map((item) => (
          <li className={item.amount < 0 ? "minus" : "plus"}>
            {item.text} <span>{Math.abs(item.amount)}</span>
            {/* <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
