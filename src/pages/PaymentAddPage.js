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
const PaymentHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px;
`;

const PaymentHeaderTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.theme.brownColor500};
`;

const PaymentHeaderContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
`;

function PaymentAddPage() {
  return (
    <>
      <Container>
        <Header>x</Header>
        <PaymentHeaderContainer>
          <PaymentHeaderTitle>결제관리</PaymentHeaderTitle>
          <PaymentHeaderContent>결제수단을 추가해주세요</PaymentHeaderContent>
        </PaymentHeaderContainer>
      </Container>
    </>
  );
}

export default PaymentAddPage;
