import axios from 'axios';
import { useEffect, useState } from 'react';
import { ThemeInfo, ThemeRes } from '../interface';

import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import ThemeItem from '../components/ThemeList';
import Footer from '../components/Footer';

import Nav from '../components/Nav';
import ThemeList from '../components/ThemeList';

const Main = () => {
  const [list, setList] = useState<ThemeInfo[]>([]);
  const [curCategory, setCurCategory] = useState('NEW');
  const [limit, setLimit] = useState(8);

  const showMore = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setLimit(limit + 8);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showMore);
    (async () => {
      const { data } = await axios.get<ThemeRes>(`https://api.plkey.app/theme?category=${curCategory}`);
      setList(data.data.slice(0, limit));
    })();
    return () => {
      window.removeEventListener('scroll', showMore);
    };
  }, [curCategory, limit]);

  return (
    <>
      <Header>
        <h1>
          <span>PLAY</span>keyboard
        </h1>
        <BsSearch size={24} />
      </Header>
      <StyledTitle>취향대로 골라보기</StyledTitle>
      <Nav curCategory={curCategory} setCurCategory={setCurCategory} setLimit={setLimit} />
      <ThemeList list={list} />
      <Footer />
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
