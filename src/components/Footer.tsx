import axios from 'axios';
import { MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import charge from '../assets/images/Footer/ic_nav_charge_disabled.png';
import { FooterInfo, FooterRes } from '../interface';

const Footer = () => {
  const [footer, setFooter] = useState<FooterInfo[]>();
  const [iconNumber, setIconNumber] = useState(2);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<FooterRes>('/Data/Footer.json');
      setFooter(data.data);
    })();
  }, []);

  const handleOnClick = (event: number) => {
    setIconNumber(event);
  };

  return (
    <Wrapper>
      <Container>
        {footer &&
          footer.map((data, i) => {
            return (
              <Box
                key={i}
                onClick={() => {
                  handleOnClick(data.id);
                }}
              >
                {iconNumber === data.id ? <img src={data.imgUrl}></img> : <img src={data.disabled_imgUrl}></img>}
                {iconNumber === data.id ? <ColoredTitle>{data.title}</ColoredTitle> : <Title>{data.title}</Title>}
              </Box>
            );
          })}
      </Container>
    </Wrapper>
  );
};

let Wrapper = styled.div`
  width: 100%;
  padding-top: 7px;
  box-shadow: 0px -1px 4px 0px rgb(0 0 0 / 8%);
  position: fixed;
  bottom: 0px;
  background-color: #fff;
`;

let Container = styled.div`
  width: 82%;
  padding: 7px 16px 0 16px;
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

let Box = styled.div`
  text-align: center;
  padding-bottom: 7px;
`;

let Title = styled.div`
  margin-top: 3.95px;
  font-size: 10px;
  color: #919299;
`;

let ColoredTitle = styled.div`
  margin-top: 3.95px;
  font-size: 10px;
  color: #ff1c7c;
`;
export default Footer;
