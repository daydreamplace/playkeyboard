import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { ThemeDetailRes, ThemeDetail } from '../../interface';

import GoBack from './GoBack';
import Info from './Info';
import Bottom from './Bottom';
import NotFound from '../NotFound';
import styled from 'styled-components';

const DetailInfo = () => {
  const [detailData, setDetailData] = useState<ThemeDetail>();
  const [priceData, setPriceData] = useState(0);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<ThemeDetailRes>(`https://api.plkey.app${location.pathname}`);
      setDetailData(data.data);
      setPriceData(data.data.price);
    })();
  }, []);

  return (
    <DetailBox>
      <GoBack />
      <Box>
        {detailData ? <Info detailData={detailData} /> : <NotFound />}
        <Bottom priceData={priceData} />
      </Box>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: calc(100% - 32px);
  margin: 57px auto 0 auto;
  /* margin: 0 calc((100% - (100% - 32px))/2); */

  @media screen and (min-width: 500px) {
    margin: 67px auto 0 auto;
  }
`;

export default DetailInfo;
