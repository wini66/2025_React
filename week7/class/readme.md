---
## 7주차
#### 7.1 클릭
![image](https://github.com/user-attachments/assets/528fd5fb-8039-417f-8275-9020a8c5654e)
#### 7.2 useEffect
![image](https://github.com/user-attachments/assets/7e46b942-0433-41a5-adfb-6f90cb5abb52)
#### 7.3 카운트
![image](https://github.com/user-attachments/assets/451e71cc-9ad9-48e7-8729-1848d0c052d8)
#### 7.4 타이머
![image](https://github.com/user-attachments/assets/947a7a0b-bf60-47fe-9973-b0087c7e8b48)
#### 7.5 마우스
![image](https://github.com/user-attachments/assets/1b668468-6c4d-45ed-a781-97ced502b938)
#### 7.6 api 데이터
![image](https://github.com/user-attachments/assets/46bab71f-978c-4cc4-9d26-e13f5793918b)
#### 7.7 수용 인원
![image](https://github.com/user-attachments/assets/9ee82388-4e01-48f7-af6c-e3c46186c802)
#### 7.8 usememo 없이 계산
![image](https://github.com/user-attachments/assets/772b34cf-be63-4e76-8960-bdccb0586819)
#### 7.9 usememo로 객체 메모이제이션
![image](https://github.com/user-attachments/assets/f971c273-0cc8-4184-bf94-db062dbc3f00)
#### 7.10 useCallback
![image](https://github.com/user-attachments/assets/5554690f-3aa4-4ed4-91c9-0f3378160d66)
#### 7.11 useref
![image](https://github.com/user-attachments/assets/a140958c-f11b-4ff3-b1cb-5c9b4adc901a)

---

## 7주차 수업 내용 정리

---

## 📌 Hooks 개요

React Hooks는 함수형 컴포넌트에 강력한 기능을 제공하는 혁신적인 API입니다.

> **"Hook은 특정 위치에 원하는 함수가 실행되도록 갈고리를 걸어두는 것"**

### ✨ 주요 특징

- **클래스 없이** React의 모든 기능 활용 가능
- 함수형 컴포넌트에서 **상태(state)와 생명주기(lifecycle)** 관리
- 코드의 **간결함**과 **재사용성** 향상
- 모든 Hook은 **'use'로 시작**하는 이름 사용

---

## 🧰 주요 Hook 정리

### 1️⃣ useState

```jsx
const [state, setState] = useState(initialValue);
```

#### 🎯 목적
함수형 컴포넌트에서 상태를 관리하기 위한 Hook

#### ✅ 특징
- 상태값과 상태 변경 함수를 배열 형태로 반환
- 상태 변경 시 컴포넌트 리렌더링 발생
- 변수마다 별도의 `set` 함수 존재

#### 📝 사용 예시
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>총 {count} 번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}
```

---

### 2️⃣ useEffect

```jsx
useEffect(setup, dependencies?);
```

#### 🎯 목적
부수 효과(side effect) 처리를 위한 Hook

#### ✅ 특징
- 컴포넌트 렌더링 후 실행
- 의존성 배열로 실행 시점 제어
- 정리(cleanup) 함수 반환 가능

#### 📊 실행 패턴

| 의존성 배열 | 실행 시점 |
|------------|---------|
| 없음 | 매 렌더링마다 실행 |
| `[]` | 마운트/언마운트 시 한 번만 |
| `[value]` | `value` 변경 시 실행 |

#### 📝 사용 예시

```jsx
// 마운트 시 한 번만 실행
useEffect(() => {
  console.log("컴포넌트가 마운트됨!");
}, []);

// count 변경 시마다 실행
useEffect(() => {
  console.log(`카운트 값이 변경됨: ${count}`);
  document.title = `You clicked ${count} times`;
}, [count]);

// 정리(cleanup) 함수 사용
useEffect(() => {
  const interval = setInterval(() => {
    console.log("1초마다 실행");
  }, 1000);
  
  // 컴포넌트 언마운트 또는 의존성 변경 전 실행
  return () => {
    console.log("타이머 정리");
    clearInterval(interval);
  };
}, []);
```

---

### 3️⃣ useMemo

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### 🎯 목적
계산 결과 메모이제이션을 통한 성능 최적화

#### ✅ 특징
- 의존성 배열 값이 변경될 때만 계산 함수 실행
- 변경이 없으면 이전 결과 재사용
- 렌더링 중에만 실행됨

#### 🔍 사용 케이스
- 비용이 큰 계산 최적화
- 객체/배열의 불필요한 재생성 방지
- 참조 동일성 유지 필요 시

#### 📝 사용 예시

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);
  
  // number가 변경될 때만 계산 실행
  const expensiveResult = useMemo(() => {
    console.log("계산 중...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number;
    }
    return result;
  }, [number]);
  
  return (
    <div>
      <h1>useMemo를 사용하여 최적화</h1>
      <button onClick={() => setCount(count + 1)}>
        클릭: {count}
      </button>
      <h2>결과: {expensiveResult}</h2>
    </div>
  );
}
```

---

### 4️⃣ useCallback

```jsx
const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
```

#### 🎯 목적
함수 메모이제이션을 통한 성능 최적화

#### ✅ 특징
- 의존성 배열 값이 변경될 때만 함수 재생성
- 자식 컴포넌트에 props로 전달하는 콜백 함수에 유용
- 불필요한 렌더링 방지

#### 📊 useMemo vs useCallback

| Hook | 메모이제이션 대상 |
|------|-----------------|
| useMemo | 계산된 값 |
| useCallback | 함수 자체 |

#### 📝 사용 예시

```jsx
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // count가 변경되어도 handleClick은 재생성되지 않음
  const handleClick = useCallback(() => {
    console.log("버튼 클릭됨");
  }, []); // 의존성 배열이 비어 있음
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        카운트 증가
      </button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
```

---

### 5️⃣ useRef

```jsx
const ref = useRef(initialValue);
```

#### 🎯 목적
- DOM 요소에 직접 접근
- 리렌더링 없이 값 저장

#### ✅ 특징
- `.current` 속성을 통해 현재 값 접근
- 값 변경해도 리렌더링 발생하지 않음
- 컴포넌트 생명주기 동안 유지됨

#### 🔍 주요 사용 사례
1. DOM 요소 참조
2. 이전 값 저장
3. 인스턴스 변수 (클래스의 this와 유사)

#### 📝 사용 예시

```jsx
// 1. DOM 접근
function InputFocus() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    // 렌더링 후 input에 포커스
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} type="text" />;
}

// 2. 값 저장 (리렌더링 없이)
function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);
  
  const increment = () => {
    countRef.current += 1; // 리렌더링 발생 안 함
    console.log("Ref 값:", countRef.current);
  };
  
  return (
    <div>
      <p>렌더링 횟수: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        렌더 트리거
      </button>
      <button onClick={increment}>Ref 증가</button>
    </div>
  );
}
```

---

## 🛠️ Custom Hook

자신만의 Hook을 만들어 로직을 재사용할 수 있습니다.

### ✅ 특징
- `use`로 시작하는 이름 사용
- 내부에서 다른 Hook 호출 가능
- 컴포넌트 로직 분리 및 재사용성 향상

### 📝 예시 - 카운터 Custom Hook

```jsx
// useCounter.js
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// 사용 예시
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### 📝 예시 - API 데이터 가져오기 Hook

```jsx
// useFetch.js
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}

// 사용 예시
function Users() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## ⚠️ Hook 사용 규칙

### 1. 최상위 레벨에서만 호출
- ❌ 조건문, 반복문, 중첩 함수 내에서 Hook 호출 금지
- ✅ 항상 같은 순서로 호출되어야 함

```jsx
// ❌ 잘못된 사용
function MyComponent() {
  const [name, setName] = useState('React');
  
  if (name !== '') {
    useEffect(() => {
      // ...
    });
  }
  // ...
}

// ✅ 올바른 사용
function MyComponent() {
  const [name, setName] = useState('React');
  
  useEffect(() => {
    if (name !== '') {
      // ...
    }
  }, [name]);
  // ...
}
```

### 2. React 함수 컴포넌트 내에서만 사용
- ❌ 일반 JavaScript 함수에서 사용 금지
- ✅ 함수 컴포넌트 또는 Custom Hook에서만 사용

---

## 🔧 추천 개발 도구

### 플러그인 및 확장 프로그램
- 🛠️ ES7+ React/Redux/React-Native snippets
- 🔍 React Developer Tools (Chrome 확장)
- 📝 JavaScript (ES6) Code Snippets
- 🧹 ESLint
- 💅 Prettier - Code formatter
- 🎨 Bracket Pair Colorizer

### 유용한 React 라이브러리
- **UI**: Material-UI, Ant Design, Chakra UI
- **상태 관리**: Redux, MobX, Recoil, Zustand
- **라우팅**: React Router
- **폼 관리**: Formik, React Hook Form
- **데이터 Fetching**: Axios, React Query
- **애니메이션**: Framer Motion, React Spring

---

## 🎓 마무리

React Hooks는 함수형 컴포넌트의 한계를 극복하고 더 직관적이고 재사용 가능한 코드를 작성할 수 있게 해줍니다. 각 Hook의 목적과 사용법을 정확히 이해하면 더 효율적인 React 애플리케이션을 개발할 수 있습니다.

> **"Hook을 사용하면 클래스형 컴포넌트 없이도 React의 모든 기능을 활용할 수 있습니다."**








