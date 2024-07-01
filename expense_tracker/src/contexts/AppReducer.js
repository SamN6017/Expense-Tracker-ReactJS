function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSCATION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "REMOVE_TRANSCATION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };
  }
}

export default AppReducer;
