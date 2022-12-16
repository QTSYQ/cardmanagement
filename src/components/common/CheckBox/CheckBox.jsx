import { FaBalanceScaleLeft, FaCheckSquare } from "react-icons/fa";
import { FiSquare } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 175%;
  color: ${(props) => props.theme.grayColor900};
`;

const Input = styled.input``;
const Label = styled.label`
  cursor: pointer;
`;
function CheckBox({ content, ischecked, onclick }) {
  return (
    <>
      <Container>
        <Label>
          <Input type="checkbox" value={ischecked ? true : false} />
          <FiSquare size={25} color={"#C6C2BF"} />
          <FaCheckSquare size={24} color={"#AA6140"} />
          <Content>{content}</Content>
        </Label>
      </Container>
    </>
  );
}

export default CheckBox;
