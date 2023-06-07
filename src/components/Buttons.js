import PropTypes from 'prop-types';
import Screen from './Screen';

const Buttons = ({
  handleClick, total, operation, next,
}) => (
  <div className="buttons">
    <Screen total={Number(total)} operation={operation} next={next} />
    <button type="button" className="btn gray" onClick={handleClick}>AC</button>
    <button type="button" className="btn gray" onClick={handleClick}>+/-</button>
    <button type="button" className="btn gray" onClick={handleClick}>%</button>
    <button type="button" className="btn orange" onClick={handleClick}>÷</button>
    <button type="button" className="btn gray" onClick={handleClick}>7</button>
    <button type="button" className="btn gray" onClick={handleClick}>8</button>
    <button type="button" className="btn gray" onClick={handleClick}>9</button>
    <button type="button" className="btn orange" onClick={handleClick}>x</button>
    <button type="button" className="btn gray" onClick={handleClick}>4</button>
    <button type="button" className="btn gray" onClick={handleClick}>5</button>
    <button type="button" className="btn gray" onClick={handleClick}>6</button>
    <button type="button" className="btn orange" onClick={handleClick}>-</button>
    <button type="button" className="btn gray" onClick={handleClick}>1</button>
    <button type="button" className="btn gray" onClick={handleClick}>2</button>
    <button type="button" className="btn gray" onClick={handleClick}>3</button>
    <button type="button" className="btn orange" onClick={handleClick}>+</button>
    <button type="button" className="btn gray span-two" onClick={handleClick}>0</button>
    <button type="button" className="btn gray" onClick={handleClick}>.</button>
    <button type="button" className="btn orange" onClick={handleClick}>=</button>
  </div>
);

Buttons.propTypes = {
  handleClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Buttons.defaultProps = {
  operation: null,
  next: null,
};

export default Buttons;
