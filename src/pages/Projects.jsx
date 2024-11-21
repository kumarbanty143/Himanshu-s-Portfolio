import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ShopyCart from "../assets/projects/Shopycart.png";
import ReadEase from "../assets/projects/ReadEase.png";
import ExpressTalk from "../assets/projects/ExpressTalk.png";
import Emosense from "../assets/projects/Emosense.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopyCart}
              isBlog={false}
              title="ShopyCart"
              description="A feature-rich online shopping platform designed with a focus on usability and performance. ShopyCart includes functionalities like product browsing, cart management, and order tracking, offering a smooth and engaging e-commerce experience."
              ghLink="https://github.com/kumarbanty143/E-Commerce-Website-React-"
              demoLink="https://shopicart-an-e-commer-git-8f3d56-himanshu-kumar-patras-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpressTalk}
              isBlog={false}
              title="ExpressTalk - Live Chat Application"
              description="A real-time messaging platform designed for seamless and secure communication. Built with Node.js and WebSockets, ExpressTalk supports instant message delivery, user authentication, and a modern, user-friendly interface for effective interaction."
              ghLink="N/A"
              demoLink="N/A"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReadEase}
              isBlog={false}
              title="ReadEase - E-Library"
              description="An innovative digital library built using the MERN stack. ReadEase allows users to seamlessly register, upload books, and browse an extensive collection. Key features include a search and filter system, user authentication, and a unique policy where users can only access the library after contributing at least one book."
              ghLink="https://github.com/kumarbanty143/ReadEase-Opensource-Library-Wbe-APp"
              demoLink="N/A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Emosense}
              isBlog={false}
              title="Emosense - Sentiment Analysis Web Application"
              description="A machine learning-powered sentiment analysis tool developed with Logistic Regression. Emosense processes text inputs to determine and visualize the overall sentiment as positive, negative, or neutral, aiding users in understanding public opinion or trends in social media and reviews."
              ghLink="N/A"
              demoLink="N/A"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects