import styled from "styled-components";
import LongButton from "./../../components/common/Buttons/LongButton/LongButton";

import { useEffect, useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.brownColor500};
`;

const EmptyContainer = styled.div`
  width: 100%;
  font-weight: 400;
  padding: 16px 0px;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: ${(props) => props.theme.grayColor900};
`;

const CardContainer = styled.div`
  width: 100%;
  font-weight: 400;
  padding: 16px 0px;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
`;

const CardNull = styled.div`
  padding-bottom: 16px;
`;

const CardList = styled.div`
  padding-bottom: 16px;
`;

const PaymentContainerItem = styled.div``;

function PaymentContainer({ title }) {
  const [isCardList, setIsCardList] = useState(false);
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList")) || [];
  });
  useEffect(() => {
    // const localCardList = JSON.parse(localStorage.getItem("cardList"));
    // console.log(localCardList);
    // setCardList(localCardList);
    // console.log(cardList);
    if (cardList.length > 0) {
      setIsCardList(true);
    } else {
      localStorage.setItem("cardList", "[]");
    }
    console.log(cardList);
  }, []);

  return (
    <>
      <Container>
        <SubTitle>{title}</SubTitle>
        {isCardList ? (
          <CardContainer>
            {cardList.map((card) => {
              return <CardList>{card.cardNumber}</CardList>;
            })}
            <LongButton
              content="결제수단 관리하기"
              color="#AA6140"
              to="/management"
            />
          </CardContainer>
        ) : (
          <EmptyContainer>
            <CardNull>등록된 결제수단이 없습니다</CardNull>
            <LongButton
              plusicon={true}
              content="결제수단 추가하기"
              color="#AA6140"
              to="/create"
            />
          </EmptyContainer>
        )}
      </Container>
    </>
  );
}

export default PaymentContainer;
