import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbFileTypeSql, TbBrandCoinbase } from "react-icons/tb";

const Language = () => {
  // Define the language stack with names and icons
  const languageStack = [
    { name: "C", icon: <TbBrandCoinbase /> }, // Assuming this icon represents C
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <TbFileTypeSql /> }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {languageStack.map((language, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{language.name}</Tooltip>}
          >
            <div>{language.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default Language;
