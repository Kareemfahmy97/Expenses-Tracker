import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 94.25,
    date: new Date(2022, 4, 6),
  },
  {
    id: "el2",
    title: "New TV",
    amount: 954.25,
    date: new Date(2022, 4, 1),
  },
  {
    id: "el3",
    title: "Car Fuel",
    amount: 200.5,
    date: new Date(2022, 3, 28),
  },
  {
    id: "el4",
    title: "Food",
    amount: 150,
    date: new Date(2021, 3, 16),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
