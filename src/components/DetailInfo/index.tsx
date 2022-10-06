import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeDetailRes, ThemeDetail } from '../../interface';

import GoBack from './GoBack';
import Info from './Info';
import Theme from '../../pages/Theme';

const DetailInfo = () => {
  const [detailData, setDetailData] = useState<ThemeDetail>();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<ThemeDetailRes>('https://api.plkey.app/theme/6');
      // const { data } = await axios.get<ThemeDetailRes>(`https://api.plkey.app${location.pathname}`);
      setDetailData(data.data);
    })();
  }, []);

  return (
    <Box>
      <GoBack />
      {detailData && (
        <>
          <Info detailData={detailData} />
          <Theme />
        </>
      )}
    </Box>
  );
};

const Box = styled.div`
  width: calc(100% - 32px);
  max-width: 600px;
  margin: 0 auto;
  /* margin: 0 calc((100% - (100% - 32px))/2); */
`;

export default DetailInfo;
