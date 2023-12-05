import React from "react";
import { ThemeContexte } from "../utils/Context";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import home from "../assets/favicon-32x32.png";
import logo from "../assets/logo-border.png";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

const NavigationBar = styled.div`
  margin: -7px;
`;

const Logo = styled.img`
  width: 100%;
  pointer-events: none;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  padding-right: 0px;
  padding-top: 15px;
`;

const NavItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-left: 15px;
  transition: transform 0.3s ease; /* Ajoute une transition pour l'effet fluide */

  &:active {
    transform: translateY(
      -10px
    ); /* Déplace l'élément de 10 pixels vers le haut lors du clic */
  }
`;

export default function Nav() {
  const { theme, toggleTheme } = useContext(ThemeContexte);
  return (
    <NavigationBar>
      <Logo src={logo} alt="logo" />
      <NavList>
        <NavItem>
          <Link to="/" style={{ position: "relative" }}>
            <img alt="Home" src={home} />
          </Link>
        </NavItem>
        <NavItem onClick={() => toggleTheme()}>
          <img alt="mode" src={theme === "light" ? moon : sun} />
        </NavItem>
      </NavList>
    </NavigationBar>
  );
}
