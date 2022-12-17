import styled from "styled-components";
import CircleCheckBox from "../../components/common/CheckBox/CircleCheckBox/CircleCheckBox";
import { useState, useEffect } from "react";
import ShortButton from "../../components/common/Buttons/ShortButton/ShortButton";

const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 19px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

function PaymentManagementFormContainer() {
  const [isCheck, setIsCheck] = useState("");
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
      {cardList.map((card, index) => {
        console.log(isCheck);
        return (
          <CircleCheckBox
            key={index}
            name="check"
            value={index}
            onChange={(e) => handleChange(e)}
            content={card.cardNumber}
            isChecked={isCheck == index}
          ></CircleCheckBox>
        );
      })}
      <BottomButtonContainer>
        <ShortButton
          content="삭제"
          color="#C6C2BF"
          width="145px"
          bordercolor="#C6C2BF"
          bgcolor="#F6F5F5"
        ></ShortButton>
        <ShortButton
          content="대표카드 변경"
          color="white"
          width="145px"
          bordercolor="#CF9981"
          bgcolor="#CF9981"
        ></ShortButton>
      </BottomButtonContainer>
    </>
  );
}

export default PaymentManagementFormContainer;
