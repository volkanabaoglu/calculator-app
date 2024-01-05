import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const handleAddition = () => {
    if (display !== "") {
      try {
        const result = eval(display);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSubtraction = () => {
    if (display !== "") {
      try {
        const result = eval(display);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleMultiplication = () => {
    if (display !== "") {
      try {
        const result = eval(display);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDivision = () => {
    if (display !== "") {
      try {
        const result = eval(display);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <div>
        <input type="text" value={display} readOnly />
      </div>
      <div className="button-list">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>

        <button
          onClick={() => {
            handleClick("+");
            handleAddition();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            handleClick("-");
            handleSubtraction();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            handleClick("*");
            handleMultiplication();
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            handleClick("/");
            handleDivision();
          }}
        >
          /
        </button>

        <button onClick={calculateResult}>=</button>
        <button onClick={clearDisplay}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
