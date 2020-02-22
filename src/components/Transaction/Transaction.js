import React, { useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";

const Transaction = (props) => {
    const sign = props.trans.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li>
            {props.trans.text}
            <span>{sign}${Math.abs(props.trans.amount)} </span>
            <button onClick={() => deleteTransaction(props.trans.id)}>Delete</button>
        </li>
    );
};

export default Transaction;