import { useState } from 'react';
import styled from 'styled-components';
import smile from '../../assets/images/emoji/smile.png';
import love from '../../assets/images/emoji/love.png';
import wink from '../../assets/images/emoji/wink.png';
import laugh from '../../assets/images/emoji/laugh.png';
import dia from '../../assets/images/dia.png';

interface PriceProps {
  priceData: number;
}

const Bottom = ({ priceData }: PriceProps) => {
  const [focus, setFocus] = useState(0);
  const [on, setOn] = useState(false);
  const [emojiArr, setEmojiArr] = useState([
    {
      id: 1,
      emojiImg: smile,
      alt: '맘에들어요',
      title: '맘에들어요',
      count: 0,
    },
    {
      id: 2,
      emojiImg: love,
      alt: '심쿵했어요',
      title: '심쿵했어요',
      count: 0,
    },
    {
      id: 3,
      emojiImg: wink,
      alt: '응원해요',
      title: '응원해요',
      count: 0,
    },
    {
      id: 4,
      emojiImg: laugh,
      alt: '갖고싶어요',
      title: '갖고싶어요',
      count: 0,
    },
  ]);
  const selectEmojiHandler = (e: number) => (e === focus ? setFocus(0) : setFocus(e));

  return (
    <StyledSection>
      <ul className='emoji-wrap'>
        {emojiArr.map((el, index) => {
          return (
            <li
              className={focus === el.id ? 'focus-on' : 'focus-off'}
              key={el.id}
              onClick={() => {
                selectEmojiHandler(el.id);
              }}
            >
              <img alt={el.alt} src={el.emojiImg} />
              <div className='emoji-title'>{el.title}</div>
              <div>{focus === el.id ? 1 : 0}</div>
            </li>
          );
        })}
      </ul>
      <div className='line' />
      <div className='inquiry-box'>
        <button className='inquiry-btn'>상품 문의</button>
      </div>
      <div className='purchase-box'>
        <button className='purchase-btn'>
          <div className='purchase-title'>
            <span>구매</span>
            <img alt='다이아' src={dia} className='dia' />
            <span>{priceData}</span>
          </div>
          <div className='purchase-ad'>광고제거·무제한 사용</div>
        </button>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  padding-top: 30px;
  width: 100%;

  @mixin flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .emoji-wrap {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .focus-off {
      @include flex;
      font-size: 12px;
      color: #919299;
    }

    .focus-on {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      color: #ff417d;
    }

    .emoji-title {
      margin-top: 8px;
      margin-bottom: 4px;
    }
  }

  .line {
    width: 100%;
    margin: 20px 0;
    border-bottom: 1px solid #f2f3f7;
  }

  .inquiry-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inquiry-btn {
    width: 100%;
    margin: 0 10px;
    padding: 3px 0;
    background: #ffffff;
    border: 3px solid #ff417d;
    border-radius: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #ff417d;
  }

  .purchase-box {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.3);

    .purchase-btn {
      width: 100%;
      margin: 10px;
      padding: 5px 0;
      background: #ff417d;
      border: none;
      border-radius: 30px;
      color: #ffffff;

      .purchase-title {
        font-weight: 700;
        font-size: 14px;

        .dia {
          margin-left: 4px;
          margin-right: 3px;
          vertical-align: middle;
        }

        div {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }
  }
`;

export default Bottom;
