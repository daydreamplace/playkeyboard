import { ThemeInfo } from '../interface';
import styled from 'styled-components';

import download from '../assets/download.png';
import zem from '../assets/zem.png';

interface ThemeProps {
  data: ThemeInfo;
}

const Theme = ({ data }: ThemeProps) => {
  const hashtag = data.hashtag;

  return (
    <ThemeBox>
      <img src={data.imageUrl} className='theme' alt={data.name} />
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
            <img alt='download' src={download} /> {data.downloads}
          </div>
          <div className='price'>
            <img alt='zem' src={zem} /> {data.price}
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

  .theme {
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
        img {
          width: 0.75rem;
          margin-right: 3px;
        }

        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;

        color: #aaabb3;
      }

      .price {
        img {
          width: 0.75rem;
          margin-right: 3px;
        }

        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;

        color: #7dc9fc;
      }
    }
  }
`;

export default Theme;
