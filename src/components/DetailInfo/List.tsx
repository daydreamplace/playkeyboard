import styled from 'styled-components';

import { ThemeDetail } from '../../interface';

interface FigureProps {
  figureData: {
    keyword: string;
    text: string;
    imageUrl: string;
  }[];
}

const List = ({ figureData }: FigureProps) => {
  return (
    <Wrapper>
      <Ad>AD</Ad>
      <CardList>
        {figureData.map(fig => (
          <li key={fig.keyword}>
            <img src={fig.imageUrl} />
          </li>
        ))}
      </CardList>
      <Explain>
        <p>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는</p>
        <p>이모티콘으로 전송될 수 있어요.</p>
        <p>이모티콘은 어떻게 전송하나요?</p>
      </Explain>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Ad = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 20px;
  background-color: #d9d9d9;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;

  li {
    width: calc(50%);
  }

  @media (min-width: 500px) {
    li {
      width: calc(100% / 3);
    }
  }

  img {
    width: 100%;
    cursor: pointer;
  }
`;

const Explain = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #919299;
  font-size: 15px;
  padding: 20px;
  margin-top: 30px;
  line-height: 180%;

  p {
    &:last-child {
      text-decoration: underline;
      cursor: pointer;
      line-height: 250%;
      color: #4b4e57;
    }
  }
`;

export default List;
