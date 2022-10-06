import { ThemeInfo } from '../../interface';

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
  gap: 10px;
  min-width: 320px;
  margin-top: 16px;
  padding: 0 10px;

  li {
    /* width: calc(50% - 10px); */
    width: 20rem;
  }

  @media (max-width: 1280px) {
    li {
      width: calc(33.33% - 14px);
    }
  }

  @media (max-width: 768px) {
    li {
      width: calc(50% - 10px);
    }
  }
`;

export default ThemeList;
