# Expense-Tracker-ReactJS

This is a simple expense tracker application built with React. It allows you to track your expenses and income, add new transactions, and remove existing ones. The application uses React Context and Reducer for state management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Hooks Used](#hooks-used)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

### Adding a Transaction

1. Enter the transaction text (e.g., "Groceries") and the amount (use a negative number for expenses and a positive number for income).
2. Click the "Add Transaction" button to add the transaction to the list.

### Deleting a Transaction

1. Click the "x" button next to a transaction to remove it from the list.

### Viewing the Balance

1. The balance, income, and expense totals are displayed at the top of the application.

## Components

- **App.js**: The root component that wraps everything in the `TransactionProvider`.
- **TransactionProvider.js**: Provides the context for managing transactions.
- **TransactionList.js**: Displays the list of transactions.
- **TransactionSummary.js**: Displays the total balance, income, and expenses.
- **AppReducer.js**: Manages the state changes based on dispatched actions.

## Hooks Used

### useReducer
The `useReducer` hook is used in `TransactionProvider` to manage the state of transactions. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.

Example:
```javascript
const [state, dispatch] = useReducer(AppReducer, initialState);
```

### useContext
The `useContext` hook is used to access the `TransactionContext` in components that need the transaction data and actions. It takes a context object as an argument and returns the current context value.

Example:
```javascript
const { transactions, deleteTransaction, addTransaction } = useContext(TransactionContext);
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




https://github.com/SamN6017/Expense-Tracker-ReactJS/assets/52350783/e62f9b96-f1ef-4c43-84eb-92ab15a925c6




