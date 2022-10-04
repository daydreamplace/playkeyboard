import styled from "styled-components";
import Nav from "../components/Nav";
import ThemeList from "../components/PageOne/ThemeList";

const Main = () => {
  return (
    <>
      <StyledTitle>
        <span>Play</span>keyboard
      </StyledTitle>
      <Nav />
      <ThemeList />
    </>
  );
};

const StyledTitle = styled.h1`
  span {
    color: red;
    font-weight: bold;
  }
`;

export default Main;
