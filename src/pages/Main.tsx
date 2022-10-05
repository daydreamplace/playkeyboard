import styled from 'styled-components';
import Nav from '../components/Nav';

const Main = () => {
  return (
    <>
      <StyledTitle>
        <span>Play</span>keyboard 😊😍😉🤣
      </StyledTitle>
      <Nav />
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
