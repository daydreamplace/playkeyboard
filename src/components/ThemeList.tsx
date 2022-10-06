import { ThemeInfo } from '../interface';
import styled from 'styled-components';

import Theme from './Theme';

interface ThemeListProps {
  list: ThemeInfo[];
}

const ThemeList = ({ list }: ThemeListProps) => {
  return (
    <>
      <List>
        {list.map(theme => {
          return (
            <li key={theme.themeId}>
              <Theme data={theme} />
            </li>
          );
        })}
      </List>
    </>
  );
};

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 60px;
<<<<<<< HEAD
=======
  padding: 0 16px;
>>>>>>> main

  li {
    width: calc(100% / 2);
    padding: 0 calc(6% / 4);
    margin-bottom: 10px;
  }

  @media (min-width: 500px) {
    li {
      width: calc(100% / 3);
      margin-bottom: 10px;
    }
  }
`;

export default ThemeList;
