import departments from "../constants/Departments";

function BudgetAllocationForm({ currency, allocations, setAllocationsData }) {
  const newAllocation = {
    department: "",
    amount: 0,
  };

  return (
    <div className="row">
      <div className="input-group col">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Department
        </label>
        <select
          className="form-select"
          id="inputGroupSelect01"
          onChange={(e) => (newAllocation.department = e.target.value)}
        >
          {departments.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group col">
        <span className="input-group-text">Allocation</span>
        <span className="input-group-text">{currency}</span>
        <input
          type="number"
          min={0}
          className="form-control"
          placeholder="5000"
          onChange={(e) => (newAllocation.amount = Number(e.target.value))}
        />
      </div>

      <div className="col">
        <button type="button" className="btn btn-primary"
        onClick={() => setAllocationsData([...allocations, newAllocation])}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default BudgetAllocationForm;
