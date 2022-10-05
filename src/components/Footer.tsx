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
    console.log(event);
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
                <Title>{data.title}</Title>
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
`;

let Container = styled.div`
  width: 82%;
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
export default Footer;
