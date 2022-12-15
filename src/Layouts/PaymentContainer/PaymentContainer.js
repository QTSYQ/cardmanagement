import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px;
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
  padding-top: 16px;
  font-size: 16px;
  line-height: 175%;
  text-align: center;
  color: ${(props) => props.theme.grayColor900};
`;

const PaymentContainerItem = styled.div``;

function PaymentContainer({ title, content }) {
  return (
    <>
      <Container>
        <SubTitle>{title}</SubTitle>
        <EmptyContainer>{content}</EmptyContainer>
      </Container>
    </>
  );
}

export default PaymentContainer;
