import styled from "styled-components";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { historyData } from "../../../assets/json/historyData";
import PaymentHistory from "./PaymentHistoty/PaymentHistory";
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px 16px;
`;
const SubTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.brownColor500};
  padding-bottom: 16px;
`;

function PaymentHistoryContainer() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [endNumber, setEndNumber] = useState(5);
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    setHistoryList(historyData);
  }, []);

  useEffect(() => {
    setEndNumber(endNumber + 5);
  }, [inView]);
  return (
    <>
      <HistoryContainer>
        <SubTitle>내 결제내역</SubTitle>
        {historyList.slice(0, endNumber).map((history, index) => {
          return (
            <PaymentHistory key={index} history={history}></PaymentHistory>
          );
        })}
      </HistoryContainer>
      <div ref={ref}></div>
    </>
  );
}

export default PaymentHistoryContainer;
