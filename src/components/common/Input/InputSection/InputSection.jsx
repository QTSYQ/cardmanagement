import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
const Label = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  font-family: "Pretendard-Regaular";
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  padding: 12px 16px;
  color: ${(props) => props.theme.grayColor900};
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor300};
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.grayColor700};
  }

  &:focus-visible {
    border-bottom: 1px solid ${(props) => props.theme.grayColor300};
  }

  &.isTyping {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.brownColor500};
    &:focus-visible {
      border-bottom: 1px solid ${(props) => props.theme.brownColor500};
      outline: none;
      box-shadow: 0px 8px 16px rgba(170, 97, 64, 0.08);
    }
  }

  &.isWarning {
    border-bottom: 1px solid ${(props) => props.theme.errorColor500};

    &:focus-visible {
      outline: none;
      box-shadow: 0px 8px 16px rgba(170, 97, 64, 0.08);
    }
  }

  &.isValid {
    border-bottom: 1px solid ${(props) => props.theme.succesColor500};
    &:focus-visible {
      border-bottom: 1px solid ${(props) => props.theme.succesColor500};
      outline: none;
      box-shadow: 0px 8px 16px rgba(170, 97, 64, 0.08);
    }
  }
`;
const AlertText = styled.div`
  font-family: "Pretendard-Regaular";
  font-weight: 400;
  font-size: 12px;
  line-height: 175%;
  padding: 0px 0px 0px 16px;
  color: ${(props) => props.theme.grayColor700};
  &.isTyping {
    color: ${(props) => props.theme.brownColor500};
  }

  &.isWarning {
    color: ${(props) => props.theme.errorColor500};
  }

  &.isValid {
    color: ${(props) => props.theme.succesColor500};
  }
`;
function InputSection({
  label,
  placeholder,
  alertText,
  onChange,
  name,
  value,
  maxLength,
  type,
  color,
  onBlur,
  classname,
  ...props
}) {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <InputContainer>
          <Input
            value={value}
            maxLength={maxLength}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            onBlur={onBlur}
            color={color}
            className={classname}
          />
          {alertText ? (
            <AlertText className={classname}>{alertText}</AlertText>
          ) : (
            <></>
          )}
        </InputContainer>
      </Container>
    </>
  );
}

export default InputSection;
