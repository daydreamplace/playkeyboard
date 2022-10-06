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
import Figure from '../../unused/sanghoU/Figure';

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
      {!error && (
        <Box>
          {detailData ? (
            <>
              <Info detailData={detailData} />
              <Figure figureData={detailData.figure} />
              <Bottom priceData={detailData.price} />
            </>
          ) : (
            <DetailSkeleton />
          )}
        </Box>
      )}
      {error && <NotFound />}
    </DetailBox>
  );
};

const DetailBox = styled.div`
  position: relative;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 100%;

  @media screen and (min-width: 500px) {
    margin: 67px auto 0 auto;
  }
`;

export default DetailInfo;
