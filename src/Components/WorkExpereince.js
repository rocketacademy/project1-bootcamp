import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function Work(){
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Container id="work">
        <h1>Professional Work Experience</h1>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Cisco</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h2>Cisco Certified Network Associate @ Cisco</h2>
                <p>
                  <ul>
                    <li>
                      Learnt how to install, operate, configure, and verify
                      basic IPv4 and IPv6 networks.
                    </li>
                    <li>
                      Covered configuring network components such as
                      switches,routers, and wireless LAN controllers; managing
                      network devices; and identifying basic security threats.
                    </li>
                    <li>
                      Established a foundation in network programmability,
                      automation, and software-defined networking.
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h2>Cisco Certified Network Associate @ Cisco</h2>
                <p>
                  <ul>
                    <li>
                      Learnt how to install, operate, configure, and verify
                      basic IPv4 and IPv6 networks.
                    </li>
                    <li>
                      Covered configuring network components such as
                      switches,routers, and wireless LAN controllers; managing
                      network devices; and identifying basic security threats.
                    </li>
                    <li>
                      Established a foundation in network programmability,
                      automation, and software-defined networking.
                    </li>
                  </ul>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
}
export default Work