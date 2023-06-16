function ExpenseItem({currency, allocation, setAllocationsData}) {

  return (
    <tr>
      <th>{allocation.department}</th>
      <td>{currency}{allocation.amount}</td>
      <td>
        <button className="btn">
          <i className="bi bi-plus-circle-fill text-success"></i>
        </button>
      </td>
      <td>
      <button className="btn">
          <i className="bi bi bi bi-dash-circle-fill text-danger"></i>
        </button>
      </td>
      <td>
      <button className="btn">
          <i className="bi bi bi-x-circle-fill"></i>
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
