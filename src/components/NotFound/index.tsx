import styled from 'styled-components';

import notFound from '../../assets/notfound/404.png';

const NotFound = () => {
  return (
    <Container>
      <Img src={notFound} alt='404 Not Found' />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 40px);
`;

const Img = styled.img`
  width: 100%;
  margin: auto 0;
`;

export default NotFound;
