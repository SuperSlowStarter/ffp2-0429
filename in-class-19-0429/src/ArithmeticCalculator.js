import { useState } from "react";

const ArithmeticCalculator = () => {
  const [expression, setExpression] = useState("");
  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const handleClick = () => {
    try {
      const result = eval(expression);
      alert(`결과: ${result}`);
    } catch (error) {
      alert("잘못된 산술식입니다.");
    }
  };

  return (
    <div>
      <h1>Arithmetic Calculator</h1>
      {/*Field*/}
      <input
        type="text"
        placeholder="Give me calculator"
        value={expression}
        onChange={handleChange}
      />
      {/*Calculate Button*/}
      <button onClick={handleClick}>Calculate</button>
    </div>
  );
};

export default ArithmeticCalculator;
