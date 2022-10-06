import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ThemeInfo } from '../../interface';
import { BsSearch } from 'react-icons/bs';

import Nav from './Nav';
import ThemeList from './ThemeList';
import { useLocation } from 'react-router-dom';
import { api } from '../../api/client';

const Main = () => {
  const location = useLocation();
  const [categories, setCategories] = useState<string[]>([]);
  const [list, setList] = useState<ThemeInfo[]>([]);

  //category에 포함된 theme주소 가져오는 api
  const getLoader = async (category: string) => {
    const resp = await api.get({
      url: `/theme?category=${category}`,
      options: {
        withAuthorization: false,
      },
    });
    setList(resp.data.data);
  };

  //category 불러오는 api
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
      <Header>
        <h1>
          <span>PLAY</span>keyboard
        </h1>
        <BsSearch size={24} />
      </Header>

      <StyledTitle>취향대로 골라보기</StyledTitle>
      <Nav categories={categories} />
      <ThemeList list={list} />
    </>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 24px;
  color: #42444c;
  font-weight: 500;
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  span {
    color: #ff1c7c;
    font-weight: 900;
  }
`;

const StyledTitle = styled.h2`
  padding-top: 64px;
  font-size: 24px;
  color: #42444c;
  font-weight: 500;
  margin: 20px;
`;

export default Main;
