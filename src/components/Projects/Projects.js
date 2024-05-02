import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://cdn.dribbble.com/users/5863665/screenshots/16720348/media/ccf2151ef39d08c6e8e324cb65596bdf.jpg?resize=400x0"}
              isBlog={false}
              title="Galya Finance"
              description="Galya Finance is a comprehensive financial platform designed to empower users with seamless control over their funds. With its user-friendly interface and robust features, Galya Finance offers a spectrum of services ranging from depositing to withdrawing funds, all facilitated through bank account integration."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEMRWt32qgQQLD_gF01l-jQVIzA6c7LqwpEreU1PCXA&s"}
              isBlog={false}
              title="Kral Boyama"
              description="A react native app built for children. It allows children to paint from their phone or tablet. Children can choose from a variety of colors and brush sizes to paint on the canvas. The app also allows children to save their drawings to their device. The app is available on the Google Play Store."
              ghLink="https://github.com/nihatt/kralsakirboyama"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BTC Predict"
              description="BTC Predict is a mobile application that predicts the price of Bitcoin using machine learning. The application uses a recurrent neural network to predict the price of Bitcoin. The application also displays the current price of Bitcoin and the predicted price of Bitcoin. The application is available on the web."
              ghLink="https://github.com/nihatt/btcpredict"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://media.licdn.com/dms/image/D5612AQEz_EwPsFSQWw/article-cover_image-shrink_720_1280/0/1705065290862?e=2147483647&v=beta&t=FYkuo2YQCBmc9IuqkLw-2Wz2QfdSscVBlVpDTXJWHzw"}
              isBlog={false}
              title="Fit Track"
              description="Fit Track is a mobile application that allows users to track their fitness goals. Users can create an account and log their workouts. The application also allows users to track their progress over time. The application is built using React and Firebase."
              ghLink="https://github.com/nihatt/FitTrack"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92sxAmnmhKLccIa0iTnfB-Alfru16MLtKSIzVZ32CAA&s"}
              isBlog={false}
              title="NP Rental Exclusive"
              description="
              NP Rental Exclusive introduces a revolutionary mobile application that redefines the concept of renting. With our user-friendly platform, users gain access to a vast array of listed products, offering unparalleled convenience and flexibility in renting anything they desire. "
              ghLink="https://github.com/nihatt/Np-Rental-Exclusive"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mDhAgL9tf6Jyb-feYNFe870_F01wKiKNT8qbgzMnnw&s"}
              isBlog={false}
              title="Burası Bos Mu?"
              description=" BurasiBosMu is an app designed to streamline the coffee shop experience by helping users find available desks in nearby establishments. Leveraging geolocation technology, the app identifies nearby coffee shops and provides real-time updates on desk availability. Users can interact with the app by marking desks as occupied or available, allowing others to see which spots are open. Additionally, the app may offer features such as desk reservations, ratings, and reviews for coffee shops "
              ghLink="https://github.com/nihatt/BurasiBosMu"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
