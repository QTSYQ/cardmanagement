import styled from "styled-components";
import CircleCheckBox from "../../components/common/CheckBox/CircleCheckBox/CircleCheckBox";
import { useState, useEffect } from "react";
import ShortButton from "../../components/common/Buttons/ModalButton/ModalButton";
import CardInfo from "./../../components/common/CardInfo/CardInfo";
import SnackBar from "../../components/common/SnackBar/SnackBar";
import StyledModal from "../../components/common/Modal/StyledModal/StyledModal";

const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 19px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 16px;
`;

function PaymentManagementFormContainer() {
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList"));
  });
  const [checkNumber, setIsCheckNumber] = useState(null);
  const [failedModalOpen, setFailedModalOpen] = useState(false);

  useEffect(() => {
    // 선택한 value 확인하기
    console.log("체크확인", checkNumber);
  }, [checkNumber]);

  const handleChange = (e) => {
    // setIsCheck(!isCheck);
    console.log(e.target.value);
    setIsCheckNumber(e.target.value);
  };

  return (
    <>
      <Container>
        {cardList.map((card, index) => {
          console.log(checkNumber);
          return (
            <CardContainer>
              <CircleCheckBox
                key={index}
                name="check"
                value={index}
                onChange={(e) => handleChange(e)}
                content={[...card.cardNumber].map((el, index) => {
                  if (el == " ") {
                    el = "-";
                  }
                  if (
                    (index >= 5 && index <= 8) ||
                    (index >= 10 && index <= 13)
                  ) {
                    el = "*";
                  }
                  return el;
                })}
                isChecked={checkNumber == index}
              ></CircleCheckBox>
              {card.isDefault ? (
                <CardInfo
                  content="대표카드"
                  color="#AA6140"
                  bgcolor="#F2E4DD"
                />
              ) : null}
            </CardContainer>
          );
        })}
      </Container>
      <BottomButtonContainer>
        //대표카드 삭제시도 버튼모달
        <StyledModal
          title="삭제할 수 없는 카드입니다"
          content="대표 카드는 삭제할 수 없습니다. 대표 카드 변경 뒤에 삭제해주세요."
          closetext="확인했습니다"
        ></StyledModal>
        <ShortButton
          content="대표카드 변경"
          color="white"
          width="145px"
          bordercolor="#CF9981"
          bgcolor="#AA6140"
          disabledcolor="#CF9981"
          disable={checkNumber == null ? true : false}
        ></ShortButton>
      </BottomButtonContainer>
    </>
  );
}

export default PaymentManagementFormContainer;
