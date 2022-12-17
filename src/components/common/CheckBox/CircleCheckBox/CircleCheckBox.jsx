import styled from "styled-components";
import { BsRecordCircleFill, BsCircle } from "react-icons/bs";
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
function CircleCheckBox({ isChecked, content, onChange, name, value }) {
  return (
    <>
      <Container>
        <Label>
          <Input
            type="radio"
            onChange={onChange}
            name={name}
            value={value}
            checked={isChecked}
          />
          <Icon>
            {isChecked ? (
              <BsRecordCircleFill
                size={24}
                color="#AA6140"
              ></BsRecordCircleFill>
            ) : (
              <BsCircle size={24} color="#C6C2BF"></BsCircle>
            )}
          </Icon>
          <Content>{content}</Content>
        </Label>
      </Container>
    </>
  );
}

export default CircleCheckBox;
