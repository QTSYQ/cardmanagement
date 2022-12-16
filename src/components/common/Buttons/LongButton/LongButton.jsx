import styled from "styled-components";
import { Link } from "react-router-dom";

function LongButton({
  plus,
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
    font-size: 16px;
    line-height: 150%;
    font-weight: 700;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px 16px;
      border-radius: 99px;
    }
    &:hover {
      /* cursor: pointer; */
    }
  `;

  return (
    <>
      <Button>
        <Link to={to}>
          {plus ? plus : null} {content}
        </Link>
      </Button>
    </>
  );
}

export default LongButton;
