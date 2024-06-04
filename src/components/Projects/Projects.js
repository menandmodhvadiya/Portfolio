import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/frs.png";
import bitsOfCode from "../../Assets/Projects/foodimage.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card"> 
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Firebase Reminder System"
              description="Developing a web application using the MERN Stack. Enhancing skills in frontend and backend development, database management, and user experience optimization. Completed Firebase reminder system project, gaining valuable hands-on experience in full-stack development."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FOOD-APP|SWIGGY CLONE "
              description="Used Swiggy live API to fetch all data through CORS and also Redux toolkit ,Parcel Bundler,React 
Router ,Tailwind CSS libraries used.Here you can Search restaurants, view their info and menu card. Also you can add or remove items 
from cart."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;