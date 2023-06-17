import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoBox.css";

function BudgetSpent({ amount, currency }) {
  return (
    <div className="box">
      <span className="me-2">Spent so far</span>
      <b>
        <span>{currency}</span>
        <span>{amount}</span>
      </b>
    </div>
  );
}

BudgetSpent.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default BudgetSpent;
