import React from "react";
import Category from "../components/Category";
import data from "../utils/data.json";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Lien = styled(Link)`
  color: #ffe6a8;
  text-decoration: none;
`;

const MainContainer = styled.main`
  padding-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export default function Home() {
  return (
    <div>
      <MainContainer>
        {data.map((category) => (
          <Lien key={`cat${category.id}`} to={`/invocations/${category.id}`}>
            <Category key={`cat${category.id}`} category={category.category} />
          </Lien>
        ))}
      </MainContainer>
    </div>
  );
}
