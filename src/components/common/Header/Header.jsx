import { Link } from "react-router-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <>
      <HeaderContainer>
        <Link to={"/"}>
          <GrClose size={20} color={"#7D766F"}></GrClose>
        </Link>
      </HeaderContainer>
    </>
  );
}

export default Header;
