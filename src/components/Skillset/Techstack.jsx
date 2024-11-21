import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMysql,
  DiCss3
} from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiExpress
} from "react-icons/si";

const Techstack = () => {
  // Define the tech stack with names and icons
  const techStack = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "React", icon: <DiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Node.js", icon: <DiNodejs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <DiGit /> }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;
