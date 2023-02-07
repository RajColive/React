import React from "react";
import { Link } from "gatsby"
import { Container } from "react-bootstrap";
import img from '../../images/header-logo.png';
import img2 from '../../images/header-logo.png';
import './Footer.scss';
const Footer = () => {
    return (
        <section className="footer">
            <Container>
                <div className="details">
                    <Link  href="#" className="footer-logo">
                        <picture>
                            <source media="(min-width:1200px)" srcSet={img2} alt="banner" />
                            <img src={img} alt="img" />
                        </picture>
                    </Link>
                </div>
                <div className="footer-descripton">
                    <div className="footer-content">
                        <span className="copy-right">
                            Copyright @ Colive 2022
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export { Footer };




