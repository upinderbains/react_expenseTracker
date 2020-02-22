import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts  = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(inc => inc > 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);

 const expense = amounts
    .filter(inc => inc < 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);
console.log(expense);

  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
