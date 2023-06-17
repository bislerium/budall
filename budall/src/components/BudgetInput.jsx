import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InfoBox.css';

function BudgetInput({currency, budget, setBudgetData}) {
    return (
        <div className="box" id="budget-input">
            <div className="input-group">
            <span className="input-group-text">
                    Budget
                </span>
                <span className="input-group-text">
                    {currency}
                </span>
                <input
                    type="number"
                    min={0}
                    className="form-control"                        max={20000}        
                    value={budget}
                    onChange={(e) => setBudgetData(e.target.value)}
                />
            </div>
        </div>
    );
}

BudgetInput.propTypes = {
    currency: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    setBudgetData: PropTypes.func.isRequired,
  };

export default BudgetInput;
