import axios from 'axios';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryResponse } from '../interface';
import { categotyToKor } from '../utils/categoryToKor';

interface NavProps {
  curCategory: string;
  setCurCategory: React.Dispatch<React.SetStateAction<string>>;

  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = ({ curCategory, setCurCategory, setLimit }: NavProps) => {
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<CategoryResponse>('https://api.plkey.app/theme/category');

      setCategories(data.data);
    })();
  }, []);

  return (
    <StyledNav>
      {categories && (
        <Swiper slidesPerView={'auto'} spaceBetween={14}>
          {categories.map(category => (
            <SwiperSlide
              key={category} //
              className={curCategory === category ? 'current' : ''}
              onClick={() => {
                setCurCategory(category);
                setLimit(8);
              }}
            >
              <p>{categotyToKor(category)}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </StyledNav>
  );
};

const fadeOut = keyframes`
  0% {
    background-color: #aaaaaa;
  }

  100% {
    background-color: #ffffff;
  }
`;

const StyledNav = styled.nav`
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;

  div.swiper {
    padding: 0 20px;

    div.swiper-wrapper {
      display: flex;
      width: fit-content;

      div.swiper-slide {
        text-align: center;
        word-break: keep-all;
        color: #aaabb3;
        padding: 10px 10px 0 10px;

        p {
          padding-bottom: 10px;
        }

        &.current {
          color: #ff1c7c;
          animation: ${fadeOut} 0.5s;

          p {
            border-bottom: 2px solid #ff1c7c;
          }
        }
      }
    }
  }
`;

export default Nav;
