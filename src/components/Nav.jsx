import React from "react";
import { ThemeContexte } from "../utils/Context";
import { useContext } from "react";
import styled from "styled-components";

const Theme = styled.li`
  cursor: pointer;
  position: relative
`;

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContexte);
  return (
    <div>
      <ul>
        <li style={{position:'relative'}}>Home</li>
        <Theme onClick={() => toggleTheme()}>
          {theme === 'light' ? "🌙" : "☀️"}
        </Theme>
      </ul>
    </div>
  );
}
