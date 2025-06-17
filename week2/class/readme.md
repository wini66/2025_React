#### curd.html
![image](https://github.com/user-attachments/assets/106392e9-fee3-421c-a787-9410c91320e4)
#### Button
![리포트에 넣을까](https://github.com/user-attachments/assets/85ca1ff7-f450-4880-8fae-bf6f4289af96)
#### Library
![image](https://github.com/user-attachments/assets/e39d3723-c4f2-4cff-8c05-d0c61a3e0ea0)
#### 자기소개 report 입니다
![image](https://github.com/user-attachments/assets/77643e09-8dea-4b5b-9a7a-4e518fc7f69d)

---

# 📘 2주차 수업 요약 - React 시작과 JSX

## 🚀 리액트 시작하기 (React Setup)

### 🔹 STEP 1: HTML 기반 웹사이트 만들기

* `index.html` 파일로 간단한 정적 웹사이트 구성

### 🔹 STEP 2: CSS 스타일링

* `styles.css` 파일로 외형 꾸미기

### 🔹 STEP 3: React.js 추가

* React CDN을 HTML에 추가
* 리액트 컴포넌트 작성: `MyButton.js` 등

### 🔹 STEP 4: Create React App (CRA) 사용

```bash
npx create-react-app my-app
cd my-app
npm start
```

* React 프로젝트 구조가 자동 생성됨

---

## 🧩 JSX 소개

### 🔸 JSX란?

* JavaScript + XML의 결합
* HTML 같은 문법을 JS 안에서 사용할 수 있는 **문법 확장**

```jsx
const element = <h1>Hello, JSX!</h1>;
```

### 🔸 JSX 특징

* JSX는 내부적으로 `React.createElement()`로 변환됨
* HTML 태그와 JS 코드가 자연스럽게 결합됨
* `{}`로 JS 표현식 삽입 가능

### 🔸 JSX 장점

1. 코드가 간결해짐
2. 가독성이 향상됨
3. XSS 공격에 강함 (Injection Attack 방지)

---

## ⚙️ JSX 사용법

### 🔹 표현식 사용

```jsx
const name = "React";
<h1>Hello, {name}!</h1>
```

### 🔹 속성에 JS 값 사용

```jsx
<img src={imgUrl} alt="샘플 이미지" />
<h1 style={{ color: "blue" }}>Hello</h1>
```

### 🔹 조건부 렌더링

```jsx
{isAdmin && <p>관리자입니다.</p>}
<h1>{isLoggedIn ? "Welcome" : "Login"}</h1>
```

### 🔹 반복 렌더링

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

### 🔹 이벤트 처리

```jsx
<button onClick={handleClick}>클릭</button>
<input onChange={handleChange} />
```

---

## 🧱 리액트 컴포넌트 예시

### 🔸 `Book.jsx`

```jsx
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
    </div>
  );
}
```

### 🔸 `Library.jsx`

```jsx
function Library() {
  return (
    <div>
      <Book name="처음 만난 리액트" />
    </div>
  );
}
```

### 🔸 `index.js`

```jsx
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Library />);
```

---

## 📦 CRA 프로젝트 구조 요약

```
my-app/
├── public/        # 정적 HTML, favicon 등
├── src/           # 실제 리액트 코드
│   ├── App.js     # 메인 컴포넌트
│   └── index.js   # 엔트리 포인트
├── package.json   # 프로젝트 설정
```

