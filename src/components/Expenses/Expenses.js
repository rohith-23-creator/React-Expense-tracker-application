import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const onFilterHandler = (year) => {
    setFilteredYear(year);
  };
  const [filteredYear, setFilteredYear] = useState("2022");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter onFilter={onFilterHandler} selected={filteredYear} />
      <ExpenseChart expenses={filteredExpenses} />

      {filteredExpenses.length === 0 ? (
        <p className="warning">No Expenses found in this year</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
}

export default Expenses;
