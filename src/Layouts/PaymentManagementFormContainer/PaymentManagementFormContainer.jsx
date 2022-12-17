import styled from "styled-components";
import CircleCheckBox from "../../components/common/CheckBox/CircleCheckBox/CircleCheckBox";
import { useState, useEffect } from "react";
import ShortButton from "../../components/common/Buttons/ShortButton/ShortButton";
import CardInfo from "./../../components/common/CardInfo/CardInfo";
const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 19px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
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
`;

function PaymentManagementFormContainer() {
  const [isCheck, setIsCheck] = useState(null);
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList")) || [];
  });
  useEffect(() => {
    // 선택한 value 확인하기
    console.log("체크확인", isCheck);
  }, [isCheck]);
  const handleChange = (e) => {
    // setIsCheck(!isCheck);
    console.log(e.target.value);
    setIsCheck(e.target.value);
  };

  return (
    <>
      <Container>
        {cardList.map((card, index) => {
          console.log(isCheck);
          return (
            <CardContainer>
              <CircleCheckBox
                key={index}
                name="check"
                value={index}
                onChange={(e) => handleChange(e)}
                content={card.cardNumber}
                isChecked={isCheck == index}
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
        <ShortButton
          content="삭제"
          color="#625C57"
          width="145px"
          bordercolor="#C6C2BF"
          bgcolor="#FFFFFF"
          disabledcolor="#C6C2BF"
          disabledbgcolor="#F6F5F5"
        ></ShortButton>
        <ShortButton
          content="대표카드 변경"
          color="white"
          width="145px"
          bordercolor="#CF9981"
          bgcolor="#AA6140"
          disabledcolor="#CF9981"
        ></ShortButton>
      </BottomButtonContainer>
    </>
  );
}

export default PaymentManagementFormContainer;
