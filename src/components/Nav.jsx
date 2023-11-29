import React from "react";
import { ThemeContexte } from "../utils/Context";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Theme = styled.li`
  cursor: pointer;
  position: relative
`;

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContexte);
  return (
    <div>
      <ul>
        <Link to="/" style={{position:'relative'}}>Home</Link>
        <Theme onClick={() => toggleTheme()}>
          {theme === 'light' ? "🌙" : "☀️"}
        </Theme>
      </ul>
    </div>
  );
}
