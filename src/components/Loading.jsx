import styled, { keyframes } from 'styled-components';
import verset from "../assets/verset-min.png";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledImage = styled.img`
    width:100%;
  animation: ${fadeOut} 2.5s linear forwards;
  @media screen and (min-width: 800px){
    width: 50%;
  
  }
`;

const Loading = ({ opacity }) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems:"center",
        opacity,
        height:"100vh",
        display: opacity === 1 ? "flex" : "none",
      }}
    >
      <StyledImage alt="verset" src={verset} />
    </div>
  );
};

export default Loading;