import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled(Container)`
  background-color: transparent;
  bottom: 0 !important;
  padding-top: 10px !important;
  padding-bottom: 8px !important;
`;

const StyledFooterCopywright = styled(Col)`
  text-align: center !important;

  h3 {
    font-size: 1em;
    color: white !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
`;

const StyledFooterBody = styled(Col)`
  z-index: 1;
  text-align: center !important;

  ul {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
    padding: 0 !important;
  }
`;

const StyledSocialIcons = styled.li`
  display: inline-block;
  margin: 0 10px;

  a {
    color: white;
  }
`;

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <StyledFooter fluid className="footer">
      <Row>
        <StyledFooterCopywright md="4">
          <h3>Made by Ayush Srivastava</h3>
        </StyledFooterCopywright>
        <StyledFooterCopywright md="4">
          <h3>Copyright © {year} AY</h3>
        </StyledFooterCopywright>
        <StyledFooterBody md="4">
          <ul className="footer-icons">
            <StyledSocialIcons>
              <a
                href="https://github.com/Sriyush"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </StyledSocialIcons>
            <StyledSocialIcons>
              <a
                href="https://twitter.com/Sriyush1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </StyledSocialIcons>
            <StyledSocialIcons>
              <a
                href="https://www.linkedin.com/in/sriyush/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </StyledSocialIcons>
            <StyledSocialIcons>
              <a
                href="https://www.instagram.com/sriyush_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </StyledSocialIcons>
          </ul>
        </StyledFooterBody>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
