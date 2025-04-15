import Child from "./Child";

import React, { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((event) => {
    console.log("자식 버튼 클릭됨");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Child handleClick={handleClick} />
    </div>
  );
}
