import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
export default function HomeFive() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Sidebar show={show} handleClose={handleClose} handleShow={handleShow}/>
    <div id="fbt-content-overlay" ></div>
    <form id="search" role="search">
        <div className="input">
            <input className="search" name="search" placeholder="Search..." type="text" />
            <button className="submit fa fa-search" type="submit" value=""></button>
        </div>
        <button id="close" type="reset" value="">×</button>
    </form>

    <div id="page-wrapper" className="magazine-view feed-view">

         <div className="fbt-headline clearfix" id="headline">
            <div className="container">
                <div className="row align-items-center justify-content-between py-1 py-md-0">
                    <div className="col-md-7 left-headline-content">
                        <div className="fbt-left-headline" id="left-headline">
                            
                            <ul className="nav justify-content-center justify-content-md-start">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-5 right-headline-content">
                        <div className="fbt-right-headline" id="right-headline">
                            
                            <ul className="nav justify-content-center justify-content-md-end social-icons">
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

        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav m-0">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index-5.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-1 order-xl-2"
                    data-target="#navbar-menu" data-toggle="collapse" type="button">☰</button>
                <div className="header-buttons order-3 order-lg-4">
                    <span className="fa fa-search navbar-search search-trigger"></span>
                    <span className="fbt-sidenav ml-1 active" onClick={handleShow}>☰</span>
                </div>
                <div className="collapse navbar-collapse order-4 order-xl-3 clearfix" id="navbar-menu">
                    <ul className="navbar-nav m-auto clearfix">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">Home</a>
                            <div className="dropdown-menu">
                                <Link to={"/"} className="dropdown-item">Home 1</Link>
                                <Link to={"/HomeTwo"} className="dropdown-item">Home 2</Link>
                                <Link to={"/HomeThree"} className="dropdown-item">Home 3</Link>
                                <Link to={"/HomeFour"} className="dropdown-item">Home 4</Link>
                                <Link to={"/HomeFive"} className="dropdown-item">Home 5</Link>
                                <Link to={"/Blog"} className="dropdown-item">Home 6</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Contact"} className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a href="./blog.html" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item dropdown fbt-megamenu mega-category d-none d-xl-block">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Favorites</a>
                            <div className="dropdown-menu fullwidth sub-mega-category py-0">
                                <div className="container">
                                    <div className="row px-3">
                                        <div className="col-3 fbt-childs-cats px-0 py-3 border-left border-right">
                                            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                                                <a className="nav-link fbt-child-cat active" data-toggle="pill" href="#child-cat_1" role="tab" aria-selected="true">All</a>
                                                <a className="nav-link fbt-child-cat" data-toggle="pill" href="#child-cat_2" role="tab" aria-selected="false">Politics</a>
                                                <a className="nav-link fbt-child-cat" data-toggle="pill" href="#child-cat_3" role="tab" aria-selected="false">Lifestyle</a>
                                                <a className="nav-link fbt-child-cat" data-toggle="pill" href="#child-cat_4" role="tab" aria-selected="false">Sport</a>
                                            </div>
                                        </div>
                                        <div className="col-9 pr-0 py-4">
                                            <div className="tab-content fbt-megablock-cats">
                                                <div className="tab-pane fade show active" id="child-cat_1" role="tabpanel">
                                                    <div className="row px-2">
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-2.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-3.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Quisque lorem nulla, lacinia risus a, varius tempor est.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-4.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Suspendisse nec vehicula ipsum, a luctus metus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-5.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Duis lacinia lobortis, mollis magna vel, auctor tellus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                                {/* <!-- tab-1 --> */}
                                                <div className="tab-pane fade" id="child-cat_2" role="tabpanel">
                                                    <div className="row px-2">
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-6.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-7.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Quisque lorem nulla, lacinia risus a, varius tempor est.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-8.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Suspendisse nec vehicula ipsum, a luctus metus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-9.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Duis lacinia lobortis, mollis magna vel, auctor tellus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                                {/* <!-- tab-2 --> */}
                                                <div className="tab-pane fade" id="child-cat_3" role="tabpanel">
                                                    <div className="row px-2">
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-10.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-11.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Quisque lorem nulla, lacinia risus a, varius tempor est.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-12.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Suspendisse nec vehicula ipsum, a luctus metus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-13.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Duis lacinia lobortis, mollis magna vel, auctor tellus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- tab-3 --> */}
                                                <div className="tab-pane fade" id="child-cat_4" role="tabpanel">
                                                    <div className="row px-2">
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-14.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-15.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Quisque lorem nulla, lacinia risus a, varius tempor est.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-16.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Suspendisse nec vehicula ipsum, a luctus metus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col px-2">
                                                            <div className="fbt-mega-item">
                                                                <div className="fbt-post-thumbnail">
                                                                    <a href="./single_mag.html">
                                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-17.jpg"
                                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                                    </a>
                                                                </div>
                                                                <div className="title-caption pt-2 px-2">
                                                                    <h3><a href="#">Duis lacinia lobortis, mollis magna vel, auctor tellus.</a></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- tab-4 --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- .fbt-megamenu.mega-category --> */}
                        <li className="nav-item">
                            <Link to={"/ErrorPage"} className="nav-link">Error Page</Link>
                        </li>
                        <li className="nav-item dropdown fbt-megamenu mega-grid d-none d-xl-block">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lifestyle</a>
                            <div className="dropdown-menu fullwidth sub-mega-grid py-4">
                                <div className="container px-3">
                                    <div className="row px-2">
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-5.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption pt-2 px-2">
                                                    <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-8.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption pt-2 px-2">
                                                    <h3><a href="#">Quisque lorem nulla, lacinia risus a, varius tempor est.</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-9.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption pt-2 px-2">
                                                    <h3><a href="#">Suspendisse nec vehicula ipsum, a luctus metus.</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-11.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption pt-2 px-2">
                                                    <h3><a href="#">Morbi lobortis dolor eget dapibus lobortis.</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-16.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption pt-2 px-2">
                                                    <h3><a href="#">
                                                        Design Lorem ipsum dolor sit amet, consectetur.</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- .fbt-megamenu.mega-grid --> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link">Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="slider-container m-0 pt-5 pb-0">
            <div className="slider-container-row fbt-mag-slider" id="slider-posts">
                <div className="container-fluid px-xl-5">
                    <div className="row">

                        <div className="col-lg-6 pr-lg-1 mb-2 mb-lg-0">
                            <div className="post-item large">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <span className="post-tag index-post-tag">Family</span>
                                    <div className="title-caption p-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author"><a href="#">fbtemplates</a></span>
                                            <span className="post-time">February 29, 2020</span>
                                        </div>
                                        <h1 className="post-title w-75">
                                            <a href="./single_mag.html">
                                                Vestibulum maximus ipsum lacus, tempus suscipit augue.
                                            </a>
                                        </h1>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">

                                <div className="col-md-6 pl-lg-1 pr-md-1 mb-2 mb-md-0">
                                    <div className="post-item medium">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single_mag.html">
                                                <img className="post-thumbnail lazyloaded" data-src="./images/img-7.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption">
                                            <span className="post-tag index-post-tag">Technology</span>
                                            <div className="title-caption p-4">
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-time">December 31, 2019</span>
                                                </div>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-6 col-md-12 pl-md-1 grid-padding-right">
                                            <div className="post-item small_thumb">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img className="post-thumbnail lazyloaded" data-src="./images/img-11.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-post-caption">
                                                    <span className="post-tag index-post-tag">Nature</span>
                                                    <div className="title-caption p-4">
                                                        <div className="post-meta mb-2">
                                                            <span className="post-author"><a href="#">fbtemplates</a></span>
                                                            <span className="post-time">November 26, 2019</span>
                                                        </div>
                                                        <h3 className="post-title h5">
                                                            <a href="./single_mag.html">
                                                                Nulla sed eros sit amet ipsum mattis pulvinar quis quis sem.
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-12 pl-md-1 grid-padding-left">
                                            <div className="post-item small_thumb last">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single_mag.html">
                                                        <img className="post-thumbnail lazyloaded" data-src="./images/img-5.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-post-caption">
                                                    <span className="post-tag index-post-tag">Friends</span>
                                                    <div className="title-caption p-4">
                                                        <div className="post-meta mb-2">
                                                            <span className="post-author"><a href="#">fbtemplates</a></span>
                                                            <span className="post-time">September 12, 2019</span>
                                                        </div>
                                                        <h3 className="post-title h5">
                                                            <a href="./single_mag.html">
                                                                Nunc accumsan ex ligula, in sapien consectetur.
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="outer-wrapper my-5" id="outer-wrapper">

            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">
                    
                    <div className="fbt-magazine-section col-lg-8 mb-5 mb-lg-0">

                        <div className="widget fbt-block-1">
                            <div className="fbt-sep-title">
                                <h4 className="title title-heading-left">Donot Miss</h4>
                                <div className="title-sep-container">
                                    <div className="title-sep sep-double">
                                        <a href="#" className="view_more">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="fbt_mag_block fbt_list_posts">
                                <div className="fbt-large">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-21.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption text-center p-4 p-md-0 pr-md-4">
                                                <span className="post-tag index-post-tag">Design</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">June 19, 2019</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum fauc…
                                                    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- .fbt-large--> */}

                                <div className="fbt-small">
                                    <div className="row px-2">
                                        <div className="post col-md-4 mb-4 px-2">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-4.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="fbt-title-caption text-center pt-3 px-2">
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="post col-md-4 mb-4 px-2">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-8.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="fbt-title-caption text-center pt-3 px-2">
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Sed odio eros, dictum non augue et, tincidunt.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="post col-md-4 mb-4 px-2">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-3.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="fbt-title-caption text-center pt-3 px-2">
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Nunc tellus libero, tempus id luctus eget, fermentum.
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* <!-- .fbt-small --> */}

                            </div>
                        </div>
                        {/* <!-- .fbt-block-1 --> */}

                        <div className="widget fbt-block-2">
                            <div className="fbt-sep-title">
                                <h4 className="title title-heading-left">Technology</h4>
                                <div className="title-sep-container">
                                    <div className="title-sep sep-double">
                                        <a href="#" className="view_more">View all</a>
                                    </div>
                                </div>
                            </div>
                            <div className="fbt_mag_block">
                                <div className="row">
                                    
                                    <div className="col-lg-6 fbt_list_posts">
                                        <article className="post mb-3">
                                            <div className="post-content media align-items-center">
                                                <div className="fbt-item-thumbnail clearfix">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="ml-3 fbt-title-caption media-body">
                                                    <span className="pp-post-tag">Tech</span>
                                                    <h3 className="post-title">
                                                        <a href="./single_mag.html"> Ne amores quidem sanctos alienos esse.</a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-date published">March 27, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post mb-3">
                                            <div className="post-content media align-items-center">
                                                <div className="fbt-item-thumbnail clearfix">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="ml-3 fbt-title-caption media-body">
                                                    <span className="pp-post-tag">Family</span>
                                                    <h3 className="post-title">
                                                        <a href="./single_mag.html">Mihi vero, inquit, placet agi subtilius et pressius.</a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-date published">March 27, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post mb-3">
                                            <div className="post-content media align-items-center">
                                                <div className="fbt-item-thumbnail clearfix">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="ml-3 fbt-title-caption media-body">
                                                    <span className="pp-post-tag">Featured</span>
                                                    <h3 className="post-title">
                                                        <a href="./single_mag.html">Suspendisse sed tortor eget justo aliquam.</a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-date published">March 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="post mb-3">
                                            <div className="post-content media align-items-center">
                                                <div className="fbt-item-thumbnail clearfix">
                                                    <a href="./single_mag.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="ml-3 fbt-title-caption media-body">
                                                    <span className="pp-post-tag">Sport</span>
                                                    <h3 className="post-title">
                                                        <a href="./single_mag.html">Nunc accumsan ex ligula, in malesuada sapien.</a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-date published">March 28, 2017</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    {/* <!-- .fbt_list_posts --> */}
                                    <div className="col-lg-6">
                                        <div className="post-item large">
                                        
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="fbt-post-caption">
                                                <span className="post-tag index-post-tag">Design</span>
                                                <div className="title-caption p-4">
                                                    <div className="post-meta mb-2">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">June 19, 2019</span>
                                                    </div>
                                                    <h3 className="post-title">
                                                        <a href="./single_mag.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- .fbt-block-2 --> */}

                    </div>
                    {/* <!-- .fbt-magazine-section --> */}

                    <div className="fbt-magazine-sidebar col-lg-4">
                        <div className="fbt-magazine-sidebar__content h-100 pl-lg-3">
                            
                            <div className="sidebar-block fbt-social-counter mb-5">
                                <div className="fbt-sep-title">
                                    <h4 className="title title-heading-left">Connect with Us</h4>
                                    <div className="title-sep-container">
                                        <div className="title-sep sep-double"></div>
                                    </div>
                                </div>
                                <div className="widget">
                                    <ul className="social-list">
                                        <li className="social-item facebook fb">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-facebook"></i></span>
                                                <span className="item-counter">2340</span>
                                                <span className="item-text soc-btn">Fans</span>
                                            </a>
                                        </li>
                                        <li className="social-item twitter tw">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-twitter"></i></span>
                                                <span className="item-counter">3290</span>
                                                <span className="item-text soc-btn">Followers</span>
                                            </a>
                                        </li>
                                        <li className="social-item instagram instg">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-instagram"></i></span>
                                                <span className="item-counter">5212</span>
                                                <span className="item-text soc-btn">Followers</span>
                                            </a>
                                        </li>
                                        <li className="social-item delicious dl">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-delicious"></i></span>
                                                <span className="item-counter">214</span>
                                                <span className="item-text soc-btn">Followers</span>
                                            </a>
                                        </li>
                                        <li className="social-item foursquare fbt-foursquare">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-foursquare"></i></span>
                                                <span className="item-counter">732k</span>
                                                <span className="item-text soc-btn">Friends</span>
                                            </a>
                                        </li>
                                        <li className="social-item behance fbt-behance">
                                            <a href="#">
                                                <span className="soc-ic"><i className="item-icon fa fa-behance"></i></span>
                                                <span className="item-counter">1.3m</span>
                                                <span className="item-text soc-btn">Followers</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <!-- .social-list --> */}
                                </div>
                            </div>

                            <div className="fbt-sticky-content sticky-top fbt-ad-block mb-5">
                                <div className="fbt_ad text-center">
                                    <span className="fbt-ad-title">
                                        Advertisement <span className="ad_block"></span>
                                    </span>
                                    <div className="widget-content">
                                        <a href="#">
                                            <img alt="Advertisement" className="lazyloaded img-fluid" data-src="./images/city-300x600.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- .fbt-ad-block --> */}

                        </div>
                    </div>
                    {/* <!-- .fbt-magazine-sidebar --> */}

                </div>
            </div>

            <div className="fbt-gallery mb-5">
                <div className="container fbt-elastic-container fbt-gallery-1">
                    <div className="row px-2">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">

                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Ne amores quidem sanctos alienos esse.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Mihi vero, inquit, placet agi subtilius et pressius.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Suspendisse sed tortor eget justo aliquam.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Nunc accumsan ex ligula, in malesuada.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .fbt-gallery --> */}

            <div className="fbt-video-gallery mb-5">
                <div className="container fbt-elastic-container fbt-gallery-2">
                    <h4 className="title title-heading h2">
                        Featured Videos
                    </h4>
                    <div className="row">
                        <div className="fbt-main-gallery col-lg-8 mb-4 mb-lg-0">
                            <div className="post-item large">
                                        
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/single-1.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                </div>
                                <div className="fbt-post-caption">
                                    <span className="post-tag index-post-tag">Movie</span>
                                    <div className="title-caption p-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title h1 w-75">
                                            <a href="./single_mag.html">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 fbt_list_posts">
                            <div className="post-content pl-lg-3">
                                <article className="post mb-3">
                                    <div className="post-content media align-items-center">
                                        <div className="fbt-item-thumbnail clearfix">
                                            <a href="./single_mag.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="ml-3 fbt-title-caption media-body">
                                            <span className="pp-post-tag">Tech</span>
                                            <h3 className="post-title">
                                                <a href="./single_mag.html"> Ne amores quidem sanctos alienos esse.</a>
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post mb-3">
                                    <div className="post-content media align-items-center">
                                        <div className="fbt-item-thumbnail clearfix">
                                            <a href="./single_mag.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="ml-3 fbt-title-caption media-body">
                                            <span className="pp-post-tag">Family</span>
                                            <h3 className="post-title">
                                                <a href="./single_mag.html">Mihi vero, inquit, placet agi subtilius et pressius.</a>
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post mb-3">
                                    <div className="post-content media align-items-center">
                                        <div className="fbt-item-thumbnail clearfix">
                                            <a href="./single_mag.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="ml-3 fbt-title-caption media-body">
                                            <span className="pp-post-tag">Featured</span>
                                            <h3 className="post-title">
                                                <a href="./single_mag.html">Suspendisse sed tortor eget justo aliquam.</a>
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="post mb-3">
                                    <div className="post-content media align-items-center">
                                        <div className="fbt-item-thumbnail clearfix">
                                            <a href="./single_mag.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="ml-3 fbt-title-caption media-body">
                                            <span className="pp-post-tag">Sport</span>
                                            <h3 className="post-title">
                                                <a href="./single_mag.html">Nunc accumsan ex ligula, in malesuada sapien.</a>
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .fbt-video-gallery --> */}

            <div className="fbt-gallery mb-5">
                <div className="container fbt-elastic-container fbt-gallery-1">
                    <div className="row px-2">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">

                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Ne amores quidem sanctos alienos esse.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-19.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Mihi vero, inquit, placet agi subtilius et pressius.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-21.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Suspendisse sed tortor eget justo aliquam.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 px-2">
                            
                            <div className="post-item">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single_mag.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-12.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-2">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single_mag.html">
                                                Nunc accumsan ex ligula, in malesuada.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .fbt-gallery --> */}

            <div className="container fbt-elastic-container mb-5">
                <div className="widget fbt-ad-block">
                    <div className="fbt_ad text-center">
                        <div className="widget-content">
                            <a href="#">
                                <img alt="" className="img-fluid lazyloaded" data-src="./images/horizontal_ad.jpg" 
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">

                    {/* <!-- Main Wrapper --> */}
                    <div className="fbt-main-wrapper col-lg-8 mb-5 mb-lg-0">

                        <div id="main-wrapper">
                            <div className="main-section" id="main_content">
                                
                                <div className="fbt-sep-title">
                                    <h4 className="title title-heading-left">Recent posts</h4>
                                    <div className="title-sep-container">
                                        <div className="title-sep sep-double"></div>
                                    </div>
                                </div>
                                
                                <div className="blog-posts fbt-index-post-wrap">

                                    <div className="fbt_magazine-blog-post fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Design</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">June 19, 2019</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis leo
                                                    et bibendum pretium. Suspendisse ligula neque, ultrices nec interdum fauc…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Friends</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Nunc tellus libero, tempus id luctus eget, fermentum.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">June 05, 2019</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum.
                                                    Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Slider</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Nulla sed eros sit amet ipsum mattis pulvinar quis quis sem.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">September 13, 2018</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Fames dictumst massa massa, qui sapien per, mauris id sed cubilia
                                                    suspendisse neque. Proin natoque consectetuer urna sed sodales, dignissim condiment…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                                <span className="video-icon"><i className="fa fa-play"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Lifestyle</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet. Custom Post Gallery.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">May 25, 2018</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Phasellus deserunt. Convallis perspiciatis fusce fermentum accumsan, arcu
                                                    aliquam, velit venenatis augue proin, enim etiam dolor. Mi ac lectus vitae …
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-17.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Friends</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">April 02, 2017</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Phasellus deserunt. Convallis perspiciatis fusce fermentum accumsan, arcu
                                                    aliquam, velit venenatis augue proin, enim etiam dolor. Mi ac lectus vitae …
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Friends</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Nunc accumsan ex ligula, in sapien consectetur.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 31, 2017</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum.
                                                    Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-19.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">Carousel</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 30, 2017</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo
                                                    vel nulla posuere accumsan. Suspendisse sed tortor eget justo aliquam euismod.…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fbt_magazine-blog-post hentry fbt-index-post row align-items-center justify-content-between">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="fbt-post-caption mt-3 mt-md-0">
                                                <span className="post-tag index-post-tag">People</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Suspendisse posuere mi lacus, leo gravida eu.
                                                    </a>
                                                </h3>
                                                <div className="post-meta mb-2">
                                                    <span className="post-author"><a href="#">fbtemplates</a></span>
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                                <p className="post-excerpt">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo
                                                    vel nulla posuere accumsan. Suspendisse sed tortor eget justo aliquam euism…
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- .fbt-index-post-wrap --> */}

                                <div className="pagenav" id="blog-pager">
                                    <span className="showpageOf">2 / 3</span>
                                    <span className="showpage firstpage">
                                        <a href="#">
                                            <i className="fa fa-angle-double-left"></i>
                                        </a>
                                    </span>
                                    <span className="showpage">
                                        <a href="#">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                    </span>
                                    <span className="displaypageNum">
                                        <a href="#">1</a>
                                    </span>
                                    <span className="page current">2</span>
                                    <span className="displaypageNum">
                                        <a href="#">3</a>
                                    </span>
                                    <span className="displaypageNum">
                                        <a href="#">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </span>
                                    <span className="displaypageNum lastpage">
                                        <a href="#">
                                            <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </span>
                                </div>
                                {/* <!-- .pagenav --> */}

                            </div>
                        </div>
                        {/* <!-- #main-wrapper --> */}

                    </div>
                    {/* <!-- .fbt-main-wrapper --> */}

                    <div className="fbt-main-sidebar col-lg-4">
                        <div className="fbt-main-sidebar__content h-100 pl-lg-3">

                            <div className="widget FeaturedPost mb-5">
                                <div className="fbt-sep-title">
                                    <h4 className="title title-heading-left">Featured Post</h4>
                                    <div className="title-sep-container">
                                        <div className="title-sep sep-double"></div>
                                    </div>
                                </div>
                                <div className="widget-content">
                                    <div className="FeaturedPostContainer">
                                        <div className="fbt-item-thumbnail">
                                            <a className="post-image-link" href="./single_mag.html">
                                                <img alt=" " className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-title-section mt-3">
                                            <div className="post-meta mb-2">
                                                <span className="post-author">fbtemplates</span>
                                                <span className="post-date published">March 08, 2017</span>
                                            </div>
                                            <h3 className="post-title">
                                                <a href="./single_mag.html">
                                                    Etiam nec enim id mi maximus consequat sed ut tortor.
                                                </a>
                                            </h3>
                                            <p className="post-excerpt">
                                                Suspendisse posuere mi lacus, vitae fringilla leo gravida eu. Donec a nisi
                                                vel ligula fringilla tem…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget fbt_list_posts mb-5">
                                <div className="fbt-sep-title">
                                    <h4 className="title title-heading-left">Popular Posts</h4>
                                    <div className="title-sep-container">
                                        <div className="title-sep sep-double"></div>
                                    </div>
                                </div>
                                <div className="widget-content">
                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-1.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Lifestyle</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">Sed odio eros, dictum non augue et, tincidunt.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-2.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Technology</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html"> Ne amores quidem sanctos alienos esse.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-3.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Featured</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">Suspendisse sed tortor eget justo aliquam euismod.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-4.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Sport</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">Nunc accumsan ex ligula, in malesuada sapien.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-5.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Family</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">Mihi vero, inquit, placet agi subtilius et pressius.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* <!-- .fbt_list_posts --> */}

                            <div className="widget fbt-sticky-content sticky-top fbt-ad-block">
                                <div className="fbt_ad text-center">
                                    <span className="fbt-ad-title">
                                        Advertisement <span className="ad_block"></span>
                                    </span>
                                    <div className="widget-content">
                                        <a href="#">
                                            <img alt="Advertisement" className="lazyloaded img-fluid" data-src="./images/ad-300x600.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- .fbt-ad-block --> */}

                        </div>    
                    </div>
                    {/* <!-- .fbt-main-sidebar --> */}

                    {/* <!-- Sidebar Wrapper --> */}
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <div className="sidebar-wrapper__content">
                            <div className="navigation-container clearfix">
                                <span className="closebtn" >×</span>
                            </div>
                            <div className="sidebar-top section" id="menu_sidebar">
                                <div className="widget LinkList mt-0">
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

        <div className="fbt-newsletter-area">
        <div className="fbt-bottom-section clearfix" id="fbt_bottom_section">

        <div className="widget FollowByEmail">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="follow-by-email-inner subscriber-form col-lg-12">
                                <div className="card-- py-5">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-6">
                                            <h2 className="title mb-4 mb-lg-0 text-center text-lg-left">
                                                Subscribe to our Newsletter!!!
                                            </h2>
                                        </div>
                                        <div className="ml-lg-auto col-lg-6">
                                            <form action="#" className="fbt-email-form" method="post">
                                                <input  className="follow-by-email-address" name="email" placeholder="Enter your Email" type="email"/>
                                                <input className="follow-by-email-submit" type="submit" value="Subscribe"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
                {/* <!-- .FollowByEmail --> */}
    
            </div>
        </div>

        <div className="footer-dark footer-black pt-5" id="footer-content">
            <div className="container pb-4">
                <div className="row clearfix">
                    <div className="col-lg-4">
                        <div className="footer-1 section">
                            <div className="fbt_list_posts">
                                <h4 className="title title-heading">
                                    Latest Articles
                                </h4>
                                <div className="widget-content">

                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-6.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Design</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-2.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Tech</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Nunc tellus libero, tempus id luctus eget, fermentum.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single_mag.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-5.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Featured</span>
                                                <h3 className="post-title">
                                                    <a href="./single_mag.html">
                                                        Mihi vero, inquit, placet agi subtilius et pressius.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                </div>
                            </div>
                            {/* <!-- .fbt_list_posts --> */}
                        </div>
                    </div>
                    <div className="col-lg-6 ml-lg-auto">
                        <div className="row">
                            <div className="col-lg-12 mb-3">
                                <div className="footer-2 section">
                                    <div className="logoImage">
                                        <div className="widget-content">
                                            <img alt="" src="./images/logo-light.png"/>
                                        </div>
                                    </div>
                                    <div className="widget Text">
                                        <div className="widget-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                                Ut porttitor leo vel nulla posuere accumsan. 
                                                Suspendisse sed tortor eget justo aliquam euismod. 
                                                Ut interdum diam nec imperdiet elementum. Proin condimentum faucibus placerat. 
                                                Donec massa justo, porttitor tincidunt eros a, vehicula malesuada tortor. 
                                                Praesent nec sem ut justo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-3 section">
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
                            <div className="col-lg-4">
                                <div className="footer-4 section">
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
                            <div className="col-lg-4 last">
                                <div className="footer-5 section">
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
    </div>
    </>
  )
}
