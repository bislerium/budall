import BudgetInput from "./components/BudgetInput";
import "./App.css";
import BudgetRemaining from "./Components/BudgetRemaining";
import CurrencyInput from "./Components/CurrencyInput";
import currencies from "./constants/Currencies";
import ExpenseItemList from "./Components/ExpenseItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import BudgetAllocationForm from "./Components/BudgetAllocationForm";
import BudgetSpent from "./Components/BudgetSpent";
import AllocationType from "./enums/Allocation";

function App() {
  const [currency, setCurrency] = useState(currencies[0][0]);
  const [budget, setBudget] = useState(18500);
  const [allocations, setAllocations] = useState([
    { department: "Sales", amount: 1820 },
    { department: "Marketing", amount: 5460 },
    { department: "Finance", amount: 200 },
    { department: "Human Resources", amount: 6120 },
    { department: "Operations", amount: 150 },
  ]);

  const remainingExceedAlert = () => alert(`The amount cannot exceed remaining fund ${currency}${remaining}`)

  const addNewAllocation = (newAllocation, allocationType) => {
    const index = allocations.findIndex(obj => obj.department === newAllocation.department);
    if (index != -1) {
      
      if (allocationType == AllocationType.Add) {
        if (newAllocation.amount < remaining) {
          setAllocationCountProperty(index, (a) => a + newAllocation.amount)
        } else {
          remainingExceedAlert()
        }
      } else if (allocationType == AllocationType.Subtract) {
        setAllocationCountProperty(index, (a) => a - newAllocation.amount)
      }
    } else {
      if (newAllocation.amount < remaining) {
              setAllocations([...allocations, newAllocation])
      } else {
        remainingExceedAlert()
      }
    }
  }

  const setAllocationCountProperty = (key, operation) => {
    setAllocations(
      allocations.map((obj, i) =>
        i === key ? { ...obj, amount: operation(obj.amount) } : obj
      )
    );
  } 
    

  const spentSoFar = allocations.reduce((prev, curr) => prev + curr.amount, 0);

  const remaining = budget - spentSoFar;

  function setBudgetAmount(amount) {
    if (amount < spentSoFar) {
      alert(`You cannot reduce the budget value lower than the spending ${currency}${spentSoFar}.`)
    } else {
      setBudget(amount)
    }
  }

  return (
    <>
      <div>
        <h1 className="mb-2 text-start">Company&apos;s Budget Allocation</h1>

        <div className="row align-items-center">
          <div className="col">
            <BudgetInput
              currency={currency}
              budget={budget}
              setBudgetData={setBudgetAmount}
            />
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
      </div>

      <div className="mt-4">
        <h2 className="text-start mb-2">Allocation</h2>
        <div style={{ height: "50vh", overflow: "scroll" }}>
          <ExpenseItemList
            currency={currency}
            allocations={allocations}
            setAllocationCountProperty={setAllocationCountProperty}
            setAllocationsData={setAllocations}
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-start mb-2">Add Allocation</h2>
        <BudgetAllocationForm
          currency={currency}
          addNewAllocationData={addNewAllocation}
        />
      </div>
    </>
  );
}

export default App;
