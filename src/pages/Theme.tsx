import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Theme = () => {
  const { id } = useParams();

  return (
    <StyledSection>
      <ul className='emoji-box'>
        <li>
          <img alt='맘에들어요' src='/images/😊.png' />
          <div>맘에들어요</div>
          <div>0</div>
        </li>
      </ul>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding-top: 30px;
`;

export default Theme;
