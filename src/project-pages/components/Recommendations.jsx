import * as React from "react"
import {Col, Container, NavLink, Row} from "reactstrap";
import ProjectSection from "./ProjectSection";
import ProjectSubsection from "./ProjectSubsection";
import {Link} from "react-router-dom";

const Recommendations = ({recommendation1, recommendation2}) => (
    <ProjectSection>
        <ProjectSubsection title="You may also like">
            <Container>
                <Row className="d-flex justify-content-sm-between">
                    <Col>
                        <Link to={recommendation1.link}>
                            <img className="recommendation-picture" src={recommendation1.src} alt=""/>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={recommendation2.link}>
                        <img className="recommendation-picture" src={recommendation2.src} alt=""/>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </ProjectSubsection>
    </ProjectSection>
);

export default Recommendations;