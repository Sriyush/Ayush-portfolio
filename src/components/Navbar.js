import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ParticleComponent from "./Particle";
import { NavbarCollapse } from "react-bootstrap";
function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [expand, updateExpanded] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      fixed="top"
      expand="md"
    //   className={navColour ? "sticky" : "navbar"}
    >
      <StyledContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <H1>Ayush Srivastava</H1>
        </Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item> */}
            </Nav>
            </Navbar.Collapse>
      </StyledContainer>
    </Navbar>
  );
}

export default NavBar;

const H1 = styled.h1`
  margin-left: 50px;
  font-size: 30px;
  color: white;
`;

const StyledContainer = styled(Container)`
  //   background-color: black;
`;
