import React from "react";
import styled from "styled-components";

const Content = styled.div`
  height: 330px;
  width: 200px;
  border: 2px solid transparent;
  box-shadow: 0 0 10px 2px #cba247;
  margin-top: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  text-align: center;
  justify-content: center;
  transition: opacity 500ms, transform 500ms;
  @media screen and (max-width: 1000px) and (min-width: 600px) {
    height: 400px;
    width: 400px;
    margin-top: 80px;
    font-size: 16pt;
    padding-top: 40px;
  }
  @media screen and (min-width: 992px) {
    width: 800px;
    margin-top: 80px;
    font-size: 20pt;
    padding-top: 40px;
  }
`;
const Titre = styled.h3`
  position: absolute;
  top: -15px;
  @media screen and (max-width: 1000px) and (min-width: 600px) {
    font-size: 18pt;
  }
  @media screen and (min-width: 992px) {
    font-size: 24pt;
    top: -25px;
  }
`;

const Title = styled.h4`
  text-align: center;
`;

const InvocationParagraph = styled.p`
  text-indent: 5%;
  margin: 5px 0;
`;

const Count = styled.h5`
  text-align: center;
`;

const SlideContainer = styled.div`
  &.slide-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.slide-enter-active {
    opacity: 1;
    transform: translateX(0);
  }

  &.slide-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.slide-exit-active {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const Slide = (props) => {
  const { title, text, count, category } = props;

  return (
    <>
      {category && <Titre>{category}</Titre>}
      <SlideContainer>
        <Content>
          {title && <Title>{title}</Title>}
          {text && <InvocationParagraph>{text}</InvocationParagraph>}
          <Count>
            عدد المرَّات :{" "}
            {count && count === 1 ? "مرَّة واحدة" : `${count} مرَّات `}
          </Count>
        </Content>
      </SlideContainer>
    </>
  );
};

export default Slide;
