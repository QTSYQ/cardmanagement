import styled from "styled-components";
import CardInfo from "../CardInfo/CardInfo";
import Modal from "styled-react-modal";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
  text-align: center;
  padding-top: 8px;
`;

const FancyModal = Modal.styled`
  display: flex;
  width:298px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 16px rgba(44, 41, 39, 0.08);
  border-radius:8px;
  padding: 32px 16px 24px;
  gap: 8px;
`;

function StyledModal({ content, modalOpen }) {
  const [isOpen, setIsOpen] = useState(modalOpen);
  const [opacity, setOpacity] = useState(1);
  function toggleModal(e) {
    setOpacity(0);
    // setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <>
      <FancyModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <Container>
          <CardInfo
            content={content}
            color="#B63C34"
            bgcolor="#EFC9C7"
          ></CardInfo>
          <Content>
            대표 카드는 삭제할 수 없습니다. 대표 카드 변경 뒤에 삭제해주세요
          </Content>
        </Container>
        <button
          onClick={() => {
            toggleModal();
          }}
        >
          Close me
        </button>
      </FancyModal>
    </>
  );
}

export default StyledModal;
