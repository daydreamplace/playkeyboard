import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HiArrowLeft } from 'react-icons/hi';

const goBack = () => {
  const navigate = useNavigate();

  const goBackBtn = () => navigate('/');

  return (
    <Box>
      <ArrowLeft onClick={goBackBtn} />
    </Box>
  );
};

const Box = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #fff;

  @media screen and (min-width: 500px) {
    height: 60px;
  }
`;

const ArrowLeft = styled(HiArrowLeft)`
  width: 20px;
  height: 18px;

  @media screen and (min-width: 500px) {
    width: 30px;
    height: 25px;
  }
`;

export default goBack;
