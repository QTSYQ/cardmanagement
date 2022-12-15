import styled from "styled-components";
import Header from "../../components/common/Header/Header";
const Container = styled.div`
  width: 330px;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
