import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px;
`;

const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: ${(props) => props.theme.brownColor500};
`;

const HeaderContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
`;

function PaymentHeaderContainer({ title, content }) {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderContent>{content}</HeaderContent>
      </HeaderContainer>
    </>
  );
}

export default PaymentHeaderContainer;
