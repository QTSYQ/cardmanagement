import styled from "styled-components";
import React from "react";
const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
`;

function PaymentManagementPage() {}
