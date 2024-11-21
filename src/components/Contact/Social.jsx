import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import "./Social.css";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Social = () => {
  return (
    <Container style={{ padding: "30px" }}>
      <Row>
        <Col md={12} className="contact-social">
          <div className="contact-text">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/kumarbanty143"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-patra-958199275/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://leetcode.com/u/himanshukumar2910/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.geeksforgeeks.org/user/himanshu2910/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://x.com/Himansh40017967"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <BsTwitterX />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/the_banty_csk/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <GrInstagram />
              </a>
            </li>

            <li className="contact-icons">
              <a
                href="https://www.facebook.com/himanshukumar.patra.5/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
