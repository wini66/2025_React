##### 댓글 컴포넌트는 week3에 업로드 해두었습니다.

## 4주차
#### 4.1 실행결과

![화면 캡처 2025-03-26 141925](https://github.com/user-attachments/assets/c2803763-33b5-4599-86a1-ed02c66f5c05)

#### 4.2 report_부산 소개 웹페이지
![image](https://github.com/user-attachments/assets/8b0c0300-4dbb-46b8-b655-aa7799d23544)

---

# 📘 4주차 React 수업 요약

## 1. 🔧 State란?

* **State**는 컴포넌트 내에서 **변화하는 데이터**를 저장하는 객체
* 값이 변경되면 컴포넌트가 **자동으로 리렌더링**
* **props**는 부모 → 자식 간 전달만 가능하며, 읽기 전용
* 반면 **state는 컴포넌트 내부에서 관리되고 수정 가능**

### ✅ 사용 예시 (함수형 컴포넌트)

```jsx
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      클릭 횟수: {count}
    </button>
  );
}
```

---

## 2. 🔄 생명주기(Lifecycle)란?

* 컴포넌트가 **마운트(Mount)** → **업데이트(Update)** → **언마운트(Unmount)** 되는 과정을 의미
* 주로 **클래스형 컴포넌트**에서 생명주기 메서드를 사용

### 🧱 주요 생명주기 메서드

| 단계      | 메서드                       | 설명                      |
| ------- | ------------------------- | ----------------------- |
| Mount   | `constructor()`           | 컴포넌트 생성                 |
| Mount   | `componentDidMount()`     | 처음 렌더링 후 실행 (API 호출 등)  |
| Update  | `shouldComponentUpdate()` | 렌더링 여부 결정               |
| Update  | `componentDidUpdate()`    | 업데이트 완료 후 실행            |
| Unmount | `componentWillUnmount()`  | 컴포넌트 제거 전 실행 (타이머 정리 등) |

---

## 3. 🧪 함수형 컴포넌트 생명주기 - `useEffect()`

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mount됨");

    return () => {
      console.log("Unmount됨");
    };
  }, []);

  useEffect(() => {
    console.log("count 변경됨: ", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

## 4. 📦 실습 예시: 알림 리스트 만들기

### ✔️ 주요 코드 개요

* 일정 시간마다 알림 메시지를 추가하고 렌더링
* `setInterval`을 통해 1초마다 상태 업데이트
* 마운트 시 타이머 시작, 언마운트 시 타이머 제거

```jsx
componentDidMount() {
  timer = setInterval(() => {
    // 알림 추가 로직
    this.setState({ ... });
  }, 1000);
}

componentWillUnmount() {
  clearInterval(timer);
}
```

---

## 🔚 요약

* **State**는 변화하는 데이터를 저장, `setState()` 또는 `useState()`로 수정
* **Lifecycle**은 컴포넌트의 생애주기 흐름
* 함수형 컴포넌트에서는 `useEffect()`로 생명주기 대응 가능
* 실습을 통해 타이머 기반 UI 구성 실습 진행



