import styled from "styled-components";
import Theme from "./Theme";

const ThemeList = () => {
  return (
    <List>
      <li>
        <Theme />
      </li>
    </List>
  );
};

const List = styled.ol``;

export default ThemeList;
