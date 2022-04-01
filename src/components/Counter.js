import { useState } from "react";

const Counter = () => {
  const [value, valueChange] = useState(0);

  return (
    <div>
      {value}
      <button onClick={() => valueChange(value + 2)}>Увеличить на 2</button>
    </div>
  );
};
export default Counter;
