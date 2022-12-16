import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import LongButton from "../../components/common/Buttons/LongButton/LongButton";
import CheckBox from "../../components/common/CheckBox/CheckBox";
import InputSection from "../../components/common/InputSection/InputSection";
import { theme } from "./../../theme";

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 99px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
`;
const countCard = (card) => {
  console.log(card, "계산중");
  return card.length;
};

function PaymentCardCreateContainer() {
  const [isCorporation, setIsCorporation] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumber, setIsCardNumber] = useState(true);
  const [cardDate, setCardDate] = useState("");
  const [isCardDateValid, setIsCardDateValid] = useState(true);
  const [birthday, setBirthday] = useState("");
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [cardPassword, setCardPassword] = useState("");
  const [iscardPasswordValid, setIsCardPasswordValid] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [cardList, setCardList] = useState([{}]);
  const id = useRef(0);

  const numberOfCard = useMemo(() => countCard(cardList), [cardList]);
  const onSubmit = (e) => {
    e.preventDefault();
    id.current += 1;
    setCardList([
      ...cardList,
      {
        id: id.current,
        cardNumber: cardNumber,
        cardDate: cardDate,
        birthday: birthday,
        cardPassword: cardPassword,
        isDefault: isDefault,
      },
    ]);
  };

  return (
    <>
      <form id="form" onSubmit={onSubmit}>
        <CheckBox content="법인카드 입니다" />
        <InputSection
          label="카드번호"
          placeholder="- 를 제외하고 입력해주세요"
          name="cardnumber"
          value={cardNumber}
          alertText=""
          maxLength={16}
          onChange={(event) => {
            const inputValue = event.currentTarget.value;
            setCardNumber(inputValue);
          }}
        />

        <InputSection
          label="카드유효기간"
          placeholder="MMYY(예:0122)"
          name="cardDate"
          value={cardDate}
          alertText=""
          onChange={(event) => {
            const inputValue = event.currentTarget.value;
            setCardDate(inputValue);
          }}
        />
        <InputSection
          label="생년월일"
          placeholder="YYMMDD(예:220101)"
          name="birthday"
          value={birthday}
          alertText=""
          onChange={(event) => {
            const inputValue = event.currentTarget.value;
            setBirthday(inputValue);
          }}
        />
        <InputSection
          label="카드 비밀번호 앞 두자리"
          placeholder="앞 두자리만 입력해주세요"
          name="cardPassword"
          value={cardPassword}
          type="password"
          alertText=""
          onChange={(event) => {
            const inputValue = event.currentTarget.value;
            setCardPassword(inputValue);
          }}
        />
        <CheckBox content="이 카드를 대표 결제수단으로 설정합니다" />
      </form>
      <Button type="submit" form="form">
        결제수단 추가하기
      </Button>
    </>
  );
}

export default PaymentCardCreateContainer;
