import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import './ProductBanner.scss';
import ScrollAnimation from "react-animate-on-scroll";
import axios from 'axios';

const ProductBanner = (props)=> {
// export default class ProductBanner extends React.Component {
    // state = {
    //     props?.propertyData?s: [] = []
    // }

    // componentDidMount() {
    //     axios.post(`https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties`, { "CategoryId": 1 })
    //         .then(res => {
    //             const props?.propertyData?s = [res.data.Data.PrimeProperties[0]];
    //             this.setState({ props?.propertyData?s });
    //             console.log("xxxxxx", props?.propertyData?s)
    //         })
    // }

    // render() {
        return (
            <React.Fragment>
                <ScrollAnimation animateIn="fadeInUp">
                                <section className="property-card product-banner">
                                    <div className="product-card-img img-zoom">
                                        <Carousel>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                        </Carousel>
                                        <div className="product-btn">
                                            <storng className="video-btn" >
                                                <i className="icon-video" onClick={e => { }}>
                                                </i>
                                            </storng>
                                        </div>
                                    </div>
                                    <div className="product-card-details">
                                        <h2>{props?.propertyData?.PropertyName}</h2>
                                        <div className="price-details">
                                            <span className="price-list order-md-2">
                                                GUIDE PRICE ₹{props?.propertyData?.Price}
                                            </span>
                                            <span className="sm-title order-md-1">
                                                {props?.propertyData?.SubLocation}
                                            </span>
                                        </div>
                                        <div className="product-icons">
                                            <span className="details">
                                                <i className="icon-bed-room d-md-none">
                                                </i>
                                                <span className="quantity">
                                                    {props?.propertyData?.Amenities[0].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                    {props?.propertyData?.Amenities[0].AmenityName}
                                                </span>
                                            </span>
                                            <span className="details">
                                                <i className="icon-bath-room d-md-none">
                                                </i>
                                                <span className="quantity">
                                                {props?.propertyData?.Amenities[1].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                {props?.propertyData?.Amenities[1].AmenityName}
                                                </span>
                                            </span>
                                            <span className="details">
                                                <i className="icon-reception d-md-none">
                                                </i>
                                                <span className="quantity">
                                                {props?.propertyData?.Amenities[2].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                {props?.propertyData?.Amenities[2].AmenityName}
                                                </span>
                                            </span>
                                            <span className="sm-text text d-none d-md-block">
                                                {props?.propertyData?.PropertyRating} <br/>Ratings
                                            </span>
                                        </div>
                                        <div className="d-none d-xl-block buttons">
                                            <a href="#" className="btn btn-primary">
                                                enquire now
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </ScrollAnimation>

                {/* <>
                    {
                        this.state.props?.propertyData?s.map(props?.propertyData? =>

                            <ScrollAnimation animateIn="fadeInUp">
                                <section className="property-card product-banner">

                                    <div className="product-card-img img-zoom">
                                        <Carousel>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <picture>
                                                    <source media="(min-width:1200px)" srcSet={props?.propertyData?.DetailedImageName} />
                                                    <source media="(min-width:768px)" srcSet={props?.propertyData?.TileImageName} />
                                                    <img src={props?.propertyData?.ImageName} alt="img" />
                                                </picture>
                                            </Carousel.Item>
                                        </Carousel>
                                        <div className="product-btn">
                                            <storng className="video-btn" >
                                                <i className="icon-video" onClick={e => { }}>
                                                </i>
                                            </storng>
                                        </div>
                                    </div>
                                    <div className="product-card-details">
                                        <h2>{props?.propertyData?.PropertyName}</h2>
                                        <div className="price-details">
                                            <span className="price-list order-md-2">
                                                GUIDE PRICE ₹{props?.propertyData?.Price}
                                            </span>
                                            <span className="sm-title order-md-1">
                                                {props?.propertyData?.SubLocation}
                                            </span>
                                        </div>
                                        <div className="product-icons">
                                            <span className="details">
                                                <i className="icon-bed-room d-md-none">
                                                </i>
                                                <span className="quantity">
                                                    {props?.propertyData?.Amenities[0].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                    {props?.propertyData?.Amenities[0].AmenityName}
                                                </span>
                                            </span>
                                            <span className="details">
                                                <i className="icon-bath-room d-md-none">
                                                </i>
                                                <span className="quantity">
                                                {props?.propertyData?.Amenities[1].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                {props?.propertyData?.Amenities[1].AmenityName}
                                                </span>
                                            </span>
                                            <span className="details">
                                                <i className="icon-reception d-md-none">
                                                </i>
                                                <span className="quantity">
                                                {props?.propertyData?.Amenities[2].AmenityId}
                                                </span>
                                                <span className="title d-none d-md-block">
                                                {props?.propertyData?.Amenities[2].AmenityName}
                                                </span>
                                            </span>
                                            <span className="sm-text text d-none d-md-block">
                                                {props?.propertyData?.PropertyRating} <br/>Ratings
                                            </span>
                                        </div>
                                        <div className="d-none d-xl-block buttons">
                                            <a href="#" className="btn btn-primary">
                                                enquire now
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </ScrollAnimation>
                        )
                    }
                </> */}
            </React.Fragment>
        )
    }

    export default ProductBanner