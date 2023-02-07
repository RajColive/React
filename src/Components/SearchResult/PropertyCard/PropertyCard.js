import React, { useState } from "react"
import { Container, Col, Row, Pagination, Carousel } from "react-bootstrap"
import PlayVideo from "../../Play/PlayVideo"
import SellProduct from "../SellProduct/SellProduct"
import { v4 as uuidv4 } from "uuid"
import "./PropertyCard.scss"
import ScrollAnimation from "react-animate-on-scroll"
import CardList from "./CardList"
import Map from "../Map/Map"
import axios from 'axios';

/**
 * Functional component for creating  PropertyCard UI
 * @param parent props
 * @returns CardList component
 */

export default class PropertyCard extends React.Component {
  state = {
    propertycard: [] = []
  }

  componentDidMount() {
    axios.post(`https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties`, { "CategoryId": 1 })
      .then(res => {
        const propertycard = res.data.Data.PrimeProperties;
        this.setState({ propertycard });
        console.log("ddddd", propertycard)
      })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.propertycard &&
          <>
            <section className="property-card mb-5">
              <Container>
                <Row>
                  <Col xl={8}>

                    <ScrollAnimation animateIn="fadeInUp">
                      <section
                        className={`property-card mt-5 ${""}`}
                        key={uuidv4()}
                      >
                        <Row>
                          {
                            this.state.propertycard.map(propertycard => (
                              <Col xl={6}>
                                <div className="box-card-shadow">
                                  <div className="product-card-img img-zoom">
                                    <picture className="d-xl-none">
                                      <source
                                        media="(min-width:768px)"
                                        srcSet={propertycard.Link}
                                      />
                                      <img src={propertycard.Link} alt="img" />
                                    </picture>
                                    <Carousel className="d-none d-xl-block w-100">
                                      <Carousel.Item key={uuidv4()}>
                                        <img src={propertycard.ImageName} alt="img" />
                                      </Carousel.Item>
                                    </Carousel>
                                    <div className="product-btn" style={{ zIndex: 90 }}>
                                      <storng
                                        className="video-btn"
                                      >
                                        <i
                                          className="icon-video"
                                        ></i>
                                      </storng>
                                    </div>
                                  </div>
                                  <div className="product-card-details">
                                    <h2>
                                      {/* <a href={`/property${propertycard.URL}-id-${propertycard.PropertyID}`}>
                                        {propertycard.PropertyName}, {propertycard.SubLocation}, {propertycard.City}
                                      </a> */}
                                      <a href={`/property${propertycard.URL}`}>
                                        {propertycard.PropertyName}, {propertycard.SubLocation}, {propertycard.City}
                                      </a>
                                    </h2>
                                    <span className="sm-content">
                                      {propertycard.SubLocation}
                                    </span>
                                    <span className="price-list">
                                      Guide Price ₹{propertycard.Price}
                                    </span>
                                    <div className="product-icon">
                                      <span className="details" key={uuidv4()}>
                                        <i className="icon-bed-room d-md-none"></i>
                                        <span className="quantity">
                                          {propertycard.Amenities[0].AmenityId}
                                        </span>
                                        <span className="title d-none d-md-block">
                                          {propertycard.Amenities[0].AmenityName}
                                        </span>
                                      </span>
                                      <span className="details" key={uuidv4()}>
                                        <i className="icon-bed-room d-md-none"></i>
                                        <span className="quantity">
                                          {propertycard.Amenities[0].AmenityId}
                                        </span>
                                        <span className="title d-none d-md-block">
                                          {propertycard.Amenities[0].AmenityName}
                                        </span>
                                      </span>
                                      <span className="details" key={uuidv4()}>
                                        <i className="icon-bed-room d-md-none"></i>
                                        <span className="quantity">
                                          {propertycard.Amenities[0].AmenityId}
                                        </span>
                                        <span className="title d-none d-md-block">
                                          {propertycard.Amenities[0].AmenityName}
                                        </span>
                                      </span>
                                      <span className="sm-content-details">
                                        <span className="quantity">
                                          {propertycard.PropertyRating}
                                        </span>
                                        <span className="title d-none d-md-block">
                                          Property Rating
                                        </span>
                                      </span>
                                    </div>
                                    <p>The property is located in 11th cross, Bellandur Main Road next to Red Berry’s hot and cool. Read More...</p>
                                  </div>
                                </div>
                              </Col>
                            ))
                          }
                        </Row>
                      </section>
                    </ScrollAnimation>
                  </Col>
                  <Col xl={4} className="pr-xl-0">
                    <Map />
                  </Col>
                </Row>
              </Container>
            </section>
            <section className="pagination-item d-xl-none">
              <Container>
                <Row>
                  <Col>
                    <Pagination>
                      <Pagination.Prev className="prev-arrow"></Pagination.Prev>
                      <Pagination.Item>{1}</Pagination.Item>

                      <Pagination.Item active>{2}</Pagination.Item>
                      <Pagination.Item className="d-none d-md-block">
                        {3}
                      </Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item className="d-none d-md-block">
                        {8}
                      </Pagination.Item>
                      <Pagination.Item>{9}</Pagination.Item>
                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Next className="next-arrow"></Pagination.Next>
                    </Pagination>
                  </Col>
                </Row>
              </Container>
            </section>
          </>
          // )
        }
      </React.Fragment>
    )
  }
};
