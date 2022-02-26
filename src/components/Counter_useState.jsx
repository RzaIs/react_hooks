import React, { useState } from 'react';

function Counter() {
  const [number1, setNumbers1] = useState(0);
  const [number2, setNumbers2] = useState(0);

  const increase = (num) => {
    if (num === 1)
      setNumbers1(prevNumber => prevNumber + 1);
    else
      setNumbers2(prevNumber => prevNumber + 1);
  }

  const decrease = (num) => {
    if (num === 1)
      setNumbers1(prevNumber => prevNumber - 1);
    else
      setNumbers2(prevNumber => prevNumber - 1);
  }

  return (
    <>
      <br />
      <button onClick={() => increase(1)}>+</button> <button onClick={() => increase(2)}>+</button>
      <br /><br />
      <b>
        <span>{number1}</span> : <span>{number2}</span>
      </b>
      <br /><br />
      <button onClick={() => decrease(1)}>-</button> <button onClick={() => decrease(2)}>-</button>
    </>
  );
}

export default Counter;