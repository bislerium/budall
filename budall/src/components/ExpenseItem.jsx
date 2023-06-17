import PropTypes from 'prop-types';

function ExpenseItem({ id, currency, allocation, increaseByTen, decreaseByTen, remove }) {
  return (
    <tr>
      <th>{allocation.department}</th>
      <td>{currency}{allocation.amount}</td>
      <td>
        <button className="btn" onClick={() => increaseByTen(id)}>
          <i className="bi bi-plus-circle-fill text-success"></i>
        </button>
      </td>
      <td>
        <button className="btn" onClick={() => decreaseByTen(id)}>
          <i className="bi bi bi bi-dash-circle-fill text-danger"></i>
        </button>
      </td>
      <td>
        <button className="btn" onClick={() => remove(id)}>
          <i className="bi bi bi-x-circle-fill"></i>
        </button>
      </td>
    </tr>
  );
}

ExpenseItem.propTypes = {
  id: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  allocation: PropTypes.object.isRequired,
  increaseByTen: PropTypes.func.isRequired,
  decreaseByTen: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ExpenseItem;
