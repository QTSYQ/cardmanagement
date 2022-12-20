import styled from "styled-components";
import Header from "../../components/common/Header/Header";
const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.grayColor100};
  display: flex;
  flex-direction: column;
  padding: 0px 0px;
  position: relative;
`;

function MainContainer({ children }) {
  return (
    <Container>
      <Header></Header>
      {children}
    </Container>
  );
}

export default MainContainer;
