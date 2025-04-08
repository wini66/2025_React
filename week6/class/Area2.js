import { useState } from "react";

const Area = () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  // 너비를 변경하는 함수 - 삼항 연산자 사용
  const changeWidth = (amount) => {
    const newWidth = size.width + amount;

    // 삼항 연산자로 조건 체크: 범위 내에 있으면 변경, 아니면 기존 값 유지
    const updatedWidth = newWidth > 0 && newWidth < 150 ? newWidth : size.width;

    setSize({ ...size, width: updatedWidth });
  };

  // 높이를 변경하는 함수 - 삼항 연산자 사용
  const changeHeight = (amount) => {
    const newHeight = size.height + amount;

    // 삼항 연산자로 조건 체크: 범위 내에 있으면 변경, 아니면 기존 값 유지
    const updatedHeight =
      newHeight > 0 && newHeight < 150 ? newHeight : size.height;

    setSize({ ...size, height: updatedHeight });
  };

  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button onClick={() => changeWidth(20)}>너비 증가</button>
      <button onClick={() => changeWidth(-20)}>너비 감소</button>
      <button onClick={() => changeHeight(10)}>높이 증가</button>
      <button onClick={() => changeHeight(-10)}>높이 감소</button>
    </div>
  );
};

export default Area;
