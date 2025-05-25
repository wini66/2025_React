import TodoCreate from "./Week_12/TodoCreate";
import TodoHead from "./Week_12/TodoHead";
import TodoList from "./Week_12/TodoList";
import TodoTemplate from "./Week_12/TodoTemplate";

import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
body {
background: #e9ecef;
}
`;
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
export default App;
