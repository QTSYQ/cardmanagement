import styled from "styled-components";
function ShortButton({
  children,
  width,
  color,
  bgcolor,
  onClick,
  content,
  bordercolor,
  disabledcolor,
  disabledbgcolor,
  disable,
  closetext,
  modalcontent,
}) {
  const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width};
    gap: 8px;
    color: ${color};
    background-color: ${bgcolor};
    border: 1px solid ${bordercolor};
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
      background-color: ${disabledbgcolor};
      color: ${disabledcolor};
    }
  `;
  return (
    <>
      <Button disabled={disable} onClick={onClick}>
        {content}
      </Button>
    </>
  );
}

export default ShortButton;
