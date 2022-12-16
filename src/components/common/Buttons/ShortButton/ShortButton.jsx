import styled from "styled-components";

export const ShortButton = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  background-color: white;
  border: 1px solid ${(props) => props.theme.brownColor500};
  border-radius: 99px;
`;
