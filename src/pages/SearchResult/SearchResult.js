import React, { useEffect } from "react"
import { Footer } from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import SearchBanner from "../../Components/SearchResult/SearchBanner/Banner"
import Filter from "../../Components/SearchResult/FilterPage/Filter"
import PropertyCard from "../../Components/SearchResult/PropertyCard/PropertyCard"
import { elementInViewport } from "../../UtilityJs"

/***
 * Search Result Component ( functional based )
 * @param parent props
 * @return component
 */
const SearchResult = props => {
  let [IsfilterHeadClass, setIsFilterHeadClass] = React.useState(false)

  /****
   *  Use Effect invoke at once if dependecie are not passed []
   *  Handling Scroll event
   */
  useEffect(() => {
    let container = document.querySelector(".onscroll-react-class") // local dom element
    // onScroll function

    const handleScroll = e => {
      if (!elementInViewport(container)) {
        setIsFilterHeadClass(true)
      } else {
        setIsFilterHeadClass(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // cleanup after component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <>
      <div className={`wrapper ${IsfilterHeadClass ? "headerfix" : ""}`}>
        <Header />
        <SearchBanner />
        <Filter />
        <PropertyCard />
        <Footer />
      </div>
    </>
  )
}
export default SearchResult
