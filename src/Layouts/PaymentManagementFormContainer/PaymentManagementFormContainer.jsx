import styled from "styled-components";
import CircleCheckBox from "../../components/common/CheckBox/CircleCheckBox/CircleCheckBox";
import { useState, useEffect } from "react";
import ShortButton from "../../components/common/Buttons/ShortButton/ShortButton";
import CardInfo from "./../../components/common/CardInfo/CardInfo";
import SnackBar from "../../components/common/SnackBar/SnackBar";

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
        <ShortButton
          content="삭제"
          color="#625C57"
          width="145px"
          bordercolor="#C6C2BF"
          bgcolor="#FFFFFF"
          disabledcolor="#C6C2BF"
          disabledbgcolor="#F6F5F5"
          //   disable={checkNumber == null ? true : false}
          onClick={() => {
            //체크넘버가 같으면 실패 모달창 띄우기
            console.log("실패 모달창");
            setFailedModalOpen(true);
            // 체크넘버가 다르면 확인 모달창 띄우기
          }}
        ></ShortButton>
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
