import styled from "styled-components";
import PaymentHistory from "./../../components/PaymentHistoty/PaymentHistory";

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
`;

const HistoryEmpty = styled.div`
  width: 100%;
  font-weight: 400;
  padding-top: 16px;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: ${(props) => props.theme.grayColor900};
`;
const SubTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.brownColor500};
`;

const HistoryData = [
  {
    title: "레슨 1회+추가시간(20분)",
    date: "2022.09.11",
    cardName: "BC카드",
    price: "280,000원",
  },
  {
    title: "레슨 1회+추가시간(20분)",
    date: "2022.09.11",
    cardName: "BC카드",
    price: "280,000원",
  },
  {
    title: "레슨셰어 적립액 일시결제",
    date: "2022.09.11",
    cardName: "현대카드",
    price: "10,000,000원",
  },
];

// 결제수단 추가되면 결제내역 나오게 바꾸기
function PaymentHistoryContainer({ title, content }) {
  return (
    <>
      <HistoryContainer>
        <SubTitle>{title}</SubTitle>
        <HistoryEmpty>{content}</HistoryEmpty>
        {HistoryData.map((history, index) => {
          return (
            <PaymentHistory key={index} history={history}></PaymentHistory>
          );
        })}
      </HistoryContainer>
    </>
  );
}

export default PaymentHistoryContainer;
