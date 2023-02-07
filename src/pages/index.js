import * as React from "react"
import  SearchResult  from "./SearchResult/SearchResult"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/grunticon.scss";
import "../scss/bootstrap-overrides.scss";
import "../scss/global.scss";
const IndexPage = () => {
  return (
   <div className="wrapper">
      <SearchResult />
    </div>
  )
}

export default IndexPage
