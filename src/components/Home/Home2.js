import { Container, Row, Col } from "react-bootstrap";
import avatar from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <strong className="orange">INTRODUCE</strong> MYSELF
            </h1>
            <p className="home-about-body">
              With a knack for problem-solving and a love for clean, efficient
              code, I specialize in building intuitive and user-friendly
              applications. I thrive on tackling complex challenges and turning
              ideas into reality through code.
              <br />
              <br />
              Outside of coding, you can find me
              <i className="orange">hiking, running and palying basketball,</i>
              which helps keep me inspired and brings fresh perspectives to my
              work.
              <br />
              <br />
              <b>
                Let’s connect! Whether it’s to talk tech or share ideas, I’d
                love to hear from you.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img src={avatar} alt="avatar" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="orange">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/blacksnow0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/blacksnow0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/blacksnow0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/blacksnow0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
