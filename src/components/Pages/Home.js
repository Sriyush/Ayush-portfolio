
import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import cover from "../../assets/cover.png";
import styled, { keyframes } from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import ayush from "../../assets/Ayush.jpg";
import Type from "../Type";

function Home() {
  return (
    <section>
      <Container fluid>
        <Particle />
        <Container style={{padding: 90}}>
          <Rows>
            <Col md={7}>
              <H1 style={{ paddingBottom: 15}} >
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
              <BUTTON>Resume</BUTTON>
            </Col>
            <Col md={5} >
                <Img src={ayush} alt="ayush" className="img-fluid"/>
            </Col>
            </Rows>
        </Container>
      </Container>
    </section>
  );
}
const Rows =styled(Row)`
margin-left: 190px;
margin-block: 100px;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 760px) {
  margin-left: 0;
  margin-block: 0;
  display: flex;
  flex-direction: column;
}
`
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
font-size: 30px
`
const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
`;
const Img = styled.img`
  width: 250px; /* Set the desired width */
  height: 250px; /* Set the desired height */
  border-radius: 40%; /* Make it circular */
//   transform: translateY(-75%);
//   margin-left: 400px;
`;
const StyledType=styled.div`
color: #cd5ff8;
font-size: 30px;
font-weight: bold;
`
export default Home;
