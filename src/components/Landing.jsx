import React from "react";
import styled from "styled-components";
import Langing1 from "../Images/landin-image-1.png";
import Langing3 from "../Images/landin-image-2.png";
import Langing2 from "../Images/landin-Image-3.png";

const Landing = () => {
  return (
    <Land>
      <LandingLeft>
        <HeroHead>
          <h2>Save time by building fast with Boldo Template</h2>
        </HeroHead>
        <HeroPara>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </HeroPara>
        <HeroButton>
         <button>Buy Template</button>
          <button>Explore</button>
        </HeroButton>
      </LandingLeft>
      <LandingRight>
        <ImageOne>
          <img src={Langing1} alt="" />
        </ImageOne>
        <ImageTwo>
          <img src={Langing2} alt="" />
        </ImageTwo>
        <ImageThree>
          <img src={Langing3} alt="" />
        </ImageThree>
      </LandingRight>
    </Land>
  );
};

const Land = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #0a2640;
  z-index: 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LandingLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 567px;
  height: 310px;
  margin-top: -4rem;
  margin-left: 7rem;
`;
const HeroHead = styled.div`
width: 850px;
height: 138px;
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 72px;
display: flex;
align-items: center;
color: #FFFFFF;
`;
const HeroPara = styled.div`
width: 567px;
height: 56px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: #F1F1F1;`;

const HeroButton = styled.div``;

const LandingRight = styled.div`
  z-index: 15;
  position: relative;
  width: 493.86px;
height: 423px;
margin-top: -4rem;
  margin-right: 15rem;
`;
const ImageOne = styled.div`
margin-bottom: 1rem;

`;
const ImageThree = styled.div`
position: absolute;
right: 0;
`;
const ImageTwo = styled.div`
position: absolute;
 left: 0;

`;

export default Landing;
