import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../api/module';
import styled from 'styled-components';

import Theme from './Theme';

const ThemeList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const [themeList, setThemeList] = useState<any[]>([]);

  const onClick = (category: string) => {
    navigate(`/?category=${category}`);
  };

  const getLoader = async (category: string) => {
    const resp = await api.get({
      url: `/theme?category=${category}`,
      options: {
        withAuthorization: false,
      },
    });
    setThemeList(resp.data.data);
  };

  useEffect(() => {
    api
      .get({
        url: '/theme/category',
        options: {
          withAuthorization: false,
        },
      })
      .then(res => {
        const data = res.data.data;
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    if (!categories || !categories.length) return;
    if (location.search) {
      const url = new URLSearchParams(location.search);
      const category = url.get('category');
      if (!category) return;
      getLoader(category);
    } else {
      getLoader(categories[0]);
    }
  }, [location.search, categories]);

  return (
    <>
      {categories.map(item => (
        <div key={item} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
      <List>
        {themeList.map(theme => {
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
  margin-top: 16px;
  padding: 0 16px;

  li {
    width: calc(50% - 10px);
  }
`;

export default ThemeList;
