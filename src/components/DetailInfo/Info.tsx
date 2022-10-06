import styled from 'styled-components';

import { ThemeDetail } from '../../interface';

import { FiShare } from 'react-icons/fi';

interface TitleProps {
  detailData: ThemeDetail;
}

const Info = ({ detailData }: TitleProps) => {
  const { imageUrl, name, creator, hashtag } = detailData;

  return (
    <>
      <Img src={imageUrl} alt={name} />
      <Name>
        <h1>{name}</h1>
        <Share />
      </Name>
      <Creater>{creator}</Creater>
      {hashtag.map(tag => (
        <HashTag key={tag}>{tag}</HashTag>
      ))}
    </>
  );
};

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 7px #9f9f9f;
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  h1 {
    font-size: 15px;
    font-weight: 700;
    line-height: 28px;
    color: #42444c;

    @media screen and (min-width: 500px) {
      font-size: 24px;
    }
  }
`;

const Share = styled(FiShare)`
  width: 18px;
  height: 18px;
  color: #919299;

  @media screen and (min-width: 500px) {
    width: 30px;
    height: 25px;
  }
`;

const Creater = styled.p`
  margin: 3px 0 17px;
  font-size: 12px;
  font-weight: 500;
  color: #919299;

  @media screen and (min-width: 500px) {
    font-size: 18px;
    margin: 8px 0 17px;
  }
`;

const HashTag = styled.span`
  display: inline-block;
  height: 28px;
  margin: 0 5px 10px 0;
  border-radius: 18px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #4b4e57;
  background: #ebedf5;
`;

export default Info;
