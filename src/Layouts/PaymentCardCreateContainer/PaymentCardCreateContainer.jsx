import styled from "styled-components";
import React from "react";
import PaymentHeaderContainer from "./../PaymentHeaderContainer/PaymentHeaderContainer";
import PaymentCardCreateContainer from "./../../pages/CardCreatePage/PaymentCardCreateContainer/PaymentCardCreateContainer";
import MainContainer from "../MainContainer/MainContainer";

const Container = styled.div`
  height: 100vh;
  background-color: white;
`;
function PaymentCardCreatePage() {
  return (
    <>
      <MainContainer>
        <Container>
          <PaymentHeaderContainer
            title="결제수단 추가하기"
            content="결제수단을 추가해주세요"
          ></PaymentHeaderContainer>
          <PaymentCardCreateContainer />
        </Container>
      </MainContainer>
    </>
  );
}

export default PaymentCardCreatePage;
