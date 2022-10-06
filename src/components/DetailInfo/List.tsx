import styled from 'styled-components';

import { ThemeDetail } from '../../interface';

interface ListProps {
  listData: ThemeDetail;
}

const List = ({ listData }: ListProps) => {
  const { figure } = listData;

  return (
    <>
      <Ad>AD</Ad>
      <CardList>
        {figure.map(fig => (
          <li key={fig.text}>
            <img src={fig.imageUrl} />
          </li>
        ))}
      </CardList>
      <Explain>
        <p>일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는</p>
        <p>이모티콘으로 전송될 수 있어요.</p>
        <p>이모티콘은 어떻게 전송하나요?</p>
      </Explain>
    </>
  );
};
const Ad = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
  margin: 20px 10px;
  background-color: #d9d9d9;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;

  li {
    width: calc(35% - 10px);
  }

  img {
    width: 100%;
    cursor: pointer;
  }

  @media screen and (min-width: 500px) {
    width: calc(25%);
  }
`;

const Explain = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #919299;
  font-size: 15px;
  padding: 20px;
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
