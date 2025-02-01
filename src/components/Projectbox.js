import React from "react";
import PropTypes from "prop-types";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProjectBox = styled(Link)`
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  margin: 1rem;
  text-decoration: none;
  border-color: #cd5ff8;
  height: 200px;
  width: 400px;
  box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);

  @media (max-width: 767px) {
    height: auto; /* Let the box adjust based on content on mobile */
    width: 100%; /* Full width on mobile */
    flex-direction: column;
    margin: 0.5rem 0;
  }
`;

const TextContainer = styled(Container)`
  width: 50%;
  padding: 1rem;

  .font-bold {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .text-info {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .text-gray-700 {
    color: #4a5568;
  }

  @media (max-width: 767px) {
    width: 100%; /* Make text container full width on mobile */
    padding: 0.5rem;
    text-align: center;
  }
`;

const StyledImage = styled(Image)`
  width: 60%;  /* Increase width */
  height: auto; /* Maintain aspect ratio */
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  object-fit: contain; 

  @media (max-width: 767px) {
    width: 90%; /* Adjust for mobile */
    margin: 10px auto;
  }
`;

const SmallerImage = styled(Image)`
  width: 25%;
  height: auto;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  filter: brightness(0.7) contrast(1.2);

  @media (max-width: 767px) {
    width: 50%;
    margin: 10px auto;
  }
`;

function ProjectBox({ title, techStack, description, giturl, image }) {
  return (
    <StyledProjectBox to={giturl}>
      {title === "Foodie" ? (
        <SmallerImage src={image} alt={title} />
      ) : title === "DbSynchro" ? (
        <StyledImage src={image} alt={title} />
      ) : (
        <Image src={image} alt={title} />
      )}

      <TextContainer>
        <div className="font-bold text-xl mb-2" style={{ color: "#cd5ff8", fontWeight: "bold" }}>
          {title}
        </div>
        <div className="text-info text-xs mb-4" style={{ color: "#cd5ff8" }}>
          {techStack}
        </div>
        <div className="text-gray-700">{description}</div>
      </TextContainer>
    </StyledProjectBox>
  );
}

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  giturl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectBox;
