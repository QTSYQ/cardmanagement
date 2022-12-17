import styled from "styled-components";
import React from "react";
import MainContainer from "../Layouts/MainContainer/MainContainer";
import PaymentHeaderContainer from "../Layouts/PaymentHeaderContainer/PaymentHeaderContainer";
import PaymentContainer from "../Layouts/PaymentContainer/PaymentContainer";
import PaymentHistoryContainer from "../Layouts/PaymentHistoryContainer/PaymentHistoryContainer";
import { LongButton } from "../components/common/Buttons/LongButton/LongButton";
// 유즈 이펙트로 스토리지 불러오기
function PaymentMainPage() {
  return (
    <>
      <MainContainer>
        <PaymentHeaderContainer
          title="결제관리"
          content="결제수단과 결제내역을 확인할 수 있습니다."
        />
        <PaymentContainer title="내 결제수단" />
        {/* <PaymentHistoryContainer
          title="내 결제내역"
          content="결제내역이 없습니다."
        /> */}
      </MainContainer>
    </>
  );
}

export default PaymentMainPage;
