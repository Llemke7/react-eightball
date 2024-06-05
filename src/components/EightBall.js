import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");
  const [counter, setCounter] = useState({ green: 0, goldenrod: 0, red: 0 });

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setColor(randomAnswer.color);
    setMsg(randomAnswer.msg);
    setCounter(prevCounter => ({
      ...prevCounter,
      [randomAnswer.color]: prevCounter[randomAnswer.color] + 1
    }));
  };

  const handleReset = () => {
    setColor("black");
    setMsg("Think of a Question");
  };

  return (
    <div className="EightBall-container">
      <div className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
        <p className="EightBall-msg">{msg}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div className="EightBall-counter">
        <p>Green: {counter.green}</p>
        <p>Goldenrod: {counter.goldenrod}</p>
        <p>Red: {counter.red}</p>
      </div>
    </div>
  );
};

export default EightBall;
