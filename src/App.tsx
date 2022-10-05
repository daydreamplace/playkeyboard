import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Theme from "./pages/Theme";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theme/:id" element={<Theme />} />
      </Routes>
    </>
  );
};

export default App;
