import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Theme = () => {
  const { id } = useParams();

  const emojiArr = [
    {
      id: 1,
      emojiImg: '../../asset/images/emoji/😊.png',
      title: '맘에들어요',
      count: 0,
    },
    {
      id: 2,
      emojiImg: '../../asset/images/emoji/😍.png',
      title: '심쿵했어요',
      count: 0,
    },
    {
      id: 3,
      emojiImg: '../../asset/images/emoji/😉.png',
      title: '응원해요',
      count: 0,
    },
    {
      id: 4,
      emojiImg: '../../asset/images/emoji/🤣.png',
      title: '갖고싶어요',
      count: 0,
    },
  ];

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
