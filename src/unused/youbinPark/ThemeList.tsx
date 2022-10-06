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
  gap: 20px;
  min-width: 320px;
  margin-top: 16px;
  padding: 0 16px;

  li {
    width: calc(50% - 10px);
  }
`;

export default ThemeList;
