import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background-color: #e99393;
  padding: 0.5em;
  margin: 0.5em 0;
  border-radius: 3px;
`;

const Text = styled.p`
  color: white;
  font-size: 12px;
`;

const ErrorMessage = ({ message }) => (
  <Container>
    <Text>{message}</Text>
  </Container>
);

export default ErrorMessage;
