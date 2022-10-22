import styled from "styled-components";

import StyledInput from "./Input";

const StyledButton = styled(StyledInput)`
  background-color: ${(props) => (props.disabled ? "#3a5987" : "#253956")};
  color: white;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

export default StyledButton;
