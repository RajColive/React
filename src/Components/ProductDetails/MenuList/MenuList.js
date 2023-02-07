import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Col, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll"
import './MenuList.scss'
const MenuList = (props) => {
    return (
        <section className="menu-list">
            <ScrollAnimation animateIn='fadeInUp'>

                <Container>
                    <Row>
                        <Col>
                            <ul className="list-menu">
                                <li className="active">
                                    <Link href="#">Colive</Link>
                                </li>
                                <li>
                                    <Link href="#">Very Close</Link>
                                </li>
                                <li>
                                    <Link href="#">Few Suggestions</Link>
                                </li>
                                <li>
                                    <Link href="#">Map</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="social-icons d-none d-xl-flex">
                        <span className="sm-content">
                            Share
                        </span>
                        <ul className="icons-list">
                            <li>
                                <Link href="#" className="links">
                                    <i className="icon-twitter">
                                    </i>
                                </Link>
                                <Link href="#" className="links">
                                    <i className="icon-fb">
                                    </i>
                                </Link>
                                <Link href="#" className="links">
                                    <i className="icon-insta">
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Container>
                </ScrollAnimation>
       </section>
    )
};
export default MenuList