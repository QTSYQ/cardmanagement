import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalProvider backgroundComponent={FadingBackground}>
        <App />
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);
