import 'bootstrap';
import ExpenseItem from './ExpenseItem';

function ExpenseItemList({currency, allocations, setAllocationsData}) {

    return ( <table className="table">
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
      {allocations.map((value, index) => <ExpenseItem currency={currency} allocation={value} setAllocationsData={setAllocationsData} key={index}/>)}
    </tbody>
  </table> );
}

export default ExpenseItemList;