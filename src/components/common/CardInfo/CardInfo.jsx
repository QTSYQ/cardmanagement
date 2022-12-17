import styled from "styled-components";

function CardInfo({ content, bgcolor, color }) {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    background-color: ${bgcolor};
    color: ${color};
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    line-height: 150%;
    padding: 4px 8px;
  `;
  return (
    <>
      <Container>{content}</Container>
    </>
  );
}

export default CardInfo;
