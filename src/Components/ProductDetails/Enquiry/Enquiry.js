import React from "react"
import { Container,Row,Col } from "react-bootstrap";
import './Enquiry.scss';
const Enquiry = (props) => {
    return ( <section className="enquiry d-xl-none">
            <Container>
            <Row>
                <Col>
                <a href="#" class="btn btn-primary">enquire now</a>
                </Col>
            </Row>
            </Container>
        </section> )
};
export default Enquiry;