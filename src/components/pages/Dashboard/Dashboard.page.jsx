import { useState } from "react";

import styled from "styled-components";

import TopBarContainer from "../../templates/TopBarContainer";
import StyledButton from "../../atoms/Button";

const StyledBox = styled.div`
  background-color: ${(props) => (props.selected ? "red" : "white")};
  height: 50px;
  width: 50px;
  margin: 0.1em;
`;

const StyledRowContainer = styled.div`
  background-color: #000;
`;

const Container = styled.div`
  margin-top: 0.5em;
  margin-left: 0.5em;
  display: flex;
`;

const BOX_SIZE = 10;
const TOTAL_SIZE = [...Array(BOX_SIZE * BOX_SIZE - 1 + 1).keys()].map(
  (i) => i + 1
);

const DashboardPage = ({ onLogout = () => {} }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [isPrimaryColor, setIsPrimaryColor] = useState(false);

  const handleOnMouseDown = () => {
    setIsPrimaryColor(!isPrimaryColor);
    setMouseDown(true);
  };

  const handleOnMouseMove = (e) => {
    if (!mouseDown) {
      return;
    }

    if (isPrimaryColor) {
      e.target.style = "background-color: red;";
    } else {
      e.target.style = "background-color: white;";
    }
  };

  return (
    <>
      <TopBarContainer>
        <StyledButton onClick={onLogout} value="Logout" type="button" />
      </TopBarContainer>
      <Container>
        {TOTAL_SIZE.map((value, index) => (
          <StyledRowContainer key={`${value}-${index}`}>
            {value % BOX_SIZE === 0 &&
              Array.from(Array(BOX_SIZE).keys()).map((_value, _index) => (
                <StyledBox
                  key={`${_value}-${_index}`}
                  onMouseDown={handleOnMouseDown}
                  onMouseMove={handleOnMouseMove}
                  onMouseUp={() => setMouseDown(false)}
                />
              ))}
          </StyledRowContainer>
        ))}
      </Container>
    </>
  );
};

export default DashboardPage;
