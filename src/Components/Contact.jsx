
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <div id="fbt-content-overlay" ></div>
    <form id="search" role="search">
        <div className="input">
            <input className="search" name="search" placeholder="Search..." type="text" />
            <button className="submit fa fa-search" type="submit" value=""></button>
        </div>
        <button id="close" type="reset" value="">×</button>
    </form>

     <div id="page-wrapper" className="page-view">

        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-1 order-xl-2"
                    data-target="#navbar-menu" data-toggle="collapse" type="button">☰</button>
                <div className="header-buttons order-3 order-lg-4">
                    <span className="fa fa-search navbar-search search-trigger"></span>
                    <span className="fbt-sidenav ml-1 active">☰</span>
                </div>
                <div className="collapse navbar-collapse order-4 order-xl-3 clearfix" id="navbar-menu">
                    <ul className="navbar-nav m-auto clearfix">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">Home</a>
                            <div className="dropdown-menu">
                                <Link to={"/"}className="dropdown-item">Home 1</Link>
                                <Link to={"/HomeTwo"}className="dropdown-item">Home 2</Link>
                                <Link to={"/HomeThree"}className="dropdown-item">Home 3</Link>
                                <Link to={"/HomeFour"}className="dropdown-item">Home 4</Link>
                                <Link to={"/HomeFive"}className="dropdown-item">Home 5</Link>
                                <Link to={"Blog"}className="dropdown-item">Home 6</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Contact"} className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Sport</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Policy</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">Features</a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Feature 1</a>
                                <a href="#" className="dropdown-item">Feature 2</a>
                                <a href="#" className="dropdown-item">Feature 3</a>
                                <a href="#" className="dropdown-item">Feature 5</a>
                                <a href="#" className="dropdown-item">Feature 6</a>
                                <a href="#" className="dropdown-item">Feature 7</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={"/ErrorPage"} className="nav-link">Error Page</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Lifestyle</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- .navbar end--> */}

        <div className="outer-wrapper clearfix" id="outer-wrapper">
            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">

                    {/* <!-- Main Wrapper --> */}
                    <div className="fbt-main-wrapper col-xl-12">

                        <div id="main-wrapper">
                            <div className="main-section" id="main_content">
                                    
                                <div className="blog-posts fbt-item-post-wrap">
                                    <div className="blog-post fbt-item-post">
                                        
                                        <div className="slider-container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="fbt-shape-container card shadow-none">
                                                        <div className="fbt-item-thumbnail radius-10">
                                                            <img alt="Contact Us" className="post-thumbnail" src="./images/page-img-1.jpg"/>
                                                        </div>
                                                        <div className="card-img-overlay radius-10">
                                                            <div className="fbt-page-shape-title d-table w-100">
                                                                <div className="d-table-cell align-middle">
                                                                    <div className="row justify-content-center">
                                                                        <div className="col-xl-8 col-lg-9 p-0">
                                                                            <h1 className="post-title display-4 text-white text-center">Contact Us</h1>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .slider-container end--> */}

                                        <div className="row justify-content-center">
                                            <div className="col-xl-8 col-lg-8 order-2 order-lg-1 mt-4 mt-lg-0">
                                                   
                                                <form id="fbt-contact-form" className="contact-form" method="POST" action="index.html">
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <div className="form-group">
                                                                <label >Name*</label>
                                                                <input className="form-control shadow-none radius-0" id="name" name="name" type="text"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="form-group">
                                                                <label >E-mail*</label>
                                                                <input className="form-control shadow-none radius-0" id="mail" name="mail" type="text"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="form-group">
                                                                <label >Website</label>
                                                                <input className="form-control shadow-none radius-0" id="website" name="website" type="text"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label >Mesage*</label>
                                                                <textarea className="form-control shadow-none radius-0" rows="9" id="message" name="message"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-success radius-0" type="submit" id="submit-contact">
                                                        <i className="fa fa-paper-plane-o mr-2"></i>Submit Message
                                                    </button>
                                                </form>

                                            </div>

                                            <div className="col-xl-3 col-lg-4 pl-lg-5 order-1 order-lg-2">
                                                <div className="fbt-sep-title">
                                                    <h4 className="title title-heading-left">Contact Us</h4>
                                                    <div className="title-sep-container">
                                                        <div className="title-sep sep-double"></div>
                                                    </div>
                                                </div>
                                                <p className="mb-4">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                    Ut porttitor leo vel nulla posuere accumsan. 
                                                    Suspendisse sed tortor eget justo aliquam euismod. 
                                                    Morbi ut massa et neque iaculis lacinia a eu...
                                                </p>
                    
                                                <div className="fbt-contact-info">

                                                    <div className="fbt-contact-info-box">
                                                        <div className="fbt-contact-info-box-content">
                                                            <div className="fbt-sep-title">
                                                                <h4 className="title title-heading-left">Webagency</h4>
                                                                <div className="title-sep-container">
                                                                    <div className="title-sep sep-double"></div>
                                                                </div>
                                                            </div>
                                                            <p>Vouliagmenis Ave 325, <br/>Athens CA 17575</p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="fbt-contact-info-box">
                                                        <div className="fbt-contact-info-box-content">
                                                            <div className="fbt-sep-title">
                                                                <h4 className="title title-heading-left">Email Us</h4>
                                                                <div className="title-sep-container">
                                                                    <div className="title-sep sep-double"></div>
                                                                </div>
                                                            </div>
                                                            <p>info@nemesis.com</p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="fbt-contact-info-box">
                                                        <div className="fbt-contact-info-box-content">
                                                            <div className="fbt-sep-title">
                                                                <h4 className="title title-heading-left">Call Us</h4>
                                                                <div className="title-sep-container">
                                                                    <div className="title-sep sep-double"></div>
                                                                </div>
                                                            </div>
                                                            <p>+123-456-7890</p>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                                {/* <!-- Widget end --> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-8 col-lg-9">
                                            <div className="blog-post-comments">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- #main-wrapper --> */}

                    </div>
                    {/* <!-- .fbt-main-wrapper --> */}

                    {/* <!-- Sidebar Wrapper --> */}
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <div className="sidebar-wrapper__content">
                            <div className="navigation-container clearfix">
                                <span className="closebtn" >×</span>
                            </div>
                            <div className="sidebar-top section" id="menu_sidebar">
                                <div className="widget LinkList">
                                    <div className="widget-content fbt-sidebar--menu">
                                        <ul className="list-group">
                                            <li className="list-group-item"><a href="/">HOME</a></li>
                                            <li className="list-group-item"><a href="#">ABOUT</a></li>
                                            <li className="list-group-item"><a href="#">SERVICES</a></li>
                                            <li className="list-group-item"><a href="#">CONTACT</a></li>
                                            <li className="list-group-item"><a href="#">PRIVACY</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar section" id="main_sidebar">
                                <div className="widget Label">

                                    <div className="fbt-sep-title">
                                        <h4 className="title title-heading-left">Categories</h4>
                                        <div className="title-sep-container">
                                            <div className="title-sep sep-double"></div>
                                        </div>
                                    </div>

                                    <div className="widget-content cloud-label--widget-content">
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Business</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Carousel</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Design</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Entertainment</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Featured</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Friends</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Home</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Lifestyle</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">People</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Slider</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Sport</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Technology</span></a>
                                        <a href="#"><span className="badge badge-success py-1 px-2 mb-1">Training</span></a>
                                    </div>
                                </div>
                                <div className="widget BlogArchive">
                                    <div className="fbt-sep-title">
                                        <h4 className="title title-heading-left">Archive</h4>
                                        <div className="title-sep-container">
                                            <div className="title-sep sep-double"></div>
                                        </div>
                                    </div>
                                    <div className="widget-content">
                                        <div id="ArchiveList">
                                            <div id="BlogArchive1_ArchiveList">
                                                <ul className="flat list-unstyled">
                                                    <li className="archivedate">
                                                        <a href="#">June<span className="post-count float-right badge badge-primary">2</span></a>
                                                    </li>
                                                    <li className="archivedate">
                                                        <a href="#">September<span className="post-count float-right badge badge-primary">1</span></a>
                                                    </li>
                                                    <li className="archivedate">
                                                        <a href="#">May<span className="post-count float-right badge badge-primary">1</span></a>
                                                    </li>
                                                    <li className="archivedate">
                                                        <a href="#">April<span className="post-count float-right badge badge-primary">1</span></a>
                                                    </li>
                                                    <li className="archivedate">
                                                        <a href="#">March<span className="post-count float-right badge badge-primary">26</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- #sidebar-wrapper --> */}
                </div>
            </div>
        </div>


        <div className="fbt-bottom-shape">
            <svg className="fbt-footer-wave-big" preserveAspectRatio="none" version="1.1" viewBox="5 0 1366 222"
                width="100%">
                <path
                    d="M-2.19,238H1366v-4.27c-67.87-24-146.44-43.08-230.75-53.19-253.33-27.78-293.94,51.64-541.13,29.89C318.08,186.31,289.49,32.92,6.9,11.73c-5.21-.42-10.56-.7-15.9-1V238Z"
                    transform="translate(9.5 -10.22)">
                </path>
            </svg>
        </div>
        {/* <!-- .fbt-bottom-shape --> */}

        <div className="footer-dark pt-4" id="footer-content">
            <div className="container pb-4">
                <div className="row clearfix">
                    <div className="col-lg-4">
                        <div className="footer-1" id="footer-1">
                            <div className="logoImage">
                                <div className="widget-content">
                                    <img alt="" src="./images/logo-light.png"/>
                                </div>
                            </div>
                            <div className="widget Text">
                                <div className="widget-content">
                                    <p>
                                        Phasellus deserunt. Convallis perspiciatis fusce fermentum accumsan, arcu
                                        aliquam, velit venenatis augue proin, enim etiam dolor.
                                        Mi ac lectus vitae cum, fusce purus posuere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ml-lg-auto">
                        <div className="footer-2 section" id="footer-2">
                            <div className="widget">
                                <h4 className="title title-heading">
                                    About
                                </h4>
                                <div className="widget-content list-label-widget-content">
                                    <ul className="list-unstyled">
                                        <li><a className="label-name" href="#">Home</a></li>
                                        <li><a className="label-name" href="#">Lifestyle</a></li>
                                        <li><a className="label-name" href="#"> People</a></li>
                                        <li><a className="label-name" href="#">Slider</a></li>
                                        <li><a className="label-name" href="#">Sport</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-3 section" id="footer-3">
                            <div className="widget">
                                <h4 className="title title-heading">
                                    Categories
                                </h4>
                                <div className="widget-content list-label-widget-content">
                                    <ul className="list-unstyled">
                                        <li><a className="label-name" href="#">Business</a></li>
                                        <li><a className="label-name" href="#">Design</a></li>
                                        <li><a className="label-name" href="#">Lifestyle</a></li>
                                        <li><a className="label-name" href="#">Technology</a></li>
                                        <li><a className="label-name" href="#">Training</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 last">
                        <div className="footer-4 section" id="footer-4">
                            <div className="widget">
                                <h4 className="title title-heading">
                                    Account
                                </h4>
                                <div className="widget-content list-label-widget-content">
                                    <ul className="list-unstyled">
                                        <li><a className="label-name" href="#">Business</a></li>
                                        <li><a className="label-name" href="#">Design</a></li>
                                        <li><a className="label-name" href="#">Entertainment</a></li>
                                        <li><a className="label-name" href="#">Featured</a></li>
                                        <li><a className="label-name" href="#">Technology</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="credits">
                <div className="container">
                    <div className="row divider py-4">
                        <div className="col-lg-6">
                            <div className="copyright-section text-center text-lg-left">
                                ©
                                <script>document.write(new Date().getFullYear());</script> Nemesis | All Rights Reserved
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-menu section" id="footer-menu">
                                <div className="widget socialList">
                                    <div className="widget-content">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-instagram"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#"><i className="fa fa-youtube-play"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- #footer-content --> */}

    </div>
    </>
  )
}
