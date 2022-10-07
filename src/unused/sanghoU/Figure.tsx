import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface FigureProps {
  figureData: {
    keyword: string;
    text: string;
    imageUrl: string;
  }[];
}

const List = ({ figureData }: FigureProps) => {
  return (
    <Div>
      <AD>AD</AD>
      {figureData.length > 0 && (
        <>
          <CardList>
            {figureData.map(figure => (
              <img key={figure.imageUrl} src={figure.imageUrl} alt={figure.keyword} />
            ))}
          </CardList>
          <Text>
            일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는 이모티콘으로 전송될 수 있어요.
            <Question to=''>이모티콘은 어떻게 전송하나요?</Question>
          </Text>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  max-width: 600px;
  padding: 0 16px;
  margin: 0 auto;
`;

const AD = styled.button`
  width: 100%;
  min-height: 30px;
  height: 4vh;
  margin: 10px 0;
  border: none;
  background: #d9d9d9;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const CardList = styled.div`
  img {
    width: 30%;
    margin: 0 calc(10% / 6);

    @media screen and (max-width: 500px) {
      width: 45%;
      margin: 0 calc(10% / 4);
    }
  }
`;

const Text = styled.p`
  display: block;
  width: 77%;
  margin: 40px auto 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: #919299;
`;

const Question = styled(Link)`
  display: block;
  color: #4b4e57;
  text-decoration: underline;
  margin-top: 5px;
`;

export default List;
