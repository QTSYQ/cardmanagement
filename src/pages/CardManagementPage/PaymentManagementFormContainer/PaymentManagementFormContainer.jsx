import styled from "styled-components";
import { useState, useEffect } from "react";
import CircleCheckBox from "./../../../components/common/CheckBox/CircleCheckBox/CircleCheckBox";
import CardInfo from "../../../components/common/CardInfo/CardInfo";
import StyledModal from "./../../../components/common/Modal/StyledModal/StyledModal";
import ShortButton from "./../../../components/common/Buttons/ShortButton/ShortButton";

const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 16px;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
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
  background-color: white;
  height: 100vh;
`;

function PaymentManagementFormContainer() {
  const [cardList, setCardList] = useState(
    JSON.parse(localStorage.getItem("cardList"))
  );
  const [checkNumber, setIsCheckNumber] = useState(null);
  const [modalButtonDisable, setModalButtonDisable] = useState(true);
  const [isCardDeleteValid, setIsCardDeleteValid] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    if (checkNumber == 0) {
      setIsCardDeleteValid(false);
      setButtonDisable(true);
    } else if (checkNumber == null) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
      setIsCardDeleteValid(true);
    }
  }, [checkNumber, isCardDeleteValid, cardList]);

  const handleChange = (e) => {
    setIsCheckNumber(e.target.value);
    setModalButtonDisable(false);
  };

  function deleteCard() {
    cardList.splice(checkNumber, 1);
    localStorage.setItem("cardList", JSON.stringify(cardList));
    setCardList(JSON.parse(localStorage.getItem("cardList")));
  }

  function isDefaultCardChange() {
    const selectCard = cardList[checkNumber];
    const defaultCard = cardList[0];
    cardList[0] = selectCard;
    cardList[checkNumber] = defaultCard;
    cardList[0].isDefault = true;
    cardList[checkNumber].isDefault = false;
    localStorage.setItem("cardList", JSON.stringify(cardList));
    setCardList(JSON.parse(localStorage.getItem("cardList")));
  }

  return (
    <>
      <Container>
        {cardList.map((card, index) => {
          return (
            <CardContainer key={index}>
              <CircleCheckBox
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
        {isCardDeleteValid ? (
          <StyledModal
            modaltitle="카드 삭제"
            modalcontent="결제수단을 삭제하시겠어요?"
            closetext="취소"
            content="삭제"
            color="#625C57"
            bgcolor="#FFFFFF"
            bordercolor="#C6C2BF"
            disabledcolor="#C6C2BF"
            disabledbgcolor="#F6F5F5"
            width="145px"
            closemodalwidth="266px"
            modalbuttondisable={modalButtonDisable}
            deletebutton={true}
            onClick={deleteCard}
          ></StyledModal>
        ) : (
          <StyledModal
            modaltitle="삭제할 수 없는 카드입니다"
            modalcontent="대표 카드는 삭제할 수 없습니다. 대표 카드 변경 뒤에 삭제해주세요."
            closetext="확인했습니다"
            content="삭제"
            color="#625C57"
            bgcolor="#FFFFFF"
            bordercolor="#C6C2BF"
            disabledcolor="#C6C2BF"
            disabledbgcolor="#F6F5F5"
            width="145px"
            closemodalwidth="266px"
            modalbuttondisable={modalButtonDisable}
            deletebutton={false}
          ></StyledModal>
        )}
        <ShortButton
          content="대표카드 변경"
          width="145px"
          color="white"
          bordercolor="#CF9981"
          bgcolor="#AA6140"
          disabledcolor="white"
          disabledbgcolor="#CF9981"
          disable={buttonDisable}
          onClick={isDefaultCardChange}
        ></ShortButton>
      </BottomButtonContainer>
    </>
  );
}

export default PaymentManagementFormContainer;
