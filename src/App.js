import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font-family.css";
import PaymentMainPage from "./pages/PaymentMainPage";

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
          font-family: "Pretendard";
          font-size: 14px;
          background-color: gray;
          line-height: 175%;
          padding-top: 50px;
          color:${(props) => props.theme.grayColor900};
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
