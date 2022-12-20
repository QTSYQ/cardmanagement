import styled from "styled-components";
import Modal from "styled-react-modal";
import { useState } from "react";
import CardInfo from "../../CardInfo/CardInfo";
import ModalButton from "../../Buttons/ModalButton/ModalButton";

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

const ModalButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FancyModal = Modal.styled`
  display: flex;
  width:298px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 4px 16px rgba(44, 41, 39, 0.08);
  border-radius:8px;
  padding: 32px 16px 24px;
  gap: 8px;
`;
function StyledModal({
  title,
  modaltitle,
  content,
  modalcontent,
  onClick,
  width,
  closemodalwidth,
  closetext,
  confirmText,
  modalbuttondisable,
  color,
  bordercolor,
  bgcolor,
  disabledcolor,
  disabledbgcolor,
  children,
  deletebutton,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  function toggleModal(e) {
    setOpacity(1);
    setIsOpen(!isOpen);
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
      <ModalButton
        onClick={toggleModal}
        bgcolor={bgcolor}
        width={width}
        color={color}
        content={content}
        disabledcolor={disabledcolor}
        disabledbgcolor={disabledbgcolor}
        disable={modalbuttondisable}
        bordercolor={bordercolor}
      ></ModalButton>
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
            content={modaltitle}
            color="#B63C34"
            bgcolor="#EFC9C7"
          ></CardInfo>
          <Content>{modalcontent}</Content>
        </Container>
        {deletebutton ? (
          <ModalButtonContainer>
            <ModalButton
              bordercolor={bordercolor}
              width={closemodalwidth}
              onClick={toggleModal}
              content={closetext}
              color={color}
              bgcolor={bgcolor}
            ></ModalButton>
            <ModalButton
              bordercolor="#AA6140"
              width={closemodalwidth}
              color="#FFFFFF"
              bgcolor="#AA6140"
              content={content}
              onClick={() => {
                onClick();
                toggleModal();
              }}
            ></ModalButton>
          </ModalButtonContainer>
        ) : (
          <ModalButton
            bordercolor={bordercolor}
            width={closemodalwidth}
            onClick={toggleModal}
            content={closetext}
            color={color}
            bgcolor={bgcolor}
          ></ModalButton>
        )}
      </FancyModal>
    </>
  );
}

export default StyledModal;
