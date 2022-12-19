import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
  padding: 16px 16px;
  display: flex;
  align-items: center;
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <HeaderContainer>
        {location.pathname == "/" ? null : (
          <GrClose
            size={16}
            color={"#7D766F"}
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
      </HeaderContainer>
    </>
  );
}

export default Header;
