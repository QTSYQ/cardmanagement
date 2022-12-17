import styled from "styled-components";
function ShortButton({
  children,
  width,
  color,
  bgcolor,
  onClick,
  content,
  bordercolor,
}) {
  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => width};
    gap: 8px;
    color: ${(props) => color};
    background-color: ${(props) => bgcolor};
    border: 1px solid ${(props) => bordercolor};
    border-radius: 99px;
    font-size: 16px;
    line-height: 150%;
    font-weight: 700;
    font-family: "Pretendard-Regaular";
    padding: 12px 0px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      background-color: ${(props) => props.theme.brownColor300};
      border: 1px solid ${(props) => props.theme.brownColor300};
    }
  `;
  return (
    <>
      <Button>{content}</Button>
    </>
  );
}

export default ShortButton;
