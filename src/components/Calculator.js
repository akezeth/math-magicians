import { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculator';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    opeation: null,
  });

  return (
    <div className="wrapper">
      <Buttons />
    </div>
  );
};

export default Calculator;
