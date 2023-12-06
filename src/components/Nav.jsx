import React from "react";
import { ThemeContexte } from "../utils/Context";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
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
  @media screen and (min-width: 992px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  list-style: none;
  margin-left: 15px;
  transition: transform 0.3s ease;

  &:active {
    transform: translateY(-10px);
  }
  @media screen and (min-width: 992px) {
    &:hover {
      transform: scale(1.2);
    }
    margin-left: 40px;
    margin-right: 40px;
  }
`;
const IconImage = styled.img`
  width: 32px;
  @media screen and (min-width: 992px) {
    width: 90px;
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
            <IconImage alt="Home" src={home} />
          </Link>
        </NavItem>
        <NavItem onClick={() => toggleTheme()}>
          <IconImage alt="mode" src={theme === "light" ? moon : sun} />
        </NavItem>
      </NavList>
    </NavigationBar>
  );
}
