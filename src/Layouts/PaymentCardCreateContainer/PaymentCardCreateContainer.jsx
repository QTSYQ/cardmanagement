import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomLongButton from "../../components/common/Buttons/BottomLongButton/BottomLongButton";
import LongButton from "../../components/common/Buttons/LongButton/LongButton";
import SquareCheckBox from "../../components/common/CheckBox/SquareCheckBox/SquareCheckBox";
import InputSection from "../../components/common/Input/InputSection/InputSection";
import { theme } from "./../../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

// 버튼 컴포넌트로 옮길생각하기

// 유즈이펙트로 스토리지 붙이기
function PaymentCardCreateContainer() {
  const navigate = useNavigate();
  const [isCorporation, setIsCorporation] = useState(false);
  const [corporationNumber, setCorporationNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumber, setIsCardNumber] = useState(true);
  const [cardDate, setCardDate] = useState("");
  const [isCardDateValid, setIsCardDateValid] = useState(true);
  const [birthday, setBirthday] = useState("");
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [cardPassword, setCardPassword] = useState("");
  const [iscardPasswordValid, setIsCardPasswordValid] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [cardList, setCardList] = useState([]);
  const [submit, setSubmit] = useState(0);
  useEffect(() => {
    console.log(cardList, "처음 실행시 카드리스트1");
    const localCardList = localStorage.getItem("cardList");
    console.log(localCardList, JSON.parse(localCardList));
    setCardList(JSON.parse(localCardList));
    console.log(JSON.parse(localCardList), cardList, "처음 실행시 카드리스트2");
  }, []);

  useEffect(() => {
    if (!submit == 0) {
      localStorage.setItem("cardList", JSON.stringify(cardList));
      console.log(cardList, "if문 실행됨 재실행됨");
      navigate("/");
    }
  }, [submit]);

  const onSubmit = (e) => {
    console.log(cardList, "서밋될때 카드리스트");
    e.preventDefault();
    const localCardList = localStorage.getItem("cardList");
    console.log(localCardList, JSON.parse(localCardList), "서믿됨");
    setCardList(JSON.parse(localCardList));
    console.log(cardList, "서밋될때 카드리스트2");
    setCardList([
      ...cardList,
      {
        cardNumber: cardNumber,
        cardDate: cardDate,
        birthday: birthday,
        cardPassword: cardPassword,
        isDefault: isDefault,
      },
    ]);
    setSubmit(submit + 1);
    console.log(localCardList, "로컬스토리지");
    console.log(cardList, "카드리스트 넣음");
  };

  return (
    <>
      <Container>
        <form id="form" onSubmit={onSubmit}>
          <SquareCheckBox
            content="법인카드 입니다"
            isChecked={isCorporation}
            onChange={(event) => {
              setIsCorporation(!isCorporation);
              console.log(isCorporation);
            }}
          />
          <InputSection
            label="카드번호"
            placeholder="- 를 제외하고 입력해주세요"
            name="cardnumber"
            value={cardNumber}
            alertText=""
            maxLength={16}
            onChange={(event) => {
              setCardNumber(event.target.value);
            }}
          />

          <InputSection
            label="카드유효기간"
            placeholder="MMYY(예:0122)"
            name="cardDate"
            value={cardDate}
            alertText=""
            onChange={(event) => {
              setCardDate(event.target.value);
            }}
          />
          {isCorporation ? (
            <InputSection
              label="사업자번호"
              placeholder="YYMMDD(예:220101)"
              name="birthday"
              value={birthday}
              alertText=""
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            />
          ) : (
            <InputSection
              label="생년월일"
              placeholder="YYMMDD(예:220101)"
              name="birthday"
              value={birthday}
              alertText=""
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            />
          )}

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
          <SquareCheckBox
            content="이 카드를 대표 결제수단으로 설정합니다"
            isChecked={isDefault}
            onChange={(event) => {
              setIsDefault(!isDefault);
              console.log(isDefault);
            }}
          />
          <BottomLongButton
            type="submit"
            form="form"
            disabled={true}
            width="50"
          >
            {/* <Link to="/">결제수단 추가 하기</Link> */}
          </BottomLongButton>
        </form>
      </Container>
    </>
  );
}

export default PaymentCardCreateContainer;
