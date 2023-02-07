import React from "react";
import { Container, Col, Row} from "react-bootstrap";
import './SellProduct.scss'
const SellProduct = (props) => {
    return (

        <React.Fragment>
            <section className="sell-product mt-5">
                <Container className="p-0">
                    <Row>
                        <Col>
                         <div className="sell-info">
                         <h3>Are you ready to Move New Homes</h3>
                            <a href="#!" className="btn  btn-primary">
                                Contact Colive
                        </a>
                         </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
};
export default SellProduct