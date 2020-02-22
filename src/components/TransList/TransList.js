import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "../Transaction/Transaction";

const TransList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>Hisory</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} trans={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransList;
