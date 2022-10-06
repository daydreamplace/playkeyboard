import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { ThemeDetailRes, ThemeDetail } from '../../interface';

import GoBack from './GoBack';
import Info from './Info';
import Bottom from './Bottom';
import NotFound from '../NotFound';
import styled from 'styled-components';
import DetailSkeleton from './DetailSkeleton';

const DetailInfo = () => {
  const [detailData, setDetailData] = useState<ThemeDetail>();
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<ThemeDetailRes>(`https://api.plkey.app${location.pathname}`);
        setDetailData(data.data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return (
    <DetailBox>
      <GoBack />
      {!error && <Box>{detailData ? <Info detailData={detailData} /> : <DetailSkeleton />}</Box>}
      {error && <NotFound />}
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

  @media screen and (min-width: 500px) {
    margin: 67px auto 0 auto;
  }
`;

export default DetailInfo;
