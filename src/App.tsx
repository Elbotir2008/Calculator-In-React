/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState({
    numbers: "0",
    deeds: "",
  });

  const setResultNumber = (number: any) => {
    if (result.deeds) {
      setResult({
        numbers: number,
        deeds: result.deeds,
      });
    } else {
      setResult((prevResult) => ({
        ...prevResult,
        numbers:
          prevResult.numbers === "0" ? number : prevResult.numbers + number,
      }));
    }
  };

  const performOperation = (operation: any) => {
    setResult((prevResult) => ({
      ...prevResult,
      deeds: operation,
    }));
  };

  const clearResult = () => {
    setResult({
      numbers: "0",
      deeds: "",
    });
  };

  const calculateResult = () => {
    switch (result.deeds) {
      case "+":
        setResult((prevResult) => ({
          numbers: `${
            parseFloat(prevResult.numbers) + parseFloat(result.numbers)
          }`,
          deeds: "",
        }));
        break;
      case "-":
        setResult((prevResult) => ({
          numbers: `${
            parseFloat(prevResult.numbers) - parseFloat(result.numbers)
          }`,
          deeds: "",
        }));
        break;
      case "*":
        setResult((prevResult) => ({
          numbers: `${
            parseFloat(prevResult.numbers) * parseFloat(result.numbers)
          }`,
          deeds: "",
        }));
        break;
      case "/":
        setResult((prevResult) => ({
          numbers: `${
            parseFloat(prevResult.numbers) / parseFloat(result.numbers)
          }`,
          deeds: "",
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="calculator">
        <div className="output">
          <span className="result">{result.numbers}</span>
        </div>
        <div className="buttons">
          <button onClick={() => setResultNumber("1")}>1</button>
          <button onClick={() => setResultNumber("2")}>2</button>
          <button onClick={() => setResultNumber("3")}>3</button>
          <button onClick={() => performOperation("+")}>+</button>
          <button onClick={() => setResultNumber("4")}>4</button>
          <button onClick={() => setResultNumber("5")}>5</button>
          <button onClick={() => setResultNumber("6")}>6</button>
          <button onClick={() => performOperation("-")}>-</button>
          <button onClick={() => setResultNumber("7")}>7</button>
          <button onClick={() => setResultNumber("8")}>8</button>
          <button onClick={() => setResultNumber("9")}>9</button>
          <button onClick={() => performOperation("*")}>*</button>
          <button className="bg-red" onClick={clearResult}>
            C
          </button>
          <button onClick={() => setResultNumber("0")}>0</button>
          <button className="bg-green" onClick={calculateResult}>
            =
          </button>
          <button onClick={() => performOperation("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
