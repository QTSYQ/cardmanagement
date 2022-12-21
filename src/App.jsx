import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font-family.css";
import Router from "./Router";
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
        font-family:  "Pretendard-Regaular" !important; 
        background-color: gray;
        color:${(props) => props.theme.grayColor900};
      }
  `;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router></Router>
    </>
  );
}

export default App;
