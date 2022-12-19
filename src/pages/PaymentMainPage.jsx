import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MainContainer from "../Layouts/MainContainer/MainContainer";
import PaymentHeaderContainer from "../Layouts/PaymentHeaderContainer/PaymentHeaderContainer";
import PaymentContainer from "../Layouts/PaymentContainer/PaymentContainer";
import PaymentHistoryContainer from "../Layouts/PaymentHistoryContainer/PaymentHistoryContainer";
import { LongButton } from "../components/common/Buttons/LongButton/LongButton";
import PaymentHistoryEmptyContainer from "../Layouts/PaymentHistoryEmptyContainer/PaymentHistoryEmptyContainer";

const Container = styled.div`
  height: 100vh;
  background-color: white;
`;

const HistoryContainer = styled.div`
  background-color: white;
`;

function PaymentMainPage() {
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList")) || [];
  });
  useEffect(() => {
    console.log(cardList);
  }, []);
  return (
    <>
      <MainContainer>
        <Container>
          <PaymentHeaderContainer
            title="결제관리"
            content="결제수단과 결제내역을 확인할 수 있습니다."
          />
          <PaymentContainer title="내 결제수단" />
          {cardList.length < 1 ? (
            <PaymentHistoryEmptyContainer />
          ) : (
            <HistoryContainer>
              <PaymentHistoryContainer />
            </HistoryContainer>
          )}
        </Container>
      </MainContainer>
    </>
  );
}

export default PaymentMainPage;
