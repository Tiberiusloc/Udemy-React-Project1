import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpenseDisplay.css';
import Card from "../UI/Card";

function ExpenseDisplay(props) {
  const { expenses } = props;

return (
  <Card className="expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
  </Card>
  );
}

export default ExpenseDisplay;