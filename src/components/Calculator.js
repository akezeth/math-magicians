import { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    opeation: null,
  });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  return (
    <div className="wrapper">
      <Buttons
        handleClick={handleClick}
        total={Number(state.total)}
        operation={state.operation}
        next={state.next}
      />
    </div>
  );
};

export default Calculator;
