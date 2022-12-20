import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
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
  &.show {
    visibility: visible;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
  }
  &.hide {
    visibility: hidden;
  }
  @keyframes fadeIn {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 80px;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      bottom: 80px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
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

const SnackBar = forwardRef((props, ref) => {
  console.log(ref);
  const [showSnackbar, setShowSnackbar] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <>
      <Container ref={ref} className={showSnackbar ? "show" : "hide"}>
        <IoMdCloseCircleOutline
          size={19}
          color="#B63C34"
        ></IoMdCloseCircleOutline>
        <ContentContainer>
          <Title>{props.title}</Title>
          <Content>{props.content}</Content>
        </ContentContainer>
      </Container>
    </>
  );
});
export default SnackBar;
