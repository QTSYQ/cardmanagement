import styled from "styled-components";
import React from "react";
import MainContainer from "../MainContainer/MainContainer";
import PaymentHeaderContainer from "../PaymentHeaderContainer/PaymentHeaderContainer";
import LongButton from "../../components/common/Buttons/LongButton/LongButton";
import PaymentManagementFormContainer from "../../pages/CardManagementPage/PaymentManagementFormContainer/PaymentManagementFormContainer";

const Container = styled.div`
  height: 100vh;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
function PaymentManagementPage() {
  return (
    <>
      <MainContainer>
        <Container>
          <PaymentHeaderContainer
            title="결제수단 관리"
            content="수단 추가/삭제, 대표카드를 변경할 수 있습니다"
          >
            <LongButton
              plusicon={true}
              content="결제수단 추가하기"
              color="#AA6140"
              to="/create"
            />
          </PaymentHeaderContainer>
          <PaymentManagementFormContainer />
        </Container>
      </MainContainer>
    </>
  );
}

export default PaymentManagementPage;
