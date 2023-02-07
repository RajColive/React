import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import './Map.scss'
import GoogleMapReact from 'google-map-react';
import StickyBox from "react-sticky-box";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {
    const defaultProps = {
        center: {
            lat: 12.9689313,
            lng: 77.694845
        },
        zoom: 17
    };

    return (

        <React.Fragment>
            <section className="map d-none d-md-block mt-5 pt-4">
                <StickyBox offsetTop={20} offsetBottom={20}>
                    <ScrollAnimation animateIn='fadeIn'>
                        <div style={{ height: '72vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBiPQI-uFaVrMyY73jpIOLT2Mt_S9I-HCI" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                {/* <AnyReactComponent
                                    lat={12.9689313}
                                    lng={77.694845}
                                    text=""
                                /> */}
                            </GoogleMapReact>
                        </div>
                    </ScrollAnimation>
                </StickyBox>
            </section>
        </React.Fragment>
    )
};
export default Map