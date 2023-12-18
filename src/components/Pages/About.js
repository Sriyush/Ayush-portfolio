import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import styled from "styled-components";
import Techstack from "../TechStack";
import Toolstack from "../ToolStack";

const H1 = styled.h1`
  color: white;
  font-size: 30px;
  position: relative;

  &:hover {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 20%;
      height: 5px;
      background: linear-gradient(to right, transparent 50%, #cd5ff8 50%);
      background-size: 200% 100%;
      background-position: right bottom;
      transition: background-position 0.3s ease-in-out;
      border-radius: 10px; /* Adjust the radius as needed */
    }
  }
`;
const H2 = styled.h1`
color: white;
  font-size: 2.1em;
  justify-content: center;
  text-align: center;
  padding-top: 10px !important;
  &:hover {
      color: lightblue;
  }
`
const Rows = styled(Row)`
  margin-left: 190px;
  margin-block: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 760px) {
    margin-left: 0;
    margin-block: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 25px;
`;
const Pinktext = styled.strong`
  color: #b5179e;
  margin-left: 5px;
  font-size: 25px;
`;
const Bluetext = styled.strong`
  color: lightblue;
  margin-left: 5px;
  font-size: 25px;
`;
const Addspace=styled.div`
margin-bottom: 5px;
`
function About() {
  return (
    <section>
      <Container>
        <Particle />
        <Container style={{ padding: 90 }}>
          <Rows>
            <H1>
              Know me
              <Strongheading> Better</Strongheading>
            </H1>
            <Col>
            <Card>
                <Card.Body>
                    <p style={{color: "white",textAlign: "justify",fontSize: "20px"}}>
                    <Pinktext>Hi</Pinktext> Everyone, I am <Strongheading>Ayush Srivastava</Strongheading> From <Bluetext>Kanpur , India.</Bluetext>
                    <Addspace/>
                    <br />Currently pursuing Btech <Pinktext>CSE</Pinktext> with specilization in <Bluetext>Cyber Physical System.</Bluetext>
                    <Addspace/>
                    <br/>Appart from all the coding fuss i love to watch <Pinktext>Movies</Pinktext> and <Pinktext>sports</Pinktext>.
                    </p>
                </Card.Body>
            </Card>
            </Col>
          </Rows>
          <Container style={{justifyContent: "center"}}>
          <H2>Techstack</H2>
          <Container style={{flexWrap: "wrap",justifyContent: "center"}}>
          <Techstack/>
          </Container>
          </Container>
          <Container style={{justifyContent: "center"}}>
          <H2>Toolstack</H2>
          <Container style={{flexWrap: "wrap",justifyContent: "center"}}>
          <Toolstack/>
          </Container>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default About;
