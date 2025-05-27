# 13주차 수업내용정리 

## 1. 라우팅(Routing) 개념

### 라우팅이란?
- 사용자가 요청한 URL에 따라 알맞는 페이지를 보여주는 것
- 웹 애플리케이션을 여러 페이지로 구성할 때 필요한 시스템
- 예시: 블로그의 경우
  - 글쓰기 페이지
  - 포스트 목록 페이지  
  - 포스트 읽기 페이지

### SPA(Single Page Application)
- 한 개의 페이지로 이루어진 애플리케이션
- HTML을 한번만 받아와서 웹 애플리케이션을 실행
- 이후 필요한 데이터만 받아와서 화면 업데이트
- 브라우저의 History API를 사용하여 주소창 값만 변경

## 2. React Router 설치 및 기본 설정

### 설치
```bash
npx create-react-app router-tutorial
cd router-tutorial
yarn add react-router-dom
```

### 프로젝트에 라우터 적용
```javascript
// src/index.js
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## 3. 기본 컴포넌트 사용법

### Route 컴포넌트
```javascript
// App.js
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
```

### Link 컴포넌트
```javascript
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <Link to="/about">소개</Link>
    </div>
  );
};
```

## 4. URL 파라미터와 쿼리스트링

### URL 파라미터
```javascript
// 라우트 설정
<Route path="/profiles/:username" element={<Profile />} />

// 컴포넌트에서 사용
import { useParams } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  const username = params.username;
  // ...
};
```

### 쿼리스트링
```javascript
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  // useLocation 사용
  const location = useLocation();
  const queryString = location.search;

  // useSearchParams 사용 (권장)
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  
  return (
    <div>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
    </div>
  );
};
```

## 5. 중첩된 라우트

### 기본 구조
```javascript
const App = () => {
  return (
    <Routes>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};
```

### Outlet 컴포넌트
```javascript
import { Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet /> {/* 하위 라우트가 렌더링될 위치 */}
      <ul>
        <li><Link to="/articles/1">게시글 1</Link></li>
        <li><Link to="/articles/2">게시글 2</Link></li>
      </ul>
    </div>
  );
};
```

## 6. 공통 레이아웃 컴포넌트

```javascript
// Layout.js
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// App.js에서 사용
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
</Routes>
```

## 7. 프로그래밍적 네비게이션

### useNavigate Hook
```javascript
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  
  const goArticles = () => {
    navigate('/articles'); // 특정 경로로 이동
    // navigate('/articles', { replace: true }); // replace 옵션
  };
  
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goArticles}>게시글 목록</button>
    </div>
  );
};
```

### NavLink 컴포넌트
```javascript
import { NavLink } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };
  
  return (
    <ul>
      <li>
        <NavLink
          to="/articles/1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          게시글 1
        </NavLink>
      </li>
    </ul>
  );
};
```

## 8. 기타 유용한 기능

### 404 페이지 (NotFound)
```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigate 컴포넌트 (리다이렉트)
```javascript
import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  
  return <div>마이 페이지</div>;
};
```

### index props
```javascript
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} /> {/* path="/"와 동일 */}
    <Route path="/about" element={<About />} />
  </Route>
</Routes>
```

## 핵심 개념 정리

1. **BrowserRouter**: HTML5 History API를 사용하는 라우터
2. **Routes**: 라우트들을 감싸는 컨테이너
3. **Route**: 경로와 컴포넌트를 연결
4. **Link**: 페이지 이동을 위한 링크 (a 태그 대신 사용)
5. **useParams**: URL 파라미터 조회
6. **useSearchParams**: 쿼리스트링 조회/수정
7. **useNavigate**: 프로그래밍적 페이지 이동
8. **Outlet**: 중첩 라우트에서 하위 컴포넌트 렌더링 위치 지정
