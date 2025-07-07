import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory, clearHistory } from '../redux/actions';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  const handleInput = (val) => {
    if (input === '0' && val !== '.') {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  const handleClear = () => setInput('0');

    const handlePlusMinusSign = () => {
    if (input.startsWith('-')) {
      setInput(input.substring(1));
    } else {
      setInput('-' + input);
    }
  };

  const handleEqual = () => {
    try {
      const result = evaluate(input);
      dispatch(addToHistory(`${input} = ${result}`));
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
   <div className="calc-container">
      <div className="calc">
      
        <div className="calc-header">
          <span className="circle red"></span>
          <span className="circle yellow"></span>
          <span className="circle green"></span>
        </div>
        <div className="input-box">{input}</div>
        <div className="buttons">
          <button className="btn gray"  onClick={handleClear}>AC</button>
            <button className="btn gray" onClick={handlePlusMinusSign}>+/−</button>
          <button className="btn gray"  onClick={() => handleInput('%')}>%</button>
          <button className="btn orange" onClick={() => handleInput('/')}>÷</button>

          <button className="btn dark" onClick={() => handleInput('7')}>7</button>
          <button className="btn dark" onClick={() => handleInput('8')}>8</button>
          <button className="btn dark" onClick={() => handleInput('9')}>9</button>
          <button className="btn orange"onClick={() => handleInput('*')}>×</button>

          <button className="btn dark" onClick={() => handleInput('4')}>4</button>
          <button className="btn dark"onClick={() => handleInput('5')}>5</button>
          <button className="btn dark" onClick={() => handleInput('6')}>6</button>
          <button className="btn orange" onClick={() => handleInput('-')}>−</button>

          <button className="btn dark"onClick={() => handleInput('1')}>1</button>
          <button className="btn dark" onClick={() => handleInput('2')}>2</button>
          <button className="btn dark"onClick={() => handleInput('3')}>3</button>
          <button className="btn dark" onClick={() => handleInput('+')}>+</button>

          <button onClick={() => handleInput('0')} className="btn dark zero">0</button>
          <button className="btn dark"onClick={() => handleInput('.')}>.</button>
          <button className="btn orange"onClick={handleEqual}>=</button>
        </div>
      </div>

      <div className="history">
        <div className="history-header">
          <span>History</span>
          <button onClick={() => dispatch(clearHistory())}>Clear</button>
        </div>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
