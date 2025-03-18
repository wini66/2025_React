import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  root.render(<App />);
}
setInterval(tick, 1000); // 1초마다 App을 다시 렌더링
