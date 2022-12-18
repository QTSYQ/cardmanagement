import styled from "styled-components";
const Button = styled.button`
  position: fixed;
  bottom: 16px;
  width: 298px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.brownColor500};
  color: white;
  border: 1px solid ${(props) => props.theme.brownColor500};
  border-radius: 99px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
  font-family: "Pretendard-Regaular";
  padding: 12px 16px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${(props) => props.theme.brownColor300};
    border: 1px solid ${(props) => props.theme.brownColor300};
  }
`;

function BottomLongButton({ children, content, disabled }) {
  return (
    <>
      <Button disabled={disabled}>{content}</Button>
    </>
  );
}

export default BottomLongButton;
