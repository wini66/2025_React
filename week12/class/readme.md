## 12주차

### TODO list 만들기
#### 페이지에 회색 배경색상 적용
![image](https://github.com/user-attachments/assets/fe3810f3-059b-4672-9b64-b27ed9ea8c46)

#### TodoTemplate
 투두리스트의 레이아웃을 설정하는 컴포넌트. 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여준다.
![image](https://github.com/user-attachments/assets/5c10f8f7-ba5a-4d38-aae9-b7a9f111577e)

#### TodoHead
 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여준다.
![image](https://github.com/user-attachments/assets/6fba162a-2cca-420e-9ba7-25c9a6d54299)

#### TodoList
 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 여러 개의 TodoItem 컴포넌트를
렌더링해준다.
![image](https://github.com/user-attachments/assets/a8987d2e-7a5f-475b-8bcb-f2355123676f)

#### TodoItem
 각 할 일에 대한 정보를 렌더링해주는 컴포넌트. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할
수 있다. 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해진다. 그리고, 마우스를 올리
면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제된다.
![image](https://github.com/user-attachments/assets/431f4dd4-6e85-4389-bc05-4005bf51cf2f)

#### TodoCreate
• 새로운 할 일을 등록할 수 있게 해주는 컴포넌트. TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해
주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타난다. 버튼을 다시 누르면 폼이 사라진다.
![image](https://github.com/user-attachments/assets/c2b809c0-7e2f-4448-af56-0659475bde12)



## 📝 Web Programming 12주차 수업 내용 정리

> React TODO List 앱 만들기 (1-17장)  

## 📚 학습 목표
- React와 styled-components를 활용한 실제 프로젝트 구현
- 컴포넌트 기반 UI 설계 및 구현
- CSS-in-JS 라이브러리 활용법 학습

## 🛠 개발 환경 설정

### 프로젝트 생성 및 패키지 설치
```bash
npx create-react-app mashup-todolist
cd mashup-todolist
yarn add react-icons styled-components
```

### 사용 기술 스택
- **React**: 컴포넌트 기반 UI 라이브러리
- **styled-components**: CSS-in-JS 스타일링
- **react-icons**: 아이콘 라이브러리

## 🏗 프로젝트 구조 설계

### 컴포넌트 계획
```
TodoTemplate (레이아웃)
├── TodoHead (헤더)
├── TodoList (리스트)
│   └── TodoItem (개별 아이템)
└── TodoCreate (입력 폼)
```

### 각 컴포넌트 역할

| 컴포넌트 | 역할 | 주요 기능 |
|---------|------|-----------|
| `TodoTemplate` | 전체 레이아웃 | 중앙 정렬, 그림자 효과 |
| `TodoHead` | 헤더 영역 | 날짜, 요일, 남은 할 일 개수 |
| `TodoList` | 리스트 컨테이너 | TodoItem들을 map으로 렌더링 |
| `TodoItem` | 개별 할 일 | 완료 토글, 삭제 기능 |
| `TodoCreate` | 입력 폼 | 새 할 일 추가, 토글 UI |

## 💄 스타일링 구현

### 1. 전역 스타일 설정
```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
```

### 2. TodoTemplate - 메인 레이아웃
```javascript
const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
```

### 3. TodoHead - 헤더 스타일링
```javascript
const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
```

### 4. TodoList - 스크롤 가능한 리스트
```javascript
const TodoListBlock = styled.div`
  flex: 1;  /* 남은 공간 모두 차지 */
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;  /* 스크롤 허용 */
`;
```

### 5. TodoItem - 개별 아이템 스타일링

#### Component Selector 활용
```javascript
const Remove = styled.div`
  display: none;  /* 기본적으로 숨김 */
  /* 스타일링... */
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  
  &:hover {
    ${Remove} {
      display: initial;  /* 호버 시 삭제 버튼 표시 */
    }
  }
`;
```

#### 조건부 스타일링
```javascript
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
```

### 6. TodoCreate - 플로팅 버튼과 입력 폼

#### 플로팅 버튼
```javascript
const CircleButton = styled.button`
  background: #38d9a9;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
  transition: 0.125s all ease-in;
  
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      transform: translate(-50%, 50%) rotate(45deg);  /* 45도 회전 */
    `}
`;
```

## 🧩 컴포넌트 구현

### App.js - 최상위 컴포넌트
```javascript
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
```

### TodoCreate - 상태 관리
```javascript
function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input 
              autoFocus 
              placeholder="할 일을 입력 후, Enter 를 누르세요" 
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}
```

## 🎯 구현된 주요 기능

### ✅ 완료된 기능 (17장까지)
- [x] 프로젝트 초기 설정
- [x] 전체 UI 컴포넌트 구현
- [x] styled-components 스타일링
- [x] 반응형 레이아웃 (flex)
- [x] 호버 효과 및 애니메이션
- [x] TodoCreate 토글 기능

### 🔄 애니메이션 효과
1. **버튼 회전**: Add 버튼 클릭 시 45도 회전
2. **색상 변화**: 녹색 → 빨간색 전환
3. **호버 효과**: TodoItem 호버 시 삭제 버튼 표시
4. **부드러운 전환**: `transition: 0.125s all ease-in`

## 📁 파일 구조
```
src/
├── components/
│   ├── TodoTemplate.js    # 메인 레이아웃
│   ├── TodoHead.js        # 헤더 (날짜, 할일 개수)
│   ├── TodoList.js        # 할일 리스트 컨테이너
│   ├── TodoItem.js        # 개별 할일 아이템
│   └── TodoCreate.js      # 할일 추가 폼
├── App.js                 # 루트 컴포넌트
└── index.js              # 앱 진입점
```

## 🔍 주요 학습 포인트

### 1. styled-components 고급 기능
- **createGlobalStyle**: 전역 스타일 적용
- **Component Selector**: 부모-자식 관계 스타일링
- **조건부 스타일링**: props 기반 동적 스타일

### 2. CSS 레이아웃 기법
- **Flexbox**: 유연한 레이아웃 구성
- **Position absolute**: 플로팅 버튼 배치
- **Transform**: 중앙 정렬 및 회전 효과

### 3. 사용자 경험 (UX) 개선
- **직관적인 아이콘 사용**: react-icons 활용
- **시각적 피드백**: 호버, 클릭 효과
- **부드러운 애니메이션**: transition 활용

## 🚀 다음 단계 (18장 이후 예정)
- Context API를 활용한 상태 관리
- useReducer로 복잡한 상태 로직 처리
- 실제 CRUD 기능 구현
- 성능 최적화 (React.memo)



