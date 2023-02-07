import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap";
import Homeimg01 from '../../../images/home-1.jpg';
import Homeimg02 from '../../../images/home-2.jpg';
import img from '../../../images/image-desktop01.jpg';
import img2 from '../../../images/desktop-home02.jpg';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import './SimilarProperties.scss';
const SimilarProperties = (props) => {
    const settings = {
        dots: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },
            {
                breakpoint: 377,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                },
            },
        ],
    }
    return (
        <section className="similar-properties">
            <Container>
                <ScrollAnimation animateIn='fadeInUp'>
                    <h3>Homes like this are Hard to Find</h3>
                    <Slider className="slick-arrow" {...settings}>
                        <div className="slider-wrap">
                            <div class="slider">
                                <div className="home-img">
                                    <Link href="#">
                                        <picture>
                                            <source media="(min-width:1200px)" srcSet={img} />
                                            <img src={Homeimg01} alt="img" />
                                        </picture>
                                    </Link>

                                    <div className="home-content">
                                        <h4>Colive 179 Signature Towers</h4>
                                        <span className="price">Guide Price ₹15,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-wrap">
                            <div class="slider">
                                <div className="home-img">
                                <Link href="#">
                                        <picture>
                                        <source media="(min-width:1200px)" srcSet={img2} />
                                        <img src={Homeimg02} alt="img" />
                                        </picture>
                                    </Link>
                                    <div className="home-content">
                                        <h4>Colive 504 Garnet (Prime Plus)</h4>
                                        <span className="price">Guide Price ₹22,500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-wrap">
                            <div class="slider">
                                <div className="home-img">
                                    <Link href="#">
                                        <picture>
                                            <source media="(min-width:1200px)" srcSet={img2} />
                                            <img src={Homeimg02} alt="img" />
                                        </picture>
                                    </Link>

                                    <div className="home-content">
                                        <h4>Colive 721 Bollywood villa (Bangalore)</h4>
                                        <span className="price">Guide Price ₹18,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-wrap">
                            <div class="slider">
                                <div className="home-img">
                                    <Link href="#">
                                        <picture>
                                            <source media="(min-width:1200px)" srcSet={img} />
                                            <img src={Homeimg01} alt="img" />
                                        </picture>
                                    </Link>
                                    <div className="home-content">
                                        <h4>Colive 068 Hackensack</h4>
                                        <span className="price">Guide Price ₹15,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </ScrollAnimation>
            </Container>
        </section>
    )
};
export default SimilarProperties