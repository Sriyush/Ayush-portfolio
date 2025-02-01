
import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import cover from "../../assets/cover.png";
import styled, { keyframes } from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ayush from "../../assets/fit.png";
import Type from "../Type";

function Home() {
  const resumeUrl = "https://drive.google.com/file/d/1i1xICDrjaS5abEuRwL_IuLk5eOAEz_GF/view?usp=drive_link";
  return (
    <section>
      <Container fluid>
        <Particle />
        <StyledContainer>
          <Rows>
            <Col md={7}>
              <H1 style={{ paddingBottom: '2rem'}} >
                Hi There!{" "}
                <WaveSpan>
                  <span role="img" aria-label="wave">
                    {/* 👋🏻 */}
                    😇
                  </span>
                </WaveSpan>
              </H1>
              <H1 >
                I'M
                <Strongheading> Ayush Srivastava</Strongheading>
              </H1>
              <StyledType>
                <Type />
              </StyledType>
              <BUTTON onClick={() => window.open(resumeUrl, "_blank")}>Resume</BUTTON>
            </Col>
            <Col md={12} lg={5} style={{ paddingTop: '2rem'}}>
                <Img src={ayush} alt="ayush" className="img-fluid"/>
            </Col>
            </Rows>
        </StyledContainer>
      </Container>
    </section>
  );
}
const StyledContainer = styled(Container)`
  padding: 10rem ; /* Adjust top and bottom padding */
  
  @media (max-width: 760px) {
    padding: 5rem;
    padding-top:10rem; /* Add extra padding on top for mobile */

  }
`;
const Rows = styled(Row)`
  margin-left: 190px;
  margin-block: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 760px) {
    margin-left: 0;
    margin-block: 0;
    flex-direction: column; /* Image will come after text */
    align-items: center;
    text-align: center;
  }
`;


const BUTTON = styled.button`
  background: linear-gradient(to right, transparent 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #cd5ff8;
  border: 2px solid #cd5ff8;
  height: 30px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px #cd5ff8;

  &:hover {
    background-position: left bottom;
    color: white;
  }
`;
const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const WaveSpan = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.0s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%; 
  display: inline-block;
`;
const H1 =styled.h1`
color: white;
font-size: 2rem;
@media (max-width: 760px) {
  // font-size: 1.5rem;
  }
`
const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 2rem;
  @media (max-width: 760px) {
  // font-size: 1.5rem;
  }
`;
const Img = styled.img`
  width: 16rem; /* Adjusted size */
  height: 16rem;
  border-radius: 50%; /* Circular shape */
  background: rgba(205, 95, 248, 0.2); /* Light purple circular background */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem; /* Adjust padding */
  box-shadow: 0 0 15px rgba(205, 95, 248, 0.5); /* Glow effect */
  margin-top: 0; /* Default margin */

  img {
    width: 85%; /* Ensure image fits well */
    height: 85%;
    border-radius: 50%; /* Circular image */
    object-fit: cover; /* Ensures proper scaling */
  }

  @media (max-width: 760px) {
    margin-top: 2rem; /* Ensure spacing after text */
  }
`;



const StyledType=styled.div`
color: #cd5ff8;
font-size: 2rem;
font-weight: bold;
@media (max-width: 760px) {
  font-size: 1.5rem;  
  }
`
export default Home;
