import AppReducer from "./AppReducer";
import { TranscationContext } from "./TranscationContext";
import { useReducer } from "react";

export const TransactionProvider = ({ children }) => {
  const initialState = { transactions: [] };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <TranscationContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TranscationContext.Provider>
  );
};
