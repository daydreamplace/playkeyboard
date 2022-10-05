export const categotyToKor = (name: string) => {
  switch (name) {
    case 'Animal':
      return '동물';
    case 'Arachi':
      return '아라찌';
    case 'CAMPAIGN':
      return '캠페인';
    case 'Dark':
      return '다크';
    case 'Dreamlike':
      return '몽환적인';
    case 'Free':
      return '무료';
    case 'Fruit':
      return '과일';
    case 'Illustration':
      return '일러스트';
    case 'LIVE':
      return 'LIVE';
    case 'Mildang Happiness':
      return '밀당해피니스';
    case 'NEW':
      return 'NEW';
    case 'Pastel':
      return '파스텔';
    case 'Simple':
      return '간편한';
    case 'Strawberry 🍓':
      return '딸기';
    default:
      return '잘못된 값';
  }
};
