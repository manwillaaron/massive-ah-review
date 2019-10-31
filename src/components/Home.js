import React from "react";
import { Link } from "react-router-dom";
import ExpensesDisplay from "./ExpensesDisplay";

export default function Home(props) {
  return (
    <div>
     <label>Total:</label>
      <div>
        $ {Math.ceil(
          props.expenses.reduce((acc, val) => {
            let newVal = val.amount.slice(1);
            return (acc += +newVal);
          }, 0),
          2
        )}.00
      </div>
      {props.expenses.map(ex => (
        <ExpensesDisplay expense={ex} key={ex.id} />
      ))}
      <Link to="/add">Add Expense</Link>
    </div>
  );
}
