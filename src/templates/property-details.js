import React, { useRef, useEffect, useState } from "react"
import axios from "axios";
import { Link } from "gatsby"
import { Header } from "../Components/Header/Header"
import ProductBanner  from "../Components/ProductDetails/ProductBanner/ProductBanner"
import MenuList  from "../Components/ProductDetails/MenuList/MenuList"
import Features  from "../Components/ProductDetails/Features/Features"
import ProductService  from "../Components/ProductDetails/ProductService/ProductService"
import SimilarProperties  from "../Components/ProductDetails/SimilarProperties/SimilarProperties"
import Map  from "../Components/SearchResult/Map/Map"
import Enquiry  from "../Components/ProductDetails/Enquiry/Enquiry"
import { Footer } from "../Components/Footer/Footer"

// https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties

// const [ data, setData] = useState([]);

// const getData = async () => {
//     const {data} = await axios.get(`https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties`);
//     setData(data);
// }

// useEffect(() => {
//     getData();
// })

// console.log("$$$$$$---", data)

const PropertyDetails = (props) => {

    const [ data, setData] = useState([]);

// const getData = async () => {
//     const {data} = await axios.get(`https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties`, { "CategoryId": 1 });
//     setData(data);
// }

// const propertycard = res.data.Data.PrimeProperties;
useEffect(() => {
    // getData();
    axios.post(`https://api.colive.com/web/live/CRMapi/PropertyCRM/GetPrimeProperties`, { "CategoryId": 1 }).then((res) => {
        setData(res?.data?.Data?.PrimeProperties);
        // console.log("$$$$$$-----", data);
    })
})

const pageurl = typeof window !== 'undefined' ? window.location.href : ""
let coliveId = pageurl.split('colive_')
let coliveProID = "CoLive_"+coliveId[1] || "Colive_"+coliveId[1] || "colive_"+coliveId[1] || "coLive_"+coliveId[1];
// let coliveProID = coliveId[1];  

const allProperties = data.filter(dataValue => coliveProID === dataValue?.Link)

console.log("$$$$$$-----", coliveProID, allProperties);

    return (
        <div className="wrapper slide">
            <Header />
            {
                allProperties.map((data,i) => {
                    return (
                        <>
                            <ProductBanner propertyData={data} />
                            <MenuList />
                            <Features />
                            <ProductService />
                            <SimilarProperties />
                            <Map />
                        </>
                    )
                })
            }
            {/* {JSON.stringify(data)} */}
            <Footer />
          <Enquiry />
       </div>
    )
}

export default PropertyDetails