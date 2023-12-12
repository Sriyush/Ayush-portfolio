import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
  import Nav from "react-bootstrap/Nav";
  const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 30px;
  transform: translateY(50%);
  height: 50%;
  border-radius: 5px;
  opacity:30% ;
  border-radius: 40px;
  opacity: 30%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;


const IconTextContainer = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
  padding: 20px 20px;
  height: auto;
  width: 200px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #cd5ff8;
  }
`;

const SidebarIcon = styled.span`
  color: #FFF;
  margin-right: 10px;
  &:hover {
    color: #cd5ff8;
  }
`;

const TextIcon = styled.span`
  color: #FFF;
  font-weight: bolder;
  font-size: 20px;
//   text-transform: uppercase;
&:hover {
  color: #cd5ff8;
}
`;

function Sidebar() {
    const [expand, updateExpanded] = useState(false);
  return (

    <SidebarWrapper>
      <IconTextContainer>
      <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineHome style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Home</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
      <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)} style={{ textDecoration: "none" }}>
        <SidebarIcon><AiOutlineUser style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>About</TextIcon>
      </Nav.Link>
      </IconTextContainer>

      <IconTextContainer>
        <SidebarIcon><AiOutlineFundProjectionScreen style={{height: '20px', width: '20px'}}/></SidebarIcon>
        <TextIcon>Projects</TextIcon>
      </IconTextContainer>

    </SidebarWrapper>
  );
}

export default Sidebar;
