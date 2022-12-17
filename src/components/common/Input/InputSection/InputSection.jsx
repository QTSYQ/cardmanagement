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
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  padding: 12px 16px;
  color: ${(props) => props.theme.grayColor900};
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor300};
  &::placeholder {
    color: ${(props) => props.theme.grayColor700};
  }
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid ${(props) => props.theme.brownColor500};
    box-shadow: 0px 8px 16px rgba(170, 97, 64, 0.08);
  }
`;
const AlertText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 175%;
  padding: 4px 0px 0px 16px;
`;

function InputSection({
  label,
  placeholder,
  alertText,
  onChange,
  name,
  value,
  maxLength,
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
          />
        </InputContainer>
        <AlertText>{alertText}</AlertText>
      </Container>
    </>
  );
}

export default InputSection;
