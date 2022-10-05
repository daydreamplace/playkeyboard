import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeDetailRes, ThemeDetail } from "../../interface";

import Back from "./Back";
import Info from "./Info";

const DetailInfo = () => {

  const [detailData, setDetailData] = useState<ThemeDetail>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<ThemeDetailRes>('https://api.plkey.app/theme/6');
      setDetailData(data.data);
    })();
  }, []);

  console.log(detailData);

  return (
    <Box>
      <Back />
      {detailData && <Info detailData={detailData} />}
      
    </Box>
  );
};

const Box = styled.div`
  width: calc(100% - 32px);
  margin: 0 calc((100% - (100% - 32px))/2);
`;

export default DetailInfo;
