import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Menand Modhvadiya </span>
                from <span className="purple"> Gujarat, India.</span>
                <br />
            <ul>
              <li>
                I have completed my internship program in MERN Stack technogly at Ncode Technogies(Nov 2023 - May 2024).
                <br />
              </li>
              <li>
                Now I am searching for job for MERN Stack as fresher. 
                <br/>
              </li>
              <li>
                I have completed B.E. in Computer Engineering at GEC, Rajkot(2012-2016).
                <br />
              </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust on yourself"{" "}
          </p>
          <footer className="blockquote-footer">Menand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
