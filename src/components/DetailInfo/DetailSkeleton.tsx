import React from 'react';
import styled from 'styled-components';

const DetailSkeleton = () => {
  return (
    <StyledSkeleton>
      <div className='img' />
      <div className='title' />
      <div className='title sub' />

      <div className='tags'>
        <div className='tag' />
        <div className='tag' />
        <div className='tag' />
        <div className='tag' />
      </div>
    </StyledSkeleton>
  );
};

const StyledSkeleton = styled.div`
  padding: 63px 16px 0 16px;

  div.img {
    aspect-ratio: 48 / 37;
    background-color: gray;
    border-radius: 10px;
  }

  div.title {
    width: 100px;
    height: 20px;
    background-color: gray;
    margin-top: 15px;

    &.sub {
      height: 12px;
    }
  }

  div.tags {
    display: flex;
    gap: 10px;
    margin-top: 15px;

    div.tag {
      width: 50px;
      height: 28px;
      background-color: gray;
      border-radius: 18px;
    }
  }
`;

export default DetailSkeleton;
