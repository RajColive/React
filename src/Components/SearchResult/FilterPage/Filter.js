import React from "react";
import { Container, Col, Row,Form } from "react-bootstrap";
import './Filter.scss'

const FilterPage = (props) => {
  return (
    <section className="filter">
      <Container className="filtercontainer">
        <Row>
          <Col className="filter-fixed ">
            <Form className="form-data">
              <div className="search-box">
                <Form.Control type="search" placeholder="Premium Co-living" />
                <i className="icon-search">
                </i>
              </div>
              <div className="box-wrapper d-xl-flex">
                <div className="select-boxes order-xl-2">
                <Form.Control as="select" className="max">
                <option value="1">Max Price</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                </div>
                <div className="select-boxes order-xl-1">
                <Form.Control as="select">
                <option value="1">Min Price</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                </div>
                <div className="select-boxes order-xl-3">
                <Form.Control as="select" className="bedroom">
                <option value="1">Bedrooms</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                </div>
                <div className="select-boxes order-xl-4">
                <Form.Control as="select" >
                <option value="1">Property Type</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Control>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="view-list">
              <div className="menu-icons">
                <span className="menu-list active">
                  <i className="icon-list">
                  </i>
                  <span className="icon-text d-none d-md-block">
                  List View
                  </span>
                </span>
                <span className="menu-list">
                  <i className="icon-map">
                  </i>
                  <span className="icon-text d-none d-md-block">
                    Map View
                  </span>
                </span>
              </div>
              <div className="drop-down box">
                <select className="form-select"  aria-label="Default select example">
                  <option selected>Highest Price First</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
export default FilterPage