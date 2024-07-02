import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react"; 
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerImg from '../assets/img/header-img.svg';
// import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["Web Developer", "Java Coder", "REACT Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 500;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, isDeleting, text, toRotate, period]); // Ensure all dependencies are included
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
    
        return () => { clearInterval(ticker); };
    }, [tick, delta]);
    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animated_animated animated_FadeIn" : ""}>
                                    <span className="tagline"> Welcome to my Portfolio</span>
                                    <h1>{`Hi I'm Sarang, `} <span className="wrap">{text}</span> </h1>   
                                    <p>Hello! I'm Sarang Bainalwar, a passionate coding enthusiast and web developer based in Nagpur. With a strong foundation in React, Nodejs, and Java, I thrive on creating captivating digital experiences and robust backend solutions.</p>   
                                    <button onClick={() => console.log('connect')}>Let's connect
                                        <ArrowRightCircle size={25}/>
                                    </button>
                                </div>}  
                        </TrackVisibility> 
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
