import styled from "styled-components";

import TopBarContainer from "../../templates/TopBarContainer";
import StyledButton from "../../atoms/Button";

const StyledBox = styled.div`
  background-color: white;
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
                  onwheel={() => console.log(1)}
                />
              ))}
          </StyledRowContainer>
        ))}
      </Container>
    </>
  );
};

export default DashboardPage;
