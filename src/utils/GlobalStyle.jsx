import { createGlobalStyle } from "styled-components";
import { useContext } from "react";
import { ThemeContexte } from "./Context";

const SGlobalStyle = createGlobalStyle`
body{
    box-sizing: border-box;
    direction: rtl;
}
*{
    background-color : ${(props) => (props.isDarkMode ? "#202124" : "#153c2d")};
    color : ${(props) => (props.isDarkMode ? "#a18855" : "#ffe6a8")};
    font-family: "Noto Naskh Arabic";
}

`;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContexte);
  return <SGlobalStyle isDarkMode={theme === "dark"}></SGlobalStyle>;
}
