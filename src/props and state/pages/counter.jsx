import { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(1);
  const [count, setCount] = useState(false);

  const Count = () => {
    setCount(true);
    setData(data * 2);
  };

  console.log(count, "count");
  console.log(data, "data");

  return (
    <div>
      <h1>Here it is counter function</h1>
      {/* {count ? data + 1 : data} */}
      {data > 1 ? data + 1 : data}
      <div>
        <button onClick={Count}>click</button>
      </div>
    </div>
  );
};
export default Counter;
