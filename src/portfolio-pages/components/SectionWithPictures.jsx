import * as React from "react"
import {Col, Container, Row} from "reactstrap";

const createPictures = (pictures, horizontal) => {
    var value = horizontal ? 50 : 30;

    var spacer = <Col sm={1}></Col>;

    console.log(pictures);

    var htmlPics = pictures.map(function (picture) {
        return <Col key={picture} sm="auto">
            <img className="image-shading" src={picture} alt={""}
                 style={{
                     width: `${value}vw`,
                 }}/>
        </Col>
    });

    var htmlPicsWithSpacers = [...htmlPics].map((e, i) => i < htmlPics.length - 1 ? [e, spacer] : [e]).reduce((a, b) => a.concat(b))

    return htmlPicsWithSpacers;
};

const SectionWithPictures = ({title, description, pictures, horizontal}) => {

    return (
        <div className="description-with-title">
            <h2>{title}</h2>
            <p>{description}</p>
            <Container>
                <Row>
                    {
                        createPictures(pictures, horizontal)
                    }
                </Row>
            </Container>
        </div>
    )
};


export default SectionWithPictures;