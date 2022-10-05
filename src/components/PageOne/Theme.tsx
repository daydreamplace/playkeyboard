import styled from "styled-components";
import { HiArrowCircleDown } from "react-icons/hi";
import { IoDiamond } from "react-icons/io5";

interface ThemeProps {
  data: any;
}

const Theme = ({ data }: ThemeProps) => {
  const hashtag = data.hashtag;

  return (
    <ThemeBox>
      <img src={data.imageUrl} alt={data.name} />
      <div className="themeContent">
        <p className="themeName">{data.name}</p>
        {hashtag.map((tag) => {
          return (
            <li key={tag.id}>
              <span className="hashTag">#{tag}</span>
            </li>
          );
        })}
        <div className="bottom">
          <div className="download">
            <HiArrowCircleDown /> {data.downloads}
          </div>
          <div className="price">
            <IoDiamond /> {data.price}
          </div>
        </div>
      </div>
    </ThemeBox>
  );
};

const ThemeBox = styled.div`
  width: 164px;

  img {
    width: 100%;
    height: 130px;
  }

  .themeContent {
    .themeName {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;

      color: #42444c;
    }

    .hashTag {
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
