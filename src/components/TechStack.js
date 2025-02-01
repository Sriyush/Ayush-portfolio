import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiNodejs,
  DiDart,
  DiHtml5,
  DiMongodb,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress,
  SiCss3,
  SiTailwindcss
} from "react-icons/si";

const TechIconsWrapper = styled(Container)`
  justify-content: center;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Rows = styled(Row)`
display: flex;
flex-direction: row;
justify-content: 'space-between';
margin: 3rem;
  @media (max-width: 1080px) {
    // margin-left: 0;
    margin-block: 0;
    // margin-bottom:1rem;
    display: flex;
    flex-direction: column;
  }
`;
const TechIconCol = styled(Col)`
  font-size: 4.5em;
  margin: 15px;
  padding: 10px;
  color: lightblue;
  opacity: 0.93;
  border: 1.7px solid rgba(200, 137, 230, 0.637);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);
  transition: all 0.4s ease 0s;

  &:hover {
    transform: scale(1.05);
    border: 2.2px solid rgba(197, 115, 230, 0.883);
  }

  @media (max-width: 767px) {
    font-size: 2.5em; /* Reduce icon size */
    margin: 8px; /* Reduce margin */
    padding: 5px;
  }
`;

const MContainer = styled(Container)`
  border-radius: 10px;
  border: 1.7px solid rgba(200, 137, 230, 0.637);
  margin-inline: 10px;
  padding: 1.5rem;

  @media (max-width: 767px) {
    padding: 1rem; /* Reduce padding */
    margin-bottom: 0.5rem; /* Reduce margin */
  }
`;


function Techstack() {
//   const icons = [
//     // <CgCPlusPlus />,
//     // <DiJavascript1 />,
//     <DiNodejs />,
//     <DiReact />,
//     <SiSolidity />,
//     <SiFlutter />,
//     // <SiExpress />,
//     // <DiGit />,
//     // <SiFirebase />,
//     // <DiPython />,
//   ];
  const languages = [
    <CgCPlusPlus/> ,
    <DiJavascript1 />,
    <DiPython />,
    <DiDart/>
  ];
  const frontend = [
    <DiReact />,
    <DiHtml5 />,
    <SiCss3/>,
    <SiTailwindcss/>
  ];
  const Backend = [
      <SiFirebase />,
      <DiNodejs/>,
      <SiExpress/>,
      <DiMongodb/>
    //   <
  ];
  return (
    <TechIconsWrapper>
      <Rows >
      <MContainer >
      <Col style={{ textAlign: "center" }}>
      <h1 style={{color: 'white'}}>Languages</h1>
        <Row style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
          {languages.map((icon, index) => (
            <TechIconCol key={index}>
              {icon}
            </TechIconCol>
          ))}
        </Row>
      </Col>
      </MContainer>
      <MContainer>
      <Col style={{ textAlign: "center" }}>
      <h1 style={{color: 'white'}}>Frontend</h1>
        <Row style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
          {frontend.map((icon, index) => (
            <TechIconCol key={index}>
              {icon}
            </TechIconCol>
          ))}
        </Row>
      </Col>
        </MContainer>
      </Rows>
      <Rows>
      <MContainer>
      <Col style={{ textAlign: "center" }}>
      <h1 style={{color: 'white'}}>Backend</h1>
        <Row style={{display: 'flex',flexDirection: 'row',justifyContent: 'center',}}>
          {Backend.map((icon, index) => (
            <TechIconCol key={index}>
              {icon}
            </TechIconCol>
          ))}
        </Row>
      </Col>
        </MContainer>
        </Rows>
    </TechIconsWrapper>
  );
}

export default Techstack;
