import React from "react";
import styled from "styled-components";
import Langing1 from "../Images/landin-image-1.png";
import Langing3 from "../Images/landin-image-2.png";
import Langing2 from "../Images/landin-Image-3.png";

const Landing = () => {
  return (
    <>
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
            <a href="/">Buy Template</a>
            <a href="/">Explore</a>
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
    </>
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
  margin-top: -6rem;
  margin-left: 7rem;
`;
const HeroHead = styled.div`
  width: 850px;
  height: 138px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const HeroPara = styled.div`
  width: 567px;
  height: 56px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #f1f1f1;
`;

const HeroButton = styled.div`
  display: flex;
  gap: 2rem;
  a {
    text-decoration: none;
  }
  a:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 56px;
    color: #0a2640;
    gap: 8px;
    width: 247px;
    height: 60px;
    background: #65e4a3;
    border: 2px solid #69e6a6;
    border-radius: 56px;
  }
  a:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 56px;
    gap: 8px;
    color: white;
    width: 187px;
    height: 60px;

    border: 2px solid #ffffff;
    border-radius: 56px;
  }
`;

const LandingRight = styled.div`
  z-index: 15;
  position: relative;
  width: 493.86px;
  height: 423px;
  margin-top: -4rem;
  margin-right: 15rem;
  @media (max-width: 1670px) {
    display: none;
  }
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
