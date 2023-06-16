import BudgetInput from "./components/BudgetInput";
import "./App.css";
import BudgetSpent from "./components/BudgetSpent";
import BudgetRemaining from "./Components/BudgetRemaining";
import CurrencyInput from "./Components/CurrencyInput";
import currencies from "./constants/Currencies";
import ExpenseItemList from "./Components/ExpenseItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BudgetAllocationForm from "./Components/BudgetAllocationForm";

function App() {
  const [currency, setCurrency] = useState(currencies[0][0]);
  const [budget, setBudget] = useState(0);
  const [allocations, setAllocations] = useState([
    { department: 'Sales', amount: 100000 },
    { department: 'Marketing', amount: 80000 },
    { department: 'Finance', amount: 120000 },
    { department: 'Human Resources', amount: 60000 },
    { department: 'Operations', amount: 150000 },
  ])

  let spentSoFar = allocations.reduce((prev, curr) => prev + curr.amount, 0)

  let remaining = budget - spentSoFar;

  return (
    <>
      <h1 className="mb-4 text-start">Company&apos;s Budget Allocation</h1>

      <div className="row align-items-center">
        <div className="col">
          <BudgetInput currency={currency} setBudgetData={setBudget} />
        </div>
        <div className="col">
          <BudgetRemaining amount={remaining} currency={currency} />
        </div>
        <div className="col">
          <BudgetSpent amount={spentSoFar} currency={currency} />
        </div>
        <div className="col">
          <CurrencyInput setCurrencyData={setCurrency} />
        </div>
      </div>
      <div>
        <h2 className="text-start">Allocation</h2>
        <ExpenseItemList currency={currency} allocations={allocations} setAllocationsData={setAllocations}/>

      </div>
      <div>
        <h2 className="text-start">Add Allocation</h2>

        <BudgetAllocationForm currency={currency} allocations={allocations} setAllocationsData={setAllocations}/>
      </div>
    </>
  );
}

export default App;
