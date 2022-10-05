import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

import Back from "./Back";

export default function DetailInfo() {

  // const getTheme = async () => {
  //   try {
  //     const response = await axios.get("https://api.plkey.app/theme/6");
  //     const theme = response.data;
  //     console.log(theme);
  //   } catch (err) {
  //     console.log("Error >>", err);
  //   }
  // };

  useEffect(() => {
    axios.get('https://api.plkey.app/theme/6')
    .then(res => console.log(res.data.data))
    .catch(err => console.log('Error => ', err))
  }, []);

  return (
    <Box>
      <Back />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 16px;
  border: 1px solid red;
`;
