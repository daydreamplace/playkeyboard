import { ThemeInfo } from '../interface';

import styled from 'styled-components';
import { HiArrowCircleDown } from 'react-icons/hi';
import { IoDiamond } from 'react-icons/io5';

interface ThemeProps {
  data: ThemeInfo;
}

const Theme = ({ data }: ThemeProps) => {
  const hashtag = data.hashtag;

  return (
    <ThemeBox>
      <img src={data.imageUrl} alt={data.name} />
      <div className='themeContent'>
        <p className='themeName'>{data.name}</p>
        <ul>
          {hashtag.map(tag => {
            return (
              <li key={tag} className='hashTag'>
                #{tag}
              </li>
            );
          })}
        </ul>
        <div className='bottom'>
          <div className='download'>
            <HiArrowCircleDown /> {data.downloads}
          </div>
          <div className='price'>
            <IoDiamond /> {data.price}
          </div>
        </div>
      </div>
    </ThemeBox>
  );
};

const ThemeBox = styled.div`
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;

    box-shadow: 2px 2px lightgray;
    border-radius: 10px;
  }

  .themeContent {
    .themeName {
      margin-top: 4px;
      padding: 1px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;

      color: #42444c;
    }

    ul {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(170, 171, 179);

      .hashTag {
        display: inline;

        margin-right: 3px;
        padding: 1px;

        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      .download {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 0.7rem;
        line-height: 18px;

        color: #aaabb3;
      }

      .price {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 0.7rem;
        line-height: 18px;

        color: #7dc9fc;
      }
    }
  }
`;

export default Theme;
