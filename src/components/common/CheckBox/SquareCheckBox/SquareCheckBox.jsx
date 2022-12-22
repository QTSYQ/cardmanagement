import { FaCheckSquare } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
  padding-left: 8px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  display: flex;
  cursor: pointer;
`;
function CheckBox({ content, isChecked, onChange, paddingtop }) {
  return (
    <>
      <Container style={{ paddingTop: paddingtop }}>
        <Label>
          <Input type="checkbox" onChange={onChange} />
          <Icon>
            {isChecked ? (
              <FaCheckSquare size={24} color={"#AA6140"} />
            ) : (
              <FiSquare size={24} color={"#C6C2BF"} />
            )}
          </Icon>
          <Content>{content}</Content>
        </Label>
      </Container>
    </>
  );
}

export default CheckBox;
