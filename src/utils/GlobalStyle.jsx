import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContexte } from "./Context";

const SGlobalStyle = createGlobalStyle`
body{
    box-sizing: border-box;
    background-color : ${(props) => (props.isDarkMode ? "#202124" : "#d3f2e7")};
    color : ${(props) => (props.isDarkMode ? "white" : "black")};
}
.BackgroundImg{
  width: 100%;
  position:absolute;
  top: 0px;
  left : 0px;
  z-index: -1;
}
`;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContexte);
  return <SGlobalStyle isDarkMode={theme === "dark"}></SGlobalStyle>;
}
