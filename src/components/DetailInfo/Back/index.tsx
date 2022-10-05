import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HiArrowLeft } from 'react-icons/hi';

const Back = () => {
  const navigate = useNavigate();

  const goBack = () => navigate('/');

  return (
    <Box>
      <ArrowLeft onClick={goBack} />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const ArrowLeft = styled(HiArrowLeft)`
  width: 20px;
  height: 18px;
`;

export default Back;