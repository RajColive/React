import React from "react"
import './PaymentDetails.scss'
import ScrollAnimation from "react-animate-on-scroll"
import { Container, Row, Col, Form } from "react-bootstrap"
import img01 from '../../../images/product-details/jessica.png';
import img from '../../../images/product-details/james.png';
const PaymentDetails = (props) => {
    return (
        <section className="payment">
            <ScrollAnimation animateIn='fadeInUp'>
                <Container>
                    <Row>
                        <Col >
                            <div className="payment-details">
                                <h3>Calculate your Mortgage Repayments</h3>
                                <div className="payment-wrapper">
                                    <div className="form-data">
                                        <Form className="form-field">
                                            <Form.Group>
                                                <Form.Label>property value</Form.Label>
                                                <Form.Control type="number" placeholder="4750000" />
                                                <span>
                                                    &#163;
                                                        </span>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Interest rate (%)</Form.Label>
                                                <Form.Control type="number" placeholder="3.92" />

                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>deposit amount</Form.Label>
                                                <Form.Control type="number" placeholder="475000" />
                                                <span>
                                                    &#163;
                                                        </span>
                                            </Form.Group>
                                            <Form.Group >
                                                <Form.Label>term (years)</Form.Label>
                                                <Form.Control type="number" placeholder="35" />
                                            </Form.Group>
                                        </Form>
                                        <div className="payments">
                                            <span className="re-payment">
                                                monthly repayment
                                            </span>
                                            <span className="price">
                                                £18,615
                                   </span>
                                        </div>
                                    </div>
                                    <div className="our-advisors">
                                        <h5>Speak with one of our Mortgage Advisors</h5>
                                        <div className="author-info">
                                            <div className="images">
                                                <div className="author-img">
                                                    <figure>
                                                        <img src={img01} alt="img" />
                                                    </figure>
                                                </div>
                                                <div className="about-img">
                                                    <h4>jessica</h4>
                                                    <a href="tel:+07891293304" className="tel">07891 293 304</a>
                                                </div>
                                            </div>
                                            <div className="images">
                                                <div className="author-img">
                                                    <figure>
                                                        <img src={img} alt="img" />
                                                    </figure>
                                                </div>
                                                <div className="about-img">
                                                    <h4>james</h4>
                                                    <a href="tel:+07284293200" className="tel">07284 293 200</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </section>
    )
};
export default PaymentDetails