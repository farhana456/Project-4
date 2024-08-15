//import img1 from './images/logo_nemesis.pn
//import sidebar from './Components/Sidebar';
import { useState } from 'react';
import Sidebar from './Sidebar';
import SubscribeForm from './SubscribeForm';
import Banner from './Banner';
import Footer from './Footer';
import { Link } from 'react-router-dom';



export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(


     <>
     <Sidebar show={show} handleClose={handleClose} handleShow={handleShow}/>
    

      <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
        <div className="container nav-mobile-px clearfix">
          <div className="navbar-brand order-2 order-xl-1 m-auto">
            <a href="./index.html">
              <img alt="logo" src="./images/logo_nemesis.png" />
            </a>
          </div>
          <button
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler order-1 order-xl-2"
            data-target="#navbar-menu"
            data-toggle="collapse"
            type="button"
          >
            ☰
          </button>
          <div className="header-buttons order-3 order-lg-4">
            <span className="fa fa-search navbar-search search-trigger"></span>
            <span className="fbt-sidenav ml-1 active" onClick={handleShow}>
              ☰
            </span>
          </div>
          <div
            className="collapse navbar-collapse order-4 order-xl-3 clearfix"
            id="navbar-menu"
          >
            <ul className="navbar-nav m-auto clearfix">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                >
                  Home
                </a>
                <div className="dropdown-menu">
                  <Link to={"/"} className="dropdown-item">
                    Home 1
                  </Link>
                  <Link to={"/HomeTwo"} className="dropdown-item">
                    Home 2
                  </Link>
                  <Link to={"/HomeThree"} className="dropdown-item">
                    Home 3
                  </Link>
                  <Link to={"/HomeFour"} className="dropdown-item">
                    Home 4
                  </Link>
                  <Link to={"/HomeFive"} className="dropdown-item">
                    Home 5
                  </Link>
                  <Link to={"/Blog"} className="dropdown-item">
                    Home 6
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/Contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sport
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Policy
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-toggle="dropdown"
                >
                  Features
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Feature 1
                  </a>
                  <a href="#" className="dropdown-item">
                    Feature 2
                  </a>
                  <a href="#" className="dropdown-item">
                    Feature 3
                  </a>
                  <a href="#" className="dropdown-item">
                    Feature 5
                  </a>
                  <a href="#" className="dropdown-item">
                    Feature 6
                  </a>
                  <a href="#" className="dropdown-item">
                    Feature 7
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/ErrorPage"} className="nav-link">
                  Error Page
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Lifestyle
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Banner/>
      <SubscribeForm/>
      <Footer/>

      
    </>

  )
    
   
}  
