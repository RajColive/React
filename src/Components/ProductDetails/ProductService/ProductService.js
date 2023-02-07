import React from "react"
import MobImg from '../../../images/product-service/image01.png'
import TabletImg from '../../../images/product-service/image02.png'
import DesktoImg from '../../../images/product-service/image03.png'
import ScrollAnimation from 'react-animate-on-scroll';
import './ProductService.scss'
import { Container } from "react-bootstrap"
const ProductService = (props) => {
    return (
        <section className="product-service">
            <Container>
                <div className="row">
                    <div className="col-xl-6 col-md-6 d-xl-flex content_block_col">
                        <ScrollAnimation animateIn='fadeInLeft'>
                            <div className="about-service">
                                <div className="about-img">
                                    <picture>
                                        <source media="(min-width:1200px)" srcSet={DesktoImg} />
                                        <source media="(min-width:768px)" srcSet={TabletImg} />
                                        <img src={MobImg} alt="img" />
                                    </picture>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-xl-5 col-md-6 ml-xl-auto pl-md-0">
                        <ScrollAnimation animateIn='fadeInRight'>
                            <div className="service-description">
                                <h2>Location Highlights</h2>
                                <p>Well-placed near Whitefield, Colive Hackensack is one of the finest places to stay in Bangalore. It not only offers you a charming, furnished studio room to reside in but also is surrounded by a number of restaurants and clubs to enjoy a premium stay alongside the ambience of pubs and places to enjoy with friends and family.</p>
                                <p className="sm-description">From hip eateries and clubs to relaxed coffee shops and gorgeous atmospheres, there is nothing more you can really ask for. Stylish, safe and affordable, Hackensack is very close to the top corporate offices and tech parks like the Kalyani Tech Park and international Tech Park.</p>
                                <a href="#" className="btn btn-primary">
                                    view More
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </Container>
        </section>
    )
};
export default ProductService