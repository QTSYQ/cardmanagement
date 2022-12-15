import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font-family.css";
import PaymentMainPage from "./page/PaymentMainPage";

const GlobalStyles = createGlobalStyle` 
      ${reset}
      a{
          text-decoration: none;
          color: inherit;
      }
      *{
          box-sizing: border-box;
      }
      body {
          font-family: "Pretendard-Regular";
          font-weight: 400;
          font-size: 14px;
          background-color: rgba(20, 20, 20, 1);
          padding-top: 50px;
      }
  `;

function App() {
  return (
    <>
      <GlobalStyles />
      <PaymentMainPage></PaymentMainPage>
    </>
  );
}

export default App;
