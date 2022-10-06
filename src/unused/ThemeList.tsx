import { BsFillArrowDownCircleFill, BsFillXDiamondFill } from 'react-icons/bs';
import styled from 'styled-components';
import { ThemeInfo } from '../interface';

interface ThemeListProps {
  themeList: ThemeInfo[];
}

const ThemeList = ({ themeList }: ThemeListProps) => {
  return (
    <StyledList>
      {themeList.map(theme => (
        <li key={theme._id}>
          <img src={theme.imageUrl} alt={theme.name} />
          <h4>{theme.name}</h4>
          <p>{theme.hashtag.slice(0, 3).map(tag => `#${tag} `)}</p>
          <div className='info'>
            <p>
              <BsFillArrowDownCircleFill color='#AAABB3' />
              {theme.downloads}
            </p>
            <p className='price'>
              <BsFillXDiamondFill color='#7dc9fc' />
              {theme.price}
            </p>
          </div>
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 10px;

  li {
    width: calc(50% - 10px);

    h4 {
      margin-top: 20px;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }

    p {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #aaabb3;
      margin-top: 10px;
      line-height: 1.3;

      &.price {
        color: #7dc9fc;
      }
    }

    div.info {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: 500px) {
      width: calc((100% - 40px) / 3);
    }
  }
`;

export default ThemeList;
