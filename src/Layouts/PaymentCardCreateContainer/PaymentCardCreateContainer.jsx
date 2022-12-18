import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomLongButton from "../../components/common/Buttons/BottomLongButton/BottomLongButton";
import LongButton from "../../components/common/Buttons/LongButton/LongButton";
import SquareCheckBox from "../../components/common/CheckBox/SquareCheckBox/SquareCheckBox";
import InputSection from "../../components/common/Input/InputSection/InputSection";
import SnackBar from "../../components/common/SnackBar/SnackBar";
import { theme } from "./../../theme";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

function PaymentCardCreateContainer() {
  const navigate = useNavigate();
  const [isCorporation, setIsCorporation] = useState(false);
  const [corporationNumber, setCorporationNumber] = useState("");
  const [corporationNumberClass, setCorporationNumberClass] = useState("");
  const [isCorporationNumberValid, setIsCorporationNumberValid] =
    useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [cardNumberClass, setCardNumberClass] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [isCardDateValid, setIsCardDateValid] = useState(true);
  const [cardDateClass, setCardDateClass] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isBirthdayValid, setIsBirthdayValid] = useState(true);
  const [birthdayClass, setBirthdayClass] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [isCardPasswordValid, setIsCardPasswordValid] = useState(true);
  const [cardPasswordClass, setCardPasswordClass] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [submit, setSubmit] = useState(0);
  useEffect(() => {
    console.log(cardList, "처음 실행시 카드리스트1");
    const localCardList = localStorage.getItem("cardList");
    console.log(localCardList, JSON.parse(localCardList));
    setCardList(JSON.parse(localCardList));
    console.log(JSON.parse(localCardList), cardList, "처음 실행시 카드리스트2");
  }, []);

  useEffect(() => {});

  useEffect(() => {
    if (!submit == 0) {
      localStorage.setItem("cardList", JSON.stringify(cardList));
      console.log(cardList, "if문 실행됨 재실행됨");
      navigate(-1);
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
        isCorporation: isCorporation,
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
            content="법인카드입니다"
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
            alertText={
              isCardNumberValid ? null : "카드번호 16자리 전부 입력해주세요"
            }
            maxLength={19}
            inputmode="numeric"
            classname={cardNumberClass}
            onChange={(event) => {
              const inputValue = event.target.value;
              const triminputValue = event.target.value
                .replace(/[^0-9]/gi, "")
                .replace(/(.{4})/g, "$1 ")
                .trim();
              setCardNumberClass("isTyping");
              setCardNumber(triminputValue);
              if (inputValue.length == 19) {
                setCardNumberClass("isValid");
                setIsCardNumberValid(true);
              } else {
                setIsCardNumberValid(false);
              }
              setCardNumber(triminputValue);
            }}
            onBlur={(event) => {
              if (cardNumber.length < 19) {
                setIsCardNumberValid(false);
                setCardNumberClass("isWarning");
              }
            }}
          />
          <InputSection
            label="카드유효기간"
            placeholder="MMYY(예:0122)"
            name="cardDate"
            value={cardDate}
            classname={cardDateClass}
            inputmode="numeric"
            alertText={
              isCardDateValid ? null : "월(MM)/연(YY)으로 4자리를 입력해주세요"
            }
            //1번째자리 0 1 2 , 2번째자리 0~9, 세번째자리 0~9, 네번재자리 0~9
            onChange={(event) => {
              const inputValue = event.target.value;
              const triminputValue = event.target.value
                .replace(/[^0-9]/g, "")
                .replace(/^([2-9])$/g, "0$1")
                .replace(/^(1{1})([3-9]{1})$/g, "0$1$2")
                .replace(/^0{1,}/g, "0")
                .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1$2");
              setCardDateClass("isTyping");
              setCardDate(triminputValue);
              if (inputValue.length == 4) {
                setCardDateClass("isValid");
                setIsCardDateValid(true);
              } else {
                setIsCardDateValid(false);
              }
              setCardDate(triminputValue);
            }}
            onBlur={(event) => {
              if (cardDate.length < 4) {
                setIsCardDateValid(false);
                setCardDateClass("isWarning");
              }
            }}
            maxLength={4}
          />
          {isCorporation ? (
            <InputSection
              label="사업자번호"
              placeholder="-를 제외하고 입력해주세요"
              name="corporationnumber"
              inputmode="numeric"
              value={corporationNumber}
              classname={corporationNumberClass}
              alertText={isCorporation ? null : ""}
              onChange={(event) => {
                const inputValue = event.target.value;
                const triminputValue = event.target.value
                  .replace(/[^0-9]/g, "")
                  .replace(/^(\d{0,3})(\d{0,2})(\d{0,5})$/g, "$1 $2 $3");
                setCorporationNumberClass("isTyping");
                setCorporationNumber(triminputValue);
                if (inputValue.length == 12) {
                  setCorporationNumberClass("isValid");
                  setIsCorporationNumberValid(true);
                } else {
                  setIsCorporationNumberValid(false);
                }
                setCorporationNumber(triminputValue);
              }}
              onBlur={(event) => {
                if (corporationNumber.length < 12) {
                  setIsCorporationNumberValid(false);
                  setCorporationNumberClass("isWarning");
                }
              }}
              maxLength={12}
            />
          ) : (
            <InputSection
              label="생년월일"
              placeholder="YYMMDD(예:220101)"
              name="birthday"
              value={birthday}
              inputmode="numeric"
              classname={birthdayClass}
              alertText={
                isBirthdayValid
                  ? null
                  : "연(YY)/월(MM)/일(DD)으로 6자리를 입력해주세요"
              }
              onChange={(event) => {
                const inputValue = event.target.value;
                const triminputValue = event.target.value

                  // 첫번째, 두번째는 0~9 와도됨,
                  //세번째 0~1 와야됨, 네번째는 0~9인데 세번째에 1나오면 3나오면 안됨,
                  //다섯번째는 0~3, 세번째는 0~9인데 다섯번째 3일때 2오면 안됨
                  .replace(/[^0-9]/g, "");
                setBirthdayClass("isTyping");
                setBirthday(triminputValue);
                if (inputValue.length == 6) {
                  setBirthdayClass("isValid");
                  setIsBirthdayValid(true);
                } else {
                  setIsBirthdayValid(false);
                }
                setBirthday(triminputValue);
              }}
              onBlur={(event) => {
                if (birthday.length < 6) {
                  setIsBirthdayValid(false);
                  setBirthdayClass("isWarning");
                }
              }}
              maxLength={6}
            />
          )}
          <InputSection
            label="카드 비밀번호 앞 두자리"
            placeholder="앞 두자리만 입력해주세요"
            name="cardPassword"
            value={cardPassword}
            classname={cardPasswordClass}
            type="password"
            alertText={
              isCardPasswordValid
                ? null
                : "카드 비밀번호 앞 두자리를 입력해주세요"
            }
            onChange={(event) => {
              const inputValue = event.target.value;
              const triminputValue = event.target.value
                .replace(/[^0-9]/gi, "")
                .trim();
              setCardPasswordClass("isTyping");
              setCardPassword(triminputValue);
              if (inputValue.length == 2) {
                setCardPasswordClass("isValid");
                setIsCardPasswordValid(true);
              } else {
                setIsCardPasswordValid(false);
              }
              setCardPassword(triminputValue);
            }}
            onBlur={(event) => {
              if (cardPassword.length < 2) {
                setIsCardPasswordValid(false);
                setCardPasswordClass("isWarning");
              }
            }}
            maxLength={2}
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
            content="결제수단 추가하기"
            type="submit"
            form="form"
            disabled={
              !isCardNumberValid ||
              !isCardPasswordValid ||
              !cardDate ||
              !birthday
            }
          >
            {/* <Link to="/">결제수단 추가 하기</Link> */}
          </BottomLongButton>
        </form>
        <SnackBar
          title="카드정보 오류"
          content="결제수단을 추가할 수 없습니다"
        ></SnackBar>
      </Container>
    </>
  );
}

export default PaymentCardCreateContainer;
