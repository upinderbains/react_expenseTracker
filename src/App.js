import React from "react";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransList from "./components/TransList/TransList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { GlobalProvider } from './context/GlobalState'
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
