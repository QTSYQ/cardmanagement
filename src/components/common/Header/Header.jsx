import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
  padding: 16px 0px;
  display: flex;
  align-items: center;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <GrClose
          size={20}
          color={"#7D766F"}
          onClick={() => {
            navigate(-1);
          }}
        ></GrClose>
      </HeaderContainer>
    </>
  );
}

export default Header;
