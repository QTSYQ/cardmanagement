import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
function LongButton({
  plusicon,
  content,
  color,
  bgcolor,
  to,
  onClickHandler,
  type,
  onSubmit,
}) {
  const Button = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: white;
    color: ${color};
    border: 1px solid ${color};
    border-radius: 99px;
    font-weight: 700;
    a {
      line-height: 150%;
      font-family: "Pretendard-Regaular";
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      padding: 12px 16px;
      border-radius: 99px;
      gap: 8px;
    }
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      <Button>
        <Link to={to}>
          {plusicon ? <FiPlus size={21} /> : null} {content}
        </Link>
      </Button>
    </>
  );
}

export default LongButton;
