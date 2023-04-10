import { Container, Row, Col } from 'react-bootstrap';
import { 
    AiFillGithub
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="green"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I have recently graduated from the UCF Full Stack Coding Bootcamp. This portfolio is to display the skills I learned as well as I plan to continue updating this as I gain more experience.
                <br />
                <br />I am fluent in languages like
                <i>
                  <b className="green"> Javascript, Node.js, and SQL. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="green">Applications and Websites </b>
                </i>
                <br />
                <br />
              </p>
            </Col>
            <Col md={4} className="myAvtar">
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="green">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/N3tRunn3rr"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/kenji-fleming/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaLinkedinIn />
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