import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import LoginPage from "./components/pages/Login";

import Dashboardpage from "./components/pages/Dashboard";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1faee;
    padding: 0;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <GlobalStyle />
      {isLogin ? (
        <Dashboardpage onLogout={() => setIsLogin(false)} />
      ) : (
        <LoginPage onSuccess={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
