import styled from "styled-components";
import React, { useEffect, useState } from "react";
import MainContainer from "../MainContainer/MainContainer";
// import PaymentHeaderContainer from "../PaymentHeaderContainer/PaymentHeaderContainer";
// import PaymentContainer from "../../pages/MainPage/PaymentContainer/PaymentContainer";
// import PaymentHistoryEmptyContainer from "./../PaymentHistoryEmptyContainer/PaymentHistoryEmptyContainer";
// import PaymentHistoryContainer from "./../PaymentHistoryContainer/PaymentHistoryContainer";
import PaymentHeaderContainer from "./../PaymentHeaderContainer/PaymentHeaderContainer";
import PaymentContainer from "./../../pages/MainPage/PaymentContainer/PaymentContainer";
import PaymentHistoryEmptyContainer from "./../../pages/MainPage/PaymentHistoryEmptyContainer/PaymentHistoryEmptyContainer";
import PaymentHistoryContainer from "./../../pages/MainPage/PaymentHistoryContainer/PaymentHistoryContainer";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.grayColor100};
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const HistoryContainer = styled.div`
  background-color: white;
`;

function PaymentMainPage() {
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList")) || [];
  });
  useEffect(() => {}, []);
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
