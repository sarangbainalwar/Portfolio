import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import ProjetCard from './ProjetCard'
import colorShar2 from  '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'

function Projects() {
    const projects = [
        {
            title:"PassX",
            description: "Password Manager",
            imgUrl: projImg1,
        },
        {
            title:"Lyriks",
            description: "Music WebApp",
            imgUrl: projImg2,
        }
        
    ]
  return (
    <div>
      <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis expedita, ea sequi rem cumque nesciunt similique, magnam velit exercitationem ipsam a autem assumenda optio architecto eveniet cum distinctio natus.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first" >

                    
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab tow</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjetCard
                                        key={index}
                                        {...project} 
                                        />
                                    )
                                })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjetCard
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
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorShar2} alt="" />
      </section>
    </div>
  )
}

export default Projects
