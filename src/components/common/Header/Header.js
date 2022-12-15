import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor150};
`;

function Header() {
  return (
    <>
      <HeaderContainer></HeaderContainer>
    </>
  );
}

export default Header;
