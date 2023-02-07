import React, { useRef } from "react"
import { Link } from "gatsby"

import img from "../../images/header-logo.png"
import "./Header.scss"
import Helmet from "react-helmet";
// Header component
const Header = () => {
  let hamburger = useRef(null); // creating hamburger ref
  let primaryHeader = useRef(null); // Creating ref for hamburger

  // adding and removing class from main nav
  const handleHamBurgerClick = () => {
    if (Array.from(hamburger.current.classList).includes("open-navigation")) {
      primaryHeader.current.classList.remove("open-navigation");
      document.body.className = '';

    } else {
      primaryHeader.current.classList.add("open-navigation")
      document.body.className = '';

    }
    if (Array.from(hamburger.current.classList).includes("cross")) {
      hamburger.current.classList.remove("cross")
      primaryHeader.current.classList.remove("open-navigation")
      document.body.className = '';
    } else {
      hamburger.current.classList.add("cross")
      document.body.className += 'overflow-hidden';
    }
  }

  // function for toggle between + and - icons in nav Menu
  const toggleNav = e => {
    try {
      let isClassFound = e.target.classList.contains("icon-minus")
      if (!isClassFound) {
        let dom = document.getElementsByClassName("icon-vector icon-minus")
        let domSub = document.getElementsByClassName("sub-menu parent")
        let subNav = document.getElementsByClassName("navchild")
        let childIcons = document.getElementsByClassName("childicon")
        for (let element of subNav) {
          element.style.display = "none"
        }
        for (let element of domSub) {
          element.style.display = "none"
        }
        for (let element of dom) {
          element.classList.remove("icon-minus")
        }
        for (let element of childIcons) {
          element.classList.remove("icon-minus")
          element.classList.add("icon-vector")
        }
        e.target.classList.add("icon-minus")
        e.target.parentNode.nextSibling.style.display = "block"
        dom = null
      } else {
        e.target.classList.remove("icon-minus")
        let dom = document.getElementsByClassName("sub-menu parent")
        let subChild = document.getElementsByClassName("sub-menu child")
        for (let element of subChild) {
          element.style.display = "block"
        }

        for (let element of dom) {
          element.style.display = "none"
        }
        e.target.parentNode.nextSibling.style.display = "none"
      }
    } catch (e) {
    }
  }
  // function for toggle + and - in sub navigation
  const toggleNavChild = e => {
    let isClassFound = e.target.classList.contains("icon-minus");
    let subNav = document.getElementsByClassName("navchild");
    let subMenu = document.getElementsByClassName("childicon");
    let subMenuChild = document.getElementsByClassName("navchild");
    if (!isClassFound) {
      for (let element of subNav) {
        element.style.display = "block"
      }
      for (let element of subMenuChild) {
        element.style.display = "none"
      }

      for (let element of subMenu) {
        element.classList.remove("icon-minus")
      }
      e.target.classList.add("icon-minus");
      e.target.parentNode.nextSibling.style.display = "block"
    } else {
      for (let element of subNav) {
        element.style.display = "none"
      }

      e.target.classList.remove("icon-minus")
    }
  }

  return (
    <header className="primary-header " ref={primaryHeader}>
      <Helmet>
        <meta name="viewport" content="width=device-width; initial-scale=1.0, maximum-scale=1.0, user-scalabale=no" />
      </Helmet>
      <div className="logo">
        <Link href="#">
          <img src={img} alt="img" />
        </Link>
      </div>
      <nav className="nav-bar">
        <ul className="nav-menu">
          <li>
            <Link href="#">Property Search</Link>
          </li>
          <li>
            <Link href="#">Premium Co-living</Link>
          </li>
          <li>
            <Link href="#">Affordable Co-living</Link>
          </li>
          <li>
            <Link href="#">Paying Guest(PG)</Link>
          </li>
          <li>
            <Link href="#">Family Homes</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icons">
        <Link href="#">
          <i className="icon-call d-md-none"></i>
        </Link>
        <Link href="#">
          <i className="icon-account"></i>
        </Link>
        <button
          className="hamburger "
          ref={hamburger}
          onClick={handleHamBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      <div className="nav-wrap">
        <nav className="navigation">
          <div className="hamburger-wrap">
            <button
              className="hamburger hamburger-cross "

              onClick={handleHamBurgerClick}
            >
              <span></span>
              <span></span>
              <span></span>

            </button>
          </div>
          <ul className="nav-item">
            <li className="d-none d-md-none">
              <Link href='#'>
                Property Search
              </Link>
            </li>
            <li className="d-none d-md-none">
              <Link href='#'>
                Premium Co-living
              </Link>
            </li>
            <li className="d-none d-md-none">
              <Link href='#'>
                Affordable Co-living
              </Link>
            </li>
            <li className="d-none d-md-none">
              <Link href='#'>
                Paying Guest(PG)
              </Link>
            </li>
            <li className="d-none d-md-none">
              <Link href='#'>
                Family Homes
              </Link>
            </li>
            <li >
              <Link href="#">
                Premium Co-living <i className="icon-vector" onClick={toggleNav} onKeyDown={toggleNav} aria-label="buy"></i>
              </Link>
              <ul className="sub-menu parent">
                <li className="local-living">
                  <Link href="#">
                    Prime Properties
                    <i
                      className="icon-vector childicon"
                      onClick={toggleNavChild}
                      onKeyDown={toggleNavChild} aria-label="buy"
                    ></i>
                  </Link>
                  <ul className="sub-menu navchild">
                    <li>
                      <Link href="#">Winster</Link>
                    </li>
                    <li>
                      <Link href="#">Signature Towers</Link>
                    </li>
                    <li>
                      <Link href="#">Riga</Link>
                    </li>
                    <li>
                      <Link href="#">Morgan Hills</Link>
                    </li>
                    <li>
                      <Link href="#">Golden Square</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                Affordable Co-living
                <i className="icon-vector" onClick={toggleNav}
                  onKeyDown={toggleNav} aria-label="buy"
                >
                  {" "}
                </i>
              </Link>
              <ul className="sub-menu parent">
                <li className="local-living">
                  <Link href="#">
                    Select Properties
                    <i
                      className="icon-vector childicon"
                      onClick={toggleNavChild}
                      onKeyDown={toggleNavChild} aria-label="buy"
                    ></i>
                  </Link>
                  <ul className="sub-menu navchild">
                    <li>
                      <Link href="#">Venice</Link>
                    </li>
                    <li>
                      <Link href="#">Baltimore</Link>
                    </li>
                    <li>
                      <Link href="#">Sydney</Link>
                    </li>
                    <li>
                      <Link href="#">Aurich</Link>
                    </li>
                    <li>
                      <Link href="#">Omega</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">
                Paying Guest(PG)
                <i className="icon-vector" onClick={toggleNav}
                  onKeyDown={toggleNav} aria-label="buy"
                ></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                Family Homes
                <i className="icon-vector" onClick={toggleNav}
                  onKeyDown={toggleNav} aria-label="buy"
                ></i>
              </Link>
              <ul className="sub-menu parent">
                <li className="local-living">
                  <Link href="#">
                    Max Properties
                    <i
                      className="icon-vector childicon"
                      onClick={toggleNavChild}
                      onKeyDown={toggleNavChild} aria-label="buy"
                    ></i>
                  </Link>
                  <ul className="sub-menu navchild">
                    <li>
                      <Link href="#">Vishali</Link>
                    </li>
                    <li>
                      <Link href="#">Muniraju</Link>
                    </li>
                    <li>
                      <Link href="#">Venkatesh</Link>
                    </li>
                    <li>
                      <Link href="#">Chennappa</Link>
                    </li>
                    <li>
                      <Link href="#">Vedamurthi</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>


      <div className="fixed-header">

      </div>
    </header>
  )
}

export { Header }
