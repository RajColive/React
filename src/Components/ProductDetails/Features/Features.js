import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import { Container, Col, Row } from "react-bootstrap";
import img01 from '../../../images/product-details/contact-img.jpg';
import img02 from '../../../images/product-details/image-contact.jpg';
import './Features.scss'

/**
 * Feature function component
 * @param {} props 
 * @returns component
 */
const Features = (props) => {
    const anchorRef = useRef(null); // creating ref for anchor tag
    const [isReadMore, setReadMore] = useState(false) // local state for less/expand readmore

    //Handle read more and less class
    React.useEffect(() => {
        anchorRef.current.onclick = () => {
            setReadMore(!isReadMore)

            if (!isReadMore == false) {
                var ReadMoreOffset = document.getElementById("offset_top")
                window.scrollTo(0, ReadMoreOffset.offsetTop)
            }

        }
    }, [isReadMore]);

    return (
        <section className="features">

            <Container>
                <Row>

                    <Col xl={7}>
                        <ScrollAnimation animateIn='fadeInLeft'>

                            <div className="features-descripton">
                                <h3>Property Highlights</h3>
                                <p>Located in Naidu Layout, Colive Hackensack is one of the best known affordable properties in the Whitefield area. Styled in 1 RK studio rooms without a kitchen, this property serves best to the bachelors looking for a hassle-free single occupancy room.</p>
                                <ul className="listing">
                                    <li>
                                        Housekeeping - Bi Weekly
                                    </li>
                                    <li>
                                        Community Water Purifier
                                    </li>
                                    <li>
                                        Community Washing Machine
                                    </li>
                                    <li>
                                        Common Refrigerator
                                    </li>
                                    <li>
                                        Lift & Power Back up
                                    </li>
                                    <li>
                                        Geyser
                                    </li>
                                    <li>
                                        Breakfast & Dinner
                                    </li>
                                </ul>
                                <div className={`feature-content ${isReadMore ? 'expand' : ''}`}>
                                    <p>Equipped with modern amenities, Colive Hackensack comes in double occupancy, single occupancy and triple sharing options. This property is the best choice for you to move-in if you want a comfortable home alongside modern design and tech-enabled safety features.</p>
                                    <p>Well-placed near Whitefield, Colive Hackensack is one of the finest places to stay in Bangalore. It not only offers you a charming, furnished studio room to reside in but also is surrounded by a number of restaurants and clubs to enjoy a premium stay alongside the ambience of pubs and places to enjoy with friends and family. From hip eateries and clubs to relaxed coffee shops and gorgeous atmospheres, there is nothing more you can really ask for. Stylish, safe and affordable, Hackensack is very close to the top corporate offices and tech parks like the Kalyani Tech Park and international Tech Park.</p>
                                </div>
                                <div id="offset_top" className="more">
                                    <span className="read-more" ref={anchorRef}>
                                        {!isReadMore ? "Read More" : "Read Less"}
                                    </span>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col xl={5} className="ml-xl-auto pl-md-0 d-xl-flex">
                        <ScrollAnimation animateIn='fadeInRight' className="ml-xl-auto">

                            <div className="contact-wrapper img-zoom">
                                <div className="contact-img d-none d-md-block">
                                    <picture>
                                        <source media="(min-width:1200px)" srcSet={img02} />
                                        <img src={img01} alt="img" />
                                    </picture>

                                </div>
                                <div className="contact-info">
                                    <h2>
                                        Parties at Colive
                                    </h2>
                                    <address className="d-none d-xl-block">
                                        We party every weekend at our flagship Club Colive Hubs! Join us to meet, dance, date & network in your Colive community
                                    </address>
                                    <Link href="#" className="btn">
                                        View Party Hubs
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
export default Features