import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react'; 
import logo from '../assets/img/logo-white.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
// import navIcon2 from '../assets/img/nav-icon2.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg'
import resume from '../assets/img/resume.png'
import git from '../assets/img/github-mark.svg'

const NavigationBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

useEffect (() => {
    const onScroll = () =>{
        if (window.scrollY > 50){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    window.addEventListener( "scroll", onScroll );
    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {

}

      return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'>

                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'pojects'? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projets')}>Projects</Nav.Link>
                
              </Nav>
              <span className="navartext">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/sarang-bainalwar-748a1822a/"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/sarangbainalwar"><img src={git} alt="" /></a>
                    <a href="https://drive.google.com/file/d/1yQWMeC85MF9B9mqCxaqhxeD1E9Jr4z1r/view?usp=sharing"><img src={resume} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('çonnect')}> <span>Let's Connect</span> </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    export default NavigationBar;
