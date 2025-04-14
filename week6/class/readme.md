## 6주차
#### 6.1 Counter 비교
![image](https://github.com/user-attachments/assets/d6414e80-b313-43f2-9f4d-974e85d6d1f1)
![image](https://github.com/user-attachments/assets/55862c25-24e0-4976-95d6-6b68884dc87c)
---
#### 6.2 Area와 기능 추가
![image](https://github.com/user-attachments/assets/8728c860-ebe8-40ef-bf54-6e10403b6aaf)
![image](https://github.com/user-attachments/assets/d4beed4d-53ba-428b-81d2-51461148e5c8)
---
#### 6.3 부산 청년 정책 리포트 
![image](https://github.com/user-attachments/assets/ae884628-8d22-4bcc-9027-d4d8cb672adf)



## 6주차 수업내용 정리
---

# ⚛️ 리액트 훅(Hooks) 

| 항목 | 설명 | 예시/비고 | 이모지 |
|------|------|------------|--------|
| **🔹 훅이란?** | 함수형 컴포넌트에서도 상태(state)나 생명주기 기능을 사용할 수 있게 해주는 기능 | 클래스 컴포넌트의 `this.state`, `setState` 없이 사용 가능 | 📝 |
| **🔸 useState** | 상태값을 관리하는 훅 | `[state, setState] = useState(initialValue)` | 📦 |
| **🔸 useEffect** | 사이드 이펙트를 처리 (예: API 호출, DOM 조작 등) | `useEffect(() => { ... }, [deps])`<br>- mount/update 구분<br>- cleanup 함수는 unmount 시 실행 | ⚙️ |
| **🔸 useMemo** | 연산량이 많은 계산의 결과를 메모이제이션 | `useMemo(() => calc(), [deps])`<br>렌더링 중 실행되는 코드만 허용 | 🧮 |
| **🔸 useCallback** | 함수 자체를 메모이제이션하여 참조 변경 방지 | `useCallback(() => fn(), [deps])`<br>자식 컴포넌트 불필요 렌더 방지 | 🔁 |
| **🔸 useRef** | DOM 접근 또는 값 저장용으로 활용<br>렌더링과 무관 | `const ref = useRef(null)`<br>`ref.current`로 접근 | 🔍 |
| **🧾 훅의 규칙** | - 최상위 레벨에서만 호출<br>- 조건문/반복문 내부 호출 ❌<br>- `use`로 시작해야 함 | 리액트 함수 컴포넌트 또는 커스텀 훅 내에서만 사용 | 📏 |
| **🛠️ 커스텀 훅** | 재사용 가능한 로직을 함수화<br>이름은 반드시 `use`로 시작 | 예: `useCounter()`, `useUserStatus()` 등 | 🧩 |
| **🧪 실습 예시** | - `useCounter.jsx`: 카운터 훅<br>- `Accommodate.jsx`: 조건에 따른 렌더링<br>- `index.js`: 실행 코드 | `npm start`로 실행 | 🧪 |

---


📌 **기억할 것!**
- `useEffect`에서 의존성 배열이 없는 경우, **매번 렌더링마다 실행**
- 의존성 배열이 있는 경우, **배열 내부 값이 변경될 때만 실행**
- `useMemo`, `useCallback`은 최적화 용도로만! 남발 ❌


---

## 🔹 Component State

### ✔️ State란?
- 컴포넌트 내부에서 관리되는 데이터.
- 사용자와의 상호작용, 시간 경과, 네트워크 응답 등에 따라 변경됨.
- 컴포넌트의 동작과 UI에 직접적인 영향을 줌.

### ✔️ State를 사용하는 이유
- 사용자 입력, 이벤트, API 호출 등에 따라 UI를 동적으로 변경할 수 있음.
- React에서는 UI = f(state) 형태로 구성됨.
- State가 바뀌면 React는 자동으로 다시 렌더링하여 UI를 최신 상태로 유지함.

---

## 🔹 Blocking vs Synchronous 

### ✔️ 개념 설명

| 구분             | 설명 |
|------------------|------|
| **Blocking**     | 하나의 작업이 끝나기 전까지 다음 작업을 시작하지 못하는 방식. 실행 흐름이 "막히는" 특성이 있음. |
| **Non-Blocking** | 작업을 요청만 하고, 결과가 준비되면 알림을 받는 방식. 나머지 흐름은 그대로 진행됨. |
| **Synchronous**  | 요청 → 응답 순서가 보장되는 처리 방식. 응답이 오기 전까지 기다림. |
| **Asynchronous** | 요청 후 바로 다음 작업을 실행하고, 결과는 나중에 별도로 처리함. 비동기 콜백 또는 Promise/async-await 구조로 주로 구현됨. |

### ✔️ 관계 이해
- Blocking & Synchronous: 전통적인 동기 호출 방식. 함수 호출 → 응답까지 대기.
- Non-Blocking & Asynchronous: 현대 웹에서 많이 사용하는 비동기 호출. UI 멈춤 없이 처리 가능.

---

## 🔹 Component 구성과 종류

### ✔️ Class Component
- ES6 클래스 기반의 컴포넌트.
- `render()` 메서드 필수.
- `this.state`와 `this.setState()`를 사용해 상태 관리.
- 생명주기 메서드 사용 가능 (e.g., `componentDidMount()`)

### ✔️ Function Component
- 함수로 정의된 컴포넌트.
- React Hooks(`useState`, `useEffect` 등) 사용으로 상태 관리 가능.
- 간결하고 가독성이 좋음.

---

## 🔹 Event Handling

### ✔️ 이벤트 핸들링 방식
- JSX에서는 camelCase로 이벤트 이름을 작성.
- 예: `onClick`, `onChange`, `onSubmit`
- 함수 참조를 중괄호 `{}` 안에 작성.

### ✔️ 이벤트 객체 사용
- 이벤트 핸들러에 `event` 객체가 자동 전달됨.
- `event.preventDefault()`로 기본 동작 막기 가능.

---

## 🔹 Component Life Cycle (생명주기)

> 클래스형 컴포넌트에서만 사용됨.

| 단계           | 메서드                  | 설명                           |
|----------------|--------------------------|--------------------------------|
| Mounting       | `constructor`, `render`, `componentDidMount` | 컴포넌트가 처음 DOM에 삽입될 때 |
| Updating       | `shouldComponentUpdate`, `componentDidUpdate` | props 또는 state 변경 시        |
| Unmounting     | `componentWillUnmount`   | 컴포넌트가 DOM에서 제거될 때   |

---

## 🔹 카멜표기법 vs 파스칼표기법

| 표기법       | 예시             | 사용 용도                             |
|--------------|------------------|----------------------------------------|
| 카멜 표기법  | `myVariable`     | 변수명, 함수명, 이벤트 핸들러 등       |
| 파스칼 표기법| `MyComponent`    | 컴포넌트 이름, 클래스 이름 등          |

- 카멜 표기법 (Camel Case) 첫 번째 단어는 소문자로 시작하고, 이후 단어의 첫 글자는 대문자로 시작합니다. 
- 파스칼 표기법 (Pascal Case): 모든 단어의 첫 글자를 대문자로 시작하고, 단어 사이에는 공백이나 특수 문자가 없이 연결합니다.

---

