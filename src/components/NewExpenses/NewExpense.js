import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const [isEditing, setisEditing] = useState(false);

  const setEditingHandler = () => {
    setisEditing(true);
  };

  const cancelEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={setEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
