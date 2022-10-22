import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.3em;
  border: 1px solid #457b9d;
  border-radius: 0.3em;
  margin-right: 0.2em;
  background-color: ${(props) => (props.disabled ? "#f1faee" : "white")};
`;

export default StyledInput;
