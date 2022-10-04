import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Main from './pages/Main';
import Theme from './pages/Theme';
import DetailInfo from './components/DetailInfo';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/asd' element={<DetailInfo />} />
      </Routes>
    </>
  );
};

export default App;
