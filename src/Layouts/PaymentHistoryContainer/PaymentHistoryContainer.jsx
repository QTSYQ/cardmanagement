import styled from "styled-components";
import PaymentHistory from "../../components/PaymentHistoty/PaymentHistory";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { historyData } from "./historyData";
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 결제수단 추가되면 결제내역 나오게 바꾸기
function PaymentHistoryContainer({ title, content }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
  });

  const [endNumber, setEndNumber] = useState(4);
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    setHistoryList(historyData);
  }, []);

  useEffect(() => {
    setEndNumber(endNumber + 4);
    console.log("endNumber : ", endNumber, "inView", inView);
  }, [inView]);
  return (
    <>
      <HistoryContainer>
        {historyList.slice(0, endNumber).map((history, index) => {
          return (
            <PaymentHistory key={index} history={history}></PaymentHistory>
          );
        })}
        <div ref={ref}></div>
      </HistoryContainer>
    </>
  );
}

export default PaymentHistoryContainer;
