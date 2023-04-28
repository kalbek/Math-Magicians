import React, { useState } from 'react';
import keypads from './keypads.json';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [values, setValue] = useState({
    total: '0',
    next: null,
  });

  const onChange = (e) => {
    const calculated = calculate(values, e.target.innerText);
    setValue(calculated);
  };

  const { total, next } = values;
  const answer = next || total || '0';

  return (
    <>
      <section className="calculator flex-spaced">
        <div className="container">
          <div className="display">{answer}</div>
          {keypads.map((item) => (
            <button
              key={item.id}
              name={item.name}
              type="button"
              className={item.className}
              onClick={onChange}
              value={item.text}
            >
              {item.text}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Calculator;
