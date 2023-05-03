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
      <section className="calculator flex">
        <div className="math-kid">
          <img
            src="https://th.bing.com/th/id/R.83950bc183d94ac68ff6e551a33f9dc2?rik=T1%2fhBDTPGZTTrg&riu=http%3a%2f%2fwww.scasd.org%2fcms%2flib5%2fPA01000006%2fCentricity%2fDomain%2f935%2fj0395714.gif&ehk=3PcQgIDiHi5f3%2fcf6q%2bYhR%2bH8FUQWkbMrzAo1dCkivE%3d&risl=&pid=ImgRaw&r=0"
            alt="math kid"
          />
        </div>
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
