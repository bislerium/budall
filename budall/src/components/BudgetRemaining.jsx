import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoBox.css";

function BudgetRemaining({ amount, currency }) {
  return (
    <div className="box" id="budget-remaining">
      <span className="me-2">Remaining</span>
      <b>
        <span>{currency}</span>
        <span>{amount}</span>
      </b>
    </div>
  );
}

BudgetRemaining.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default BudgetRemaining;
