## 11주차
#### 11.1 출석부
![image](https://github.com/user-attachments/assets/c637a0dc-05e0-417d-b3aa-f2256c163ea3)
#### 11.2 SignUp
![image](https://github.com/user-attachments/assets/1c46fc61-bba1-4e67-a8f9-78626dbfa927)
#### 11.3 온도
![image](https://github.com/user-attachments/assets/0500cd85-5f7d-4613-a402-8a7367975acb)
#### 11.4 프로필
![image](https://github.com/user-attachments/assets/3eecf977-7fbb-43e5-978a-2961a5f14209)

# 11주차 수업 정리

## Lists & Keys

리액트에서 배열 형태의 데이터를 효율적으로 렌더링하고 각 컴포넌트를 고유하게 식별하기 위한 핵심 개념입니다.

### map() 함수

- JavaScript 배열의 메서드로, 각 요소를 변환하여 새로운 배열을 생성합니다
- 원본 배열을 변경하지 않고, 새로운 배열을 반환합니다
- React에서 리스트를 동적으로 렌더링할 때 필수적으로 사용됩니다

```javascript
// 기본 사용법
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 객체 배열 반환
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// 리액트에서의 사용
const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Key의 중요성

- 리액트에서 리스트를 렌더링할 때 각 항목에는 고유한 "key" 속성이 필요합니다
- key는 리액트가 어떤 항목이 변경, 추가, 제거되었는지 식별하는 데 사용됩니다
- 효율적인 리스트 업데이트를 위해 매우 중요합니다

```javascript
// 인덱스를 key로 사용 (비추천)
function NameList() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// ID를 key로 사용 (추천)
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Forms

사용자 입력을 처리하고 데이터를 서버로 전송하기 위한 요소입니다.

### Controlled Components

- 값이 React의 상태에 의해 제어되는 폼 요소입니다
- HTML 폼과 달리 React 상태가 "단일 진실 공급원(Single Source of Truth)"이 됩니다

```javascript
function NameForm(props) {
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  
  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    event.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 다양한 폼 요소 다루기

- `input`, `textarea`, `select` 등의 요소를 유사한 방식으로 처리할 수 있습니다
- 여러 입력 필드는 객체 상태를 사용하여 효율적으로 관리할 수 있습니다

```javascript
function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">제출</button>
    </form>
  );
}
```

## Lifting State Up (상태 끌어올리기)

- 여러 컴포넌트가 동일한 데이터를 공유해야 할 때 사용하는 패턴입니다
- 상태를 공통 부모 컴포넌트로 끌어올려 중앙에서 관리합니다

### 구현 단계:

1. 공유할 상태를 부모 컴포넌트에 정의
2. 상태 변경 함수를 자식 컴포넌트에 props로 전달
3. 자식 컴포넌트에서 props로 받은 함수를 사용해 부모의 상태 변경
4. 변경된 상태를 props를 통해 다시 자식에게 전달

```javascript
function Parent() {
  const [text, setText] = useState("");
  
  return (
    <div>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </div>
  );
}

function ChildA({ text, setText }) {
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

function ChildB({ text }) {
  return <p>ChildA에서 입력한 값: {text}</p>;
}
```

## Composition vs Inheritance

리액트에서는 상속(Inheritance)보다 합성(Composition)을 통한 컴포넌트 재사용을 권장합니다.

### 합성(Composition)의 방식:

1. **Containment (포함)**: `children` props를 사용하여 컴포넌트 내에 다른 컴포넌트를 포함

```javascript
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>제목</h2>
      <p>내용입니다</p>
    </Card>
  );
}
```

2. **Specialization (특수화)**: 특정 목적을 위해 일반 컴포넌트를 구체화

```javascript
function Dialog({ title, message }) {
  return (
    <div className="dialog">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

function WarningDialog() {
  return <Dialog title="경고!" message="이 작업은 취소할 수 없습니다." />;
}
```

3. **Higher-Order Components (HOC)**: 컴포넌트를 감싸 기능을 확장하는 패턴

```javascript
function withLogger(WrappedComponent) {
  return function(props) {
    console.log("렌더링:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogger(MyComponent);
```

리액트에서는 "복잡한 컴포넌트를 여러 작은 컴포넌트로 분리하고, 이들을 조합하여 새로운 컴포넌트를 만드는 방식"을 권장합니다.
