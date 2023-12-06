import React from "react";
import image from "../assets/motif.png";
import styled from "styled-components";

const Carte = styled.div`
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
  @media screen and (min-width: 992px) {
    &:hover {
      background-size: contain;
      background-image: url(${image});
      transform: rotate(-10deg);
    }
  }

  &:active {
    transform: scale(0.9);
  }
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    width: 150px;
    height: 140px;
    margin: 17px;
    font-size: 16pt;
  }
  @media screen and (min-width: 992px) {
    width: 300px;
    height: 290px;
    margin: 17px;
    font-size: 24pt;
  }
`;
export default function Category(props) {
  return <Carte>{props.category}</Carte>;
}
