import React from 'react';

const Calculator = () => (
  <>
    <section className="calculator">
      <div className="container">
        <button type="button" className="levels display">
          0
        </button>
        <button type="button" className="control lighter">
          AC
        </button>
        <button type="button" className="control lighter">
          +/-
        </button>
        <button type="button" className="control lighter">
          %
        </button>
        <button type="button" className="control orange arithmetic">
          &divide;
        </button>
        <button type="button" className="control lighter">
          7
        </button>
        <button type="button" className="control lighter">
          8
        </button>
        <button type="button" className="control lighter">
          9
        </button>
        <button type="button" className="control orange arithmetic">
          &times;
        </button>
        <button type="button" className="control lighter">
          4
        </button>
        <button type="button" className="control lighter">
          5
        </button>
        <button type="button" className="control lighter">
          6
        </button>
        <button type="button" className="control orange arithmetic">
          &minus;
        </button>
        <button type="button" className="control lighter">
          1
        </button>
        <button type="button" className="control lighter">
          2
        </button>
        <button type="button" className="control lighter">
          3
        </button>
        <button type="button" className="control orange arithmetic">
          +
        </button>
        <button type="button" className="zero-btn lighter">
          0
        </button>
        <button type="button" className="control lighter arithmetic">
          .
        </button>
        <button type="button" className="control orange arithmetic">
          =
        </button>
      </div>
    </section>
  </>
);

export default Calculator;
