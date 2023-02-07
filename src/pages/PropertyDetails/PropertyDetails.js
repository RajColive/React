import React from "react"
import { Header } from "../../Components/Header/Header"
import ProductBanner  from "../../Components/ProductDetails/ProductBanner/ProductBanner"
import MenuList  from "../../Components/ProductDetails/MenuList/MenuList"
import Features  from "../../Components/ProductDetails/Features/Features"
import ProductService  from "../../Components/ProductDetails/ProductService/ProductService"
import SimilarProperties  from "../../Components/ProductDetails/SimilarProperties/SimilarProperties"
import Map  from "../../Components/SearchResult/Map/Map"
import Enquiry  from "../../Components/ProductDetails/Enquiry/Enquiry"
import { Footer } from "../../Components/Footer/Footer"

const PropertyDetails = (props) => {
    return (
      <div className="wrapper slide">
        <Header />
          <ProductBanner />
          <MenuList />
          <Features />
          <ProductService />
          <SimilarProperties />
          <Map />
          <Footer />
          <Enquiry />
       </div>
    )
  };
  export default PropertyDetails