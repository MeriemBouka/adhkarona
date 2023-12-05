import React from "react";
import data from "../utils/data.json";
import { useParams } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import styled from "styled-components";


const InvoContainer = styled.div `

`


const Invocations = () => {
  const { idParams } = useParams();
  const currentCategory = data.find(
    (invocation) => invocation.id.toString() === idParams
  );

  return (
    <InvoContainer>
      {currentCategory && (
        <SlideShow slides={currentCategory.invocations} category={currentCategory.category}/>
      )}
    </InvoContainer>
  );
};

export default Invocations;