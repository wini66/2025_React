## 3주차
#### 3.1 clock_123 & binary clock
![clock](https://github.com/user-attachments/assets/dab39341-a729-4a82-b4bf-4868ff12f596)
##### 기존 코드 수정 
####
![clock2](https://github.com/user-attachments/assets/84d69826-4564-4a5b-a8a7-789b65a48145)
####
![bclock](https://github.com/user-attachments/assets/22edc5e9-062a-4cf2-bc58-d191b8b25751)
####
![clock3](https://github.com/user-attachments/assets/2a800b6b-1634-4a9a-be39-91dce1aa0ca4)
#### 3.2 댓글 컴포넌트
![image](https://github.com/user-attachments/assets/fcacd629-baf5-43a2-9f51-58bd406311dd)
##### 파일이 많아서 주요 파일들 위주로 정리했습니다.

---

# 📘 3주차 React 수업 요약

## 1. React Element

### ✅ 정의

* React 앱을 구성하는 **가장 작은 단위** (HTML의 요소와 비슷함)
* 실제 DOM이 아니라 **가상 DOM (Virtual DOM)** 상에서 존재
* **불변(Immutable)** 객체로 생성 후 변경 불가 → 새로운 엘리먼트로 대체

### ✅ 생성 방법

```jsx
// JSX 방식
const element = <h1>Hello, world!</h1>;

// React API 방식
const element = React.createElement('h1', null, 'Hello, world!');
```

### ✅ 렌더링

* React 엘리먼트는 **DOM 요소에 마운트(render)** 해야 화면에 표시됨

```js
ReactDOM.render(element, document.getElementById('root'));
```

---

## 2. JSX (JavaScript XML)

### ✅ 특징

* JavaScript와 HTML을 **결합한 확장 문법**
* \*\*React.createElement()\*\*로 자동 변환됨 (Babel 등 사용)
* **가독성이 좋고**, HTML처럼 작성 가능

### ✅ 주의 사항

* **하나의 부모 요소로 감싸야 함**
* 자바스크립트 표현식은 `{}` 안에서 사용
* 스타일은 객체 형태로 작성 (`camelCase` 표기법)

```jsx
const style = { backgroundColor: 'blue' };
<div style={style}>Styled text</div>
```

---

## 3. Element vs Component

| 구분  | React Element | React Component       |
| --- | ------------- | --------------------- |
| 정의  | UI의 최소 단위     | 재사용 가능한 UI 블록         |
| 형태  | 불변 객체         | 함수 or 클래스             |
| 재사용 | 불가            | 가능                    |
| 변경  | 새 Element 생성  | 상태(state) 변경으로 자동 렌더링 |

---

## 4. 실습 예시: 시계 만들기

```jsx
function Clock() {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Clock />, document.getElementById('root'));
}, 1000);
```

---

## 🔚 정리

* React는 **Element → Component → UI 구성** 방식
* JSX와 가상 DOM 개념을 활용해 **효율적이고 빠른 UI 업데이트** 가능
* 실습을 통해 ReactDOM.render() 사용법 및 엘리먼트 구조 이해


