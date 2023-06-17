import "bootstrap";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";

function ExpenseItemList({ currency, allocations, setAllocationCountProperty, setAllocationsData }) {

  const increaseByTen = (key) => {
    setAllocationCountProperty(key, (a) => a+10)
  };

  
  const decreaseByTen = (key) => {
    setAllocationCountProperty(key, (a) => a-10)
  };

  const remove = (key) => {    
    setAllocationsData(allocations.filter((_, i) => i !== key));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increased by 10</th>
          <th scope="col">Decrease by 10</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {allocations.map((value, index) => (
          <ExpenseItem
            id={index}
            currency={currency}
            allocation={value}
            increaseByTen={increaseByTen}
            key={index}
            decreaseByTen={decreaseByTen}
            remove={remove}
          />
        ))}
      </tbody>
    </table>
  );
}

ExpenseItemList.propTypes = {
  currency: PropTypes.string.isRequired,
  allocations: PropTypes.array.isRequired,
  setAllocationCountProperty: PropTypes.func.isRequired,
  setAllocationsData: PropTypes.func.isRequired,
};

export default ExpenseItemList;
