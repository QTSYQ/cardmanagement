import styled from "styled-components";

function PaymentHistoryEmptyContainer() {
  const Container = styled.div`
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
  return (
    <>
      <Container>
        <SubTitle>내 결제내역</SubTitle>
        <HistoryEmpty>결제내역이 없습니다.</HistoryEmpty>
      </Container>
    </>
  );
}

export default PaymentHistoryEmptyContainer;
