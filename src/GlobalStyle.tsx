import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .blur-up {
		-webkit-filter: blur(5px);
		filter: blur(5px);
		transition: filter 400ms, -webkit-filter 400ms;
	}

  .blur-up.lazyloaded {
		-webkit-filter: blur(0);
		filter: blur(0);
	}
`;

export default GlobalStyle;
