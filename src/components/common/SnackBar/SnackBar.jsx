import React from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Container = styled.div`
  position: fixed;
  width: 298px;
  height: 66px;
  bottom: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  box-shadow: 0px 4px 16px rgba(44, 41, 39, 0.16);
  border-radius: 8px;
  visibility: hidden;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-family: "Pretendard-Regaular";
  color: ${(props) => props.theme.errorColor500};
  font-size: 12px;
  font-weight: 700;
  align-items: center;
`;
const Content = styled.div`
  font-family: "Pretendard-Regaular";
  font-weight: 400;
  color: ${(props) => props.theme.grayColor900};
  font-size: 16px;
`;

function SnackBar({ title, content, open, visible }) {
  return (
    <>
      <Container>
        <IoMdCloseCircleOutline
          size={19}
          color="#B63C34"
        ></IoMdCloseCircleOutline>
        <ContentContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </ContentContainer>
      </Container>
    </>
  );
}

export default SnackBar;
