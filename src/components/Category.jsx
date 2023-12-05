import React from "react";

import styled from "styled-components";

const Carte = styled.article`
cursor: pointer;
  border: 1px solid;
  width: 100px;
  height: 90px;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  filter: drop-shadow(0 0 0.17rem #f0e0b4);
  transition: transform 0.2s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;
export default function Category(props) {
  return <Carte>{props.category}</Carte>;
}
