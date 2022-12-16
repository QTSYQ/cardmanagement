import styled from "styled-components";
import React from "react";
import PaymentHeaderContainer from "../Layouts/PaymentHeaderContainer/PaymentHeaderContainer";
import MainContainer from "../Layouts/MainContainer/MainContainer";
import PaymentCardCreateContainer from "../Layouts/PaymentCardCreateContainer/PaymentCardCreateContainer";
function PaymentCardCreatePage() {
  return (
    <>
      <MainContainer>
        <PaymentHeaderContainer
          title="결제수단 추가하기"
          content="결제수단을 추가해주세요"
        ></PaymentHeaderContainer>
        <PaymentCardCreateContainer></PaymentCardCreateContainer>
      </MainContainer>
    </>
  );
}

export default PaymentCardCreatePage;
