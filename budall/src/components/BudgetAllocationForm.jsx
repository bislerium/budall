import departments from "../constants/Departments";
import { useState } from "react";
import PropTypes from 'prop-types';
import AllocationType from "../enums/Allocation";

function BudgetAllocationForm({ currency, addNewAllocationData }) {

  const allocationProps = Object.keys(AllocationType)
  const [department, setDepartment] = useState(departments[0]);
  const [amount, setAmount] = useState(0);
  const [allocationType, setAllocation] = useState(allocationProps[0]);


  return (
    <div className="row">
      <div className="input-group col">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Department
        </label>
        <select
          className="form-select"
          id="inputGroupSelect01"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group col">
        <label className="input-group-text" htmlFor="inputGroupSelect02">
          Allocation
        </label>
        <select
          className="form-select"
          id="inputGroupSelect02"
          value={allocationType}
          onChange={(e) => setAllocation(e.target.value)}
        >
          {allocationProps.map((value, index) => (
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
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div className="col">
        <button type="button" className="btn btn-primary"
        onClick={() => addNewAllocationData({department: department, amount: amount}, allocationType)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

BudgetAllocationForm.propTypes = {
  currency: PropTypes.string.isRequired,
  addNewAllocationData: PropTypes.func.isRequired,
};

export default BudgetAllocationForm;
