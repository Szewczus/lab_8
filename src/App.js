import NaturalNumberInput from "./Input";
import Wyniki from "./Wyniki";
import { useState, useEffect } from "react";
import { Fibonacci } from "./Fibonacci";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading || inputValue === "") return;
    function handleCalculateButtonClick() {
      setResult(Fibonacci(inputValue));
      setIsLoading(false);
    }
    handleCalculateButtonClick();
  }, [isLoading, inputValue]);

  return (
    <div className="App-background">
      <div className="App-container column">
        <div className="column horizontal-center content">
          <h1>Kalkulator Fibbonaciego</h1>
          <p>Podaj liczbę naturalną:
          <NaturalNumberInput
            value={inputValue}
            setValue={setInputValue}
            setResult={setResult}
          />
          </p>
          <button
            className="calculate-fibonacci-button"
            onClick={(e) => {
              if (inputValue !== "") setIsLoading(true);
            }}
          >
            Oblicz
          </button>
          <Wyniki result={result} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
