import "./App.css";
import Balance from "./components/Balance";
import ExpenseHandler from "./components/ExpenseHandler";
import ExpenseIncome from "./components/ExpenseIncome";
import ExpenseList from "./components/ExpenseList";
import { TransactionProvider } from "./contexts/TransactionProvider";

function App() {
  return (
    <TransactionProvider>
      <div className="container">
        <h1>Expense Tracker</h1>
        <Balance />
        <ExpenseIncome />
        <ExpenseHandler />
        <ExpenseList />
      </div>
    </TransactionProvider>
  );
}

export default App;
