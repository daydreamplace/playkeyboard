import styled from "styled-components";
import { HiArrowCircleDown } from "react-icons/hi";
import { IoDiamond } from "react-icons/io5";

const Theme = () => {
  return (
    <ThemeBox>
      <img />
      <div className="themeContent">
        <p className="themeName">앙무</p>
        <p className="hashTag">#앙무 #앙무 #앙무</p>
        <div className="bottom">
          <div className="download">
            <HiArrowCircleDown /> 100
          </div>
          <div className="price">
            <IoDiamond /> 10
          </div>
        </div>
      </div>
    </ThemeBox>
  );
};

const ThemeBox = styled.div`
  /* border: 1px solid #006633; */

  width: 164px;

  img {
    width: 100%;
    height: 130px;
  }

  .themeContent {
    .themeName {
      width: 26px;
      height: 20px;

      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      color: #42444c;
    }

    .hashTag {
      width: 103px;
      height: 18px;

      font-weight: 400;
      font-size: 12px;
      line-height: 18px;

      color: #aaabb3;

      opacity: 1;
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      .download {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        color: #aaabb3;
      }

      .price {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        color: #7dc9fc;
      }
    }
  }
`;

export default Theme;
