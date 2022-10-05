import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi";

export default function Back() {

  const goBack = () => window.history.back();

  return (
    <Box>
      <ArrowLeft onClick={goBack} />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid blue;
`;

const ArrowLeft = styled(HiArrowLeft)`
  width: 30px;
  height: 25px;
`;
