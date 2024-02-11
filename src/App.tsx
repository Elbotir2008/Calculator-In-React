/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function App() {
  const [result, setResult] = useState<any>({
    numbers: "",
    prevNumbers: "0",
    deeds: "",
  });

  const setResultNumber = (e: any) => {
    if (result.deeds) {
      setResult({
        numbers: e.target.innerText,
        prevNumbers: result.prevNumbers,
        deeds: result.deeds,
      });
    } else {
      setResult((prevResult: any) => ({
        ...prevResult,
        prevNumbers:
          prevResult.numbers || prevResult.prevNumbers === "0"
            ? e.target.innerText
            : result.prevNumbers + e.target.innerText,
        numbers: result.numbers,
      }));
    }
  };

  const performOperation = (operation: any) => {
    setResult((prevResult: any) => ({
      ...prevResult,
      deeds: operation,
    }));
  };

  const clearResult = () => {
    setResult({
      numbers: "",
      deeds: "",
      prevNumbers: "0",
    });
  };

  const calculateResult = () => {
    switch (result.deeds) {
      case "+":
        setResult({
          numbers: `${
            parseFloat(result.prevNumbers) + parseFloat(result.numbers)
          }`,
          deeds: "",
          prevNumbers: result.prevNumbers,
        });
        break;
      case "-":
        setResult({
          numbers: `${
            parseFloat(result.prevNumbers) - parseFloat(result.numbers)
          }`,
          deeds: "",
          prevNumbers: "",
        });
        break;
      case "*":
        setResult({
          numbers: `${
            parseFloat(result.prevNumbers) * parseFloat(result.numbers)
          }`,
          deeds: "",
          prevNumbers: "",
        });
        break;
      case "/":
        setResult({
          numbers: `${
            parseFloat(result.prevNumbers) / parseFloat(result.numbers)
          }`,
          deeds: "",
          prevNumbers: "",
        });
        break;
    }
  };

  console.log("PrevNumbers:", result.prevNumbers);
  console.log("Numbers:", result.numbers);

  return (
    <div>
      <div className="calculator">
        <div className="output">
          <span className="result">
            {Math.floor(result.numbers || result.prevNumbers)}
          </span>
        </div>
        <div className="buttons">
          <button onClick={(e) => setResultNumber(e)}>1</button>
          <button onClick={(e) => setResultNumber(e)}>2</button>
          <button onClick={(e) => setResultNumber(e)}>3</button>
          <button onClick={() => performOperation("+")}>+</button>
          <button onClick={(e) => setResultNumber(e)}>4</button>
          <button onClick={(e) => setResultNumber(e)}>5</button>
          <button onClick={(e) => setResultNumber(e)}>6</button>
          <button onClick={() => performOperation("-")}>-</button>
          <button onClick={(e) => setResultNumber(e)}>7</button>
          <button onClick={(e) => setResultNumber(e)}>8</button>
          <button onClick={(e) => setResultNumber(e)}>9</button>
          <button onClick={() => performOperation("*")}>*</button>
          <button className="bg-red" onClick={clearResult}>
            C
          </button>
          <button onClick={(e) => setResultNumber(e)}>0</button>
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
