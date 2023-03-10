import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BottomLongButton from "../../../components/common/Buttons/BottomLongButton/BottomLongButton";
import SquareCheckBox from "../../../components/common/CheckBox/SquareCheckBox/SquareCheckBox";
import InputSection from "../../../components/common/Input/InputSection/InputSection";
import SnackBar from "../../../components/common/SnackBar/SnackBar";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 16px 16px;
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
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cardList")) || [];
  });
  const [submit, setSubmit] = useState(0);
  const snackbarRef = useRef(null);
  const date = new Date();
  const today = new Intl.DateTimeFormat("kr").format(date);
  const month = today[6] + today[7];
  const year = today[2] + today[3];
  useEffect(() => {
    const localCardList = localStorage.getItem("cardList");
    setCardList(JSON.parse(localCardList));
  }, []);

  useEffect(() => {}, [
    cardNumber,
    corporationNumber,
    cardPassword,
    birthday,
    cardDate,
  ]);

  useEffect(() => {
    if (!submit == 0) {
      const defaultCard = cardList[0];
      cardList.map((cards, index) => {
        if (cards.isDefault) {
          if (cards == defaultCard) {
          } else {
            cardList[0].isDefault = false;
            cardList[index] = cardList[0];
            cardList[0] = cards;
          }
        }
        cardList[0].isDefault = true;
      });
      localStorage.setItem("cardList", JSON.stringify(cardList));
      navigate("/");
    }
  }, [submit]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!checkCorporateRegiNumber(corporationNumber) && isCorporation) {
      snackbarRef.current.show();
      return 0;
    }
    if (!isValidCardNumber(cardNumber)) {
      snackbarRef.current.show();
      return 0;
    }
    if (year > cardDate.slice(2, 4)) {
      snackbarRef.current.show();
      return 0;
    } else if (year == cardDate.slice(2, 4)) {
      if (month > cardDate.slice(0, 2)) {
        snackbarRef.current.show();
        return 0;
      }
    }

    const cardDuplication = cardList.map((card) => {
      return card.cardNumber == cardNumber;
    });
    console.log(cardDuplication.includes(true));
    if (cardDuplication.includes(true)) {
      snackbarRef.current.show();
      return 0;
    }

    const localCardList = localStorage.getItem("cardList");
    setCardList(JSON.parse(localCardList));
    isCorporation
      ? setCardList([
          ...cardList,
          {
            cardNumber: cardNumber,
            cardDate: cardDate,
            cardPassword: cardPassword,
            isDefault: isDefault,
            isCorporation: isCorporation,
            corporationNumber: corporationNumber,
          },
        ])
      : setCardList([
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
  };

  function checkCorporateRegiNumber(number) {
    var numberMap = number
      .replace(/ /gi, "")
      .split("")
      .map(function (d) {
        return parseInt(d, 10);
      });
    if (numberMap.length == 10) {
      var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
      var chk = 0;
      keyArr.forEach(function (d, i) {
        chk += d * numberMap[i];
      });
      chk += parseInt((keyArr[8] * numberMap[8]) / 10, 10);
      return Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10;
    }
    return false;
  }

  const isValidCardNumber = (card) => {
    card.replace(/ /gi, "").split("");
    let cardNumberArray = card
      .replace(/ /gi, "")
      .split("")
      .map(function (d) {
        return parseInt(d, 16);
      });
    const lastNumber = Number(cardNumberArray.pop());
    cardNumberArray.reverse();
    cardNumberArray = cardNumberArray.map((num, idx) =>
      idx % 2 === 0 ? Number(num) * 2 : Number(num)
    );
    cardNumberArray = cardNumberArray.map((num) => (num > 9 ? num - 9 : num));
    let sum = cardNumberArray.reduce((acc, curr) => acc + curr, 0);
    sum += lastNumber;
    const modulo = sum % 10;
    return !modulo;
  };

  return (
    <>
      <Container>
        <form id="form" onSubmit={onSubmit}>
          <SquareCheckBox
            content="?????????????????????"
            isChecked={isCorporation}
            onChange={(event) => {
              setIsCorporation(!isCorporation);
            }}
          />
          <InputSection
            label="????????????"
            placeholder="- ??? ???????????? ??????????????????"
            name="cardnumber"
            value={cardNumber}
            alertText={
              isCardNumberValid ? null : "???????????? 16?????? ?????? ??????????????????"
            }
            maxLength={19}
            inputmode="numeric"
            classname={cardNumberClass}
            onChange={(event) => {
              const inputValue = event.target.value;
              const trimInputValue = event.target.value
                .replace(/[^0-9]/gi, "")
                .replace(/(.{4})/g, "$1 ")
                .trim();
              setCardNumberClass("isTyping");
              setCardNumber(trimInputValue);
              if (inputValue.length == 19) {
                setCardNumberClass("isValid");
                setIsCardNumberValid(true);
              } else {
                setIsCardNumberValid(false);
              }
              setCardNumber(trimInputValue);
            }}
            onBlur={(event) => {
              if (cardNumber.length < 19) {
                setIsCardNumberValid(false);
                setCardNumberClass("isWarning");
              }
            }}
          />
          <InputSection
            label="??????????????????"
            placeholder="MMYY(???:0122)"
            name="cardDate"
            value={cardDate}
            classname={cardDateClass}
            inputmode="numeric"
            alertText={
              isCardDateValid ? null : "???(MM)/???(YY)?????? 4????????? ??????????????????"
            }
            //1???????????? 0 1 2 , 2???????????? 0~9, ??????????????? 0~9, ??????????????? 0~9
            onChange={(event) => {
              const inputValue = event.target.value;
              const trimInputValue = event.target.value.replace(/[^0-9]/g, "");
              setCardDateClass("isTyping");
              setCardDate(trimInputValue);
              if (
                inputValue.length == 4 &&
                /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(inputValue)
              ) {
                setCardDateClass("isValid");
                setIsCardDateValid(true);
              } else if (inputValue.length < 4) {
                setCardDateClass("isTyping");
              } else {
                setCardDateClass("isWarning");
                setIsCardDateValid(false);
              }
              setCardDate(trimInputValue);
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
              label="???????????????"
              placeholder="-??? ???????????? ??????????????????"
              name="corporationnumber"
              inputmode="numeric"
              value={corporationNumber}
              classname={corporationNumberClass}
              alertText={isCorporation ? null : ""}
              onChange={(event) => {
                const inputValue = event.target.value;
                const trimInputValue = event.target.value
                  .replace(/[^0-9]/g, "")
                  .replace(/^(\d{0,3})(\d{0,2})(\d{0,5})$/g, "$1 $2 $3")
                  .trim();
                setCorporationNumberClass("isTyping");
                setCorporationNumber(trimInputValue);
                if (inputValue.length == 12) {
                  setCorporationNumberClass("isValid");
                  setIsCorporationNumberValid(true);
                } else {
                  setIsCorporationNumberValid(false);
                }
                setCorporationNumber(trimInputValue);
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
              label="????????????"
              placeholder="YYMMDD(???:220101)"
              name="birthday"
              value={birthday}
              inputmode="numeric"
              classname={birthdayClass}
              alertText={
                isBirthdayValid
                  ? null
                  : "???(YY)/???(MM)/???(DD)?????? 6????????? ??????????????????"
              }
              onChange={(event) => {
                const inputValue = event.target.value;
                const trimInputValue = event.target.value.replace(
                  /[^0-9]/g,
                  ""
                );
                setBirthdayClass("isTyping");
                setBirthday(trimInputValue);
                if (
                  inputValue.length == 6 &&
                  /^[0-9][0-9](0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(
                    inputValue
                  )
                ) {
                  setBirthdayClass("isValid");
                  setIsBirthdayValid(true);
                } else if (inputValue.length < 6) {
                  setBirthdayClass("isTyping");
                } else {
                  setBirthdayClass("isWarning");
                  setIsBirthdayValid(false);
                }
                setBirthday(trimInputValue);
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
            label="?????? ???????????? ??? ?????????"
            placeholder="??? ???????????? ??????????????????"
            name="cardPassword"
            value={cardPassword}
            classname={cardPasswordClass}
            type="password"
            alertText={
              isCardPasswordValid
                ? null
                : "?????? ???????????? ??? ???????????? ??????????????????"
            }
            onChange={(event) => {
              const inputValue = event.target.value;
              const trimInputValue = event.target.value
                .replace(/[^0-9]/gi, "")
                .trim();
              setCardPasswordClass("isTyping");
              setCardPassword(trimInputValue);
              if (inputValue.length == 2) {
                setCardPasswordClass("isValid");
                setIsCardPasswordValid(true);
              } else {
                setIsCardPasswordValid(false);
              }
              setCardPassword(trimInputValue);
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
            content="??? ????????? ?????? ?????????????????? ???????????????"
            isChecked={isDefault}
            onChange={(event) => {
              setIsDefault(!isDefault);
            }}
            paddingtop="16px"
          />
          {isCorporation ? (
            <BottomLongButton
              content="???????????? ????????????"
              type="submit"
              form="form"
              disabled={
                !isCardNumberValid ||
                !isCardPasswordValid ||
                !isCardDateValid ||
                !isCorporationNumberValid ||
                !cardNumber ||
                !cardPassword ||
                !cardDate ||
                !corporationNumber
              }
            ></BottomLongButton>
          ) : (
            <BottomLongButton
              content="???????????? ????????????"
              type="submit"
              form="form"
              disabled={
                !isCardNumberValid ||
                !isCardPasswordValid ||
                !isCardDateValid ||
                !isBirthdayValid ||
                !cardNumber ||
                !cardPassword ||
                !cardDate ||
                !birthday
              }
            ></BottomLongButton>
          )}
        </form>
        <SnackBar
          title="???????????? ??????"
          content="??????????????? ????????? ??? ????????????"
          ref={snackbarRef}
          color="#B63C34"
        ></SnackBar>
      </Container>
    </>
  );
}

export default PaymentCardCreateContainer;
