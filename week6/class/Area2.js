import { useState } from "react";

const Area = () => {
  // 초기값을 제한 범위 내로 설정 (너비: 100, 높이: 100)
  const [size, setSize] = useState({ width: 100, height: 100 });

  // 너비를 변경하는 함수
  const changeWidth = (amount) => {
    const newWidth = size.width + amount;

    // 너비가 0보다 작거나 150보다 크면 변경하지 않음
    if (newWidth <= 0 || newWidth >= 150) {
      return;
    }

    const copy = { ...size };
    copy.width = newWidth;
    setSize(copy);
  };

  // 높이를 변경하는 함수
  const changeHeight = (amount) => {
    const newHeight = size.height + amount;

    // 높이가 0보다 작거나 150보다 크면 변경하지 않음
    if (newHeight <= 0 || newHeight >= 150) {
      return;
    }

    const copy = { ...size };
    copy.height = newHeight;
    setSize(copy);
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
