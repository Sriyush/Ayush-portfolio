import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import styled from "styled-components";
import ProjectBox from "../Projectbox";
import smern from "./../../assets/s.png"
import vid from "./../../assets/Logo2.png"
import tod from "./../../assets/Todlearnt.png"
import log from "./../../assets/Logo1.png"
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
const Strongheading = styled.strong`
  margin-left: 5px;
  color: #cd5ff8;
  font-size: 25px;
`;
function Project(){

    return(
        <>
        <Container>
            <Particle/>
            <Container style={{padding: 90}}>
            <Rows>
            <H1>
              Build it to,
              <Strongheading> Kill it</Strongheading>
            </H1>
            <Row style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
            <Col>
            <ProjectBox
              title="SOSH"
              techStack="MERN Stack"
              description="Description "
              giturl="https://github.com/Sriyush/Mern-project"
              image = {smern}
            />
            <ProjectBox
              title="VideoFam"
              techStack="Flutter and FIrebase"
              description="Description"
              giturl="https://github.com/Sriyush/VideoFam-Flutter   "
              image = {vid}
            />
          </Col>
          <Col>
            <ProjectBox
              title="Todlearn"
              techStack="Flutter and Firebase"
              description="Description "
              giturl="https://github.com/Sriyush/TodLearn"
              image = {tod}
            />
            <ProjectBox
              title="Foodie"
              techStack="Flutter and Firebase"
              description="Description "
              giturl="https://github.com/Sriyush/Foddie-flutterapp"
              image = {log}
            />
          </Col>
            </Row>
                </Rows>
            </Container>
        </Container>
        </>
    )
}
export default Project;