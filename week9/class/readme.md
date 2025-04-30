## 9주차
#### 9.1 실행 결과 
![image](https://github.com/user-attachments/assets/f5634854-85e8-4e45-a2d0-f5e55bcc43c8)
#### 9.2 
![image](https://github.com/user-attachments/assets/88402018-ffed-494d-b9ae-d68343462e3a)
#### 9.3
![image](https://github.com/user-attachments/assets/19035b3a-989e-4fe1-86b9-af63eb43f4ca)
#### 9.4
![image](https://github.com/user-attachments/assets/c20d116e-a661-4b7a-8e63-1ca4b5356e7c)
#### 9.5
![image](https://github.com/user-attachments/assets/d18229f8-21b8-40d6-8269-5017a367ad73)
#### 9.6
![image](https://github.com/user-attachments/assets/4e392754-4aa1-409d-988f-916e84eb9bac)
#### 9.7
![image](https://github.com/user-attachments/assets/4ed2df1b-9b66-4fa6-ae28-bfcfac8ad6b6)

---

# 📚 9주차 수업 정리 (React)

## 1️⃣ 리액트 이벤트 핸들러 

### 📌 이벤트란?
- 사용자 입력(클릭, 입력 등)에 반응하여 동작을 수행하는 것
- 이벤트를 처리하는 함수 = **이벤트 핸들러**

### 🧩 React vs DOM 이벤트
| 항목 | DOM 이벤트 | React 이벤트 |
|------|------------|--------------|
| 등록 방식 | `addEventListener` | `onClick={}` 등 |
| 네이밍 | 소문자(`onclick`) | 카멜케이스(`onClick`) |
| 제거 방식 | 수동 제거 | 자동 제거 (언마운트 시) |
| 이벤트 객체 | `Event` | `SyntheticEvent` |

### 🛠 주요 개념
- **기본 사용법**:
  ```jsx
  <button onClick={handleClick}>클릭</button>
  ```
- **이벤트 객체 활용**: `event.target.value`
- **상태 변경과 연동**:
  ```jsx
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  ```
- **이벤트 전달 방지**: `event.stopPropagation()`
- **기본 동작 방지**: `event.preventDefault()`
- **useCallback 최적화**: 불필요한 함수 재생성 방지
- **인자 전달**:
  ```jsx
  <button onClick={() => handleClick("홍길동")}>클릭</button>
  ```

---

## 2️⃣ 조건부 렌더링 

### 📌 정의
- 조건에 따라 **화면에 표시할 UI를 동적으로 바꾸는 방법**

### ✅ 사용 가능한 조건부 렌더링 방법
| 방식 | 사용 예 |
|------|---------|
| `if`문 | 명확한 조건 분기 |
| 삼항 연산자 (`? :`) | `{isLogin ? A : B}` |
| `&&` 연산자 | `{isLogin && A}` |
| `??` 연산자 | `user ?? "Guest"` |
| 즉시 실행 함수 (IIFE) | `{(() => {})()}` |
| `switch` 문 | 여러 조건 처리 |
| 컴포넌트 분리 | `<Login />` or `<Logout />` |

### 🧩 Truthy / Falsy 개념
- Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Truthy: 비어있지 않은 값들, 배열/객체 등

### 💻 예제
```jsx
function Greeting({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}</h1>;
}
```

### 🛠 실습 예시
- 로그인 버튼을 눌렀을 때 텍스트 변경
- `Toolbar.jsx` / `LandingPage.jsx`로 상태 전달

---

## ✅ 요약 비교표

| 주제 | 핵심 내용 |
|------|-----------|
| 이벤트 처리 | `onClick`, `onChange`, SyntheticEvent 사용 |
| 상태 변경 | `useState` + 이벤트 핸들러에서 상태 변경 |
| 최적화 | `useCallback`으로 함수 재생성 방지 |
| 조건부 렌더링 | `if`, 삼항 연산자, `&&`, `??`, 컴포넌트 분리 |

