import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoBox.css"
import currencies from "../constants/Currencies";

function CurrencyInput({ setCurrencyData }) {
  return (
    <div className='box currency-input'>
      <div className="input-group">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Currency
        </label>
        <select
          className="form-select  currency-input"
          id="inputGroupSelect01"
          onChange={(e) => setCurrencyData(e.target.value)}
        >
          {currencies.map((value, index) => (
            <option key={index} value={value[0]}>
              {value[0]} {value[1]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  setCurrencyData: PropTypes.func.isRequired,
};

export default CurrencyInput;
