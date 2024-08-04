import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import passXonline from "../assets/img/passxonline.png";
import SBChatApp from "../assets/img/sbchat.png";
import twjp from "../assets/img/Three-water-jug.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import gan from "../assets/img/GAN.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "PassXonline",
      description: "Online Password keeper",
      imgUrl: passXonline,
      goto: "https://passxonline.netlify.app"
    },
    {
      title: "SBChatApp",
      description: "Chatting app based on react-chat-engine",
      imgUrl: SBChatApp,
      goto:"https://sbchatapp.vercel.app/"
    },
    {
      title: "Three water jug problem",
      description: "basic frontend UI for three water jug problem",
      imgUrl: twjp,
      goto:"https://three-water-jug-problem-ai.vercel.app/"
    },
    {
      title: "Synthetic Image Generation using GAN",
      description: "CNN and DCGAN implementation to generate synthetic images",
      imgUrl: gan,
      goto:"https://colab.research.google.com/drive/1rn4-zCKUqAhqiUlVwzdzan0lqHqAL8wY?usp=sharing"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a list of projects that i have made with the skills that i have learnt through my jouney of Web Development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;

