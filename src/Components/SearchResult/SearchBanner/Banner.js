import React from "react";
import { Container } from "react-bootstrap";
import './Banner.scss'

const SearchResult = (props) => {
    return (
        <section className="Search-banner ">
            <Container>
                <div className="row ">
                    <div className="col-md-12 ">
                        <span className="sm-text ">
                            114 Prime Properties
                        </span>
                        <h1>Premium Co-living</h1>
                        <p className="onscroll-react-class">Colive The Address is a premium location in Bellandur. The property is single and double sharing 1 BHK apartment with living room and kitchen facility.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
};
export default SearchResult