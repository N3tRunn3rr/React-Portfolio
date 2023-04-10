import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./ProjectCards";
import Particle from "../Particle";
// import perfectPlaylist from "../../Assets/project1.jpg";
// import eBill from "../../Assets/project2.png";
// import wiseWagers from "../../Assets/project3.png";


function Portfolio() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on in my Bootcamp.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Cards
              // imgPath={perfectPlaylist}
              title="Perfect-Playlist"
              description="Playlist generator. User can search for songs or search by genre. This is connected to the given activity the user has chosen as well as length of playlist. Based off the chosen criteria a playlist will be generated."
              ghLink="https://github.com/N3tRunn3rr/group-stuff"
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              // imgPath={eBill}
              title="E-Bill Management System"
              description="A web application that allows users to manage their bills and subscriptions. It is supposed to help users keep track of their spending and notify them when a payment is coming up. Due to being short a group member we were unable to finish but there is good ground work to finalize later."
              ghLink="https://github.com/danielgregoire34/electronic-bill-management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              // imgPath={wiseWagers}
              title="Wise Wagers"
              description="A web application that allows users to practice betting with fake money. Users can create an account and either look at sports odds to place bets or look at stock market information for stock calls. My team and I are working on this still so there will be more features in the future such as current and expired bets placed and some more ideas we have."
              ghLink="https://github.com/N3tRunn3rr/Wise-Wagers"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;