import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const submit = e => {
    e.preventDefault();
    addTransaction({ id: Date.now(), text, amount: +amount })
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form
        onSubmit={submit}
      >
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
