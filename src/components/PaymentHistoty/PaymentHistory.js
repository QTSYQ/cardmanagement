import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;
const DateCardName = styled.div`
  font-size: 12px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor700};
`;
const CardName = styled.div`
  font-size: 12px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor700};
`;
const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;

function PaymentHistory({ history }) {
  return (
    <>
      <Container>
        <Title>{history.title}</Title>
        <DateContainer>
          <DateCardName>
            {history.date} | {history.cardName}
          </DateCardName>
          <Price>{history.price}</Price>
        </DateContainer>
      </Container>
    </>
  );
}

export default PaymentHistory;
