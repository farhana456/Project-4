import { useState } from 'react';
import {Link} from "react-router-dom";
import Sidebar from './Sidebar';
export default function HomeTwo() {

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
    {/* // <!-- #search --> */}

     <div id="page-wrapper" className="full-page feed-view">
        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index-2.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-1 order-xl-2"
                    data-target="#navbar-menu" data-toggle="collapse" type="button">☰</button>
                <div className="header-buttons order-3 order-lg-4">
                    <span className="fa fa-search navbar-search search-trigger"></span>
                    <span className="fbt-sidenav ml-1 active"onClick={handleShow}>☰</span>
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

         <div className="slider-container p-0 fbt-featured--slider">
            <div className="slider-container-row" id="slider-posts">
                <div className="fbt-carousel_container-top">
                    <div className="html-widget-content fbt-magazine-block">
                        <div className="container-fluid px-md-5">
                            <div id="TopSliderPosts" className="carousel slide" data-interval="10000" data-ride="carousel">

                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <div className="fbt-slider-img">
                                            <div className="fbt-resize" >
                                            </div>
                                            <div className="fbt-post-caption carousel-caption">
                                                <div className="container">
                                                    <div className="row justify-content-end">
                                                        <div className="col-xl-7 px-5 px-xl-3 text-center text-lg-right">
                                                            <h2 className="slider-title display-3 text-responsive font-weight-bold">
                                                                <a className="text-white" href="./single-2.html">
                                                                    Quae quo sunt excelsiores, eo dant clariora indicia naturae.
                                                                </a>
                                                            </h2>
                                                            <Link to={"/SingleTwo"}>
                                                                <span className="btn btn-success px-4 py-2 mt-5 radius-25">Continue Reading...</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="fbt-slider-img">
                                            <div className="fbt-resize" >
                                            </div>
                                            <div className="fbt-post-caption carousel-caption">
                                                <div className="container">
                                                    <div className="row justify-content-end">
                                                        <div className="col-xl-7 px-5 px-xl-3 text-center text-lg-right">
                                                            <h2 className="slider-title display-3 text-responsive font-weight-bold">
                                                                <a className="text-white" href="./single-2.html">
                                                                    Nulla profecto est, quin suam vim retineat a primo ad.
                                                                </a>
                                                            </h2>
                                                            <a className="slider-button" href="./single-2.html">
                                                                <span className="btn btn-success px-4 py-2 mt-5 radius-25">Continue Reading...</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="fbt-slider-img">
                                            <div className="fbt-resize">
                                            </div>
                                            <div className="fbt-post-caption carousel-caption">
                                                <div className="container">
                                                    <div className="row justify-content-end">
                                                        <div className="col-xl-7 px-5 px-xl-3 text-center text-lg-right">
                                                            <h2 className="slider-title display-3 text-responsive font-weight-bold">
                                                                <a className="text-white" href="./single-2.html">
                                                                    Hoc dictum in una re latissime patet, ut in omnibus factis.
                                                                </a>
                                                            </h2>
                                                            <a className="slider-button" href="./single-2.html">
                                                                <span className="btn btn-success px-4 py-2 mt-5 radius-25">Continue Reading...</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <a className="carousel-control-prev" data-slide="prev" href="#TopSliderPosts" role="button">
                                    <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" data-slide="next" href="#TopSliderPosts" role="button">
                                    <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                    <span className="sr-only">Next</span>
                                </a>

                                <ol className="carousel-indicators">
                                    <li data-target="#TopSliderPosts" data-slide-to="0" className="active"></li>
                                    <li data-target="#TopSliderPosts" data-slide-to="1" className=""></li>
                                    <li data-target="#TopSliderPosts" data-slide-to="2" className=""></li>
                                </ol>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- fbt-carousel_container-top --> */}
            </div>
        </div>

        <div className="outer-wrapper clearfix" id="outer-wrapper">
            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">

                    {/* <!-- Main Wrapper --> */}
                    <div className="fbt-main-wrapper col-xl-12">

                        <div id="main-wrapper">
                            <div className="main-section" id="main_content">

                                <div className="blog-posts fbt-index-post-wrap card-columns">

                                    <div className="blog-post fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-2.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">June 19, 2019</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Donec facilisis leo et bibendum
                                                pretium. Suspendisse li…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-3.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Nunc tellus libero, tempus id luctus eget, fermentum.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">June 05, 2019</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Donec dolor elit, pellentesque a massa
                                                pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis
                                                iaculis vu…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-4.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    The future of news blogger themes. Custom post carousel.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">September 13, 2018</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Fames dictumst massa massa, qui sapien
                                                per, mauris id sed cubilia suspendisse neque. Proin natoque
                                                consectetuer…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-5.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Lorem ipsum dolor sit amet. Custom Post Gallery.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">May 26, 2018</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Phasellus deserunt. Convallis
                                                perspiciatis fusce fermentum accumsan, arcu aliquam, velit venenatis
                                                augue proin,…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-6.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Lorem ipsum sit amet, consectetur adipiscing elit.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">April 02, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Phasellus deserunt. Convallis
                                                perspiciatis fusce fermentum accumsan, arcu aliquam, velit venenatis
                                                augue proin,…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-7.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Nunc accumsan ex ligula, in sapien consectetur.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 31, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Donec dolor elit, pellentesque a massa
                                                pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis
                                                iaculis vu…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-8.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 30, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut porttitor leo vel nulla posuere
                                                accumsan. Suspendis…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-9.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Suspendisse posuere mi lacus, leo gravida eu.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut porttitor leo vel nulla posuere
                                                accumsan. Suspendis…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-10.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Duis tempor purus rutrum, tincidunt lacus.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Donec dolor elit, pellentesque a massa
                                                pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis
                                                iaculis vu…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-11.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Vestibulum maximus ipsum lacus, tempus suscipit augue.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut porttitor leo vel nulla posuere
                                                accumsan. Suspendis…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-12.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Etenim semper illud extra est, quod arte comprehenditur.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Cum id quoque, ut cupiebat, audivisset,
                                                evelli iussit …
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-13.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Morbi lobortis ultricies urna, neque aliquam sit amet.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Maecenas luctus arcu porta accumsan
                                                viverra. Sed odio eros, dictum non augue et, tincidunt ullamcorper
                                                ex. Sed …
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-14.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Sed odio eros, dictum non augue et, tincidunt.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Donec facilisis leo et bibendum
                                                pretium. Suspendisse l…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post hentry fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-15.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Suspendisse sed tortor eget justo aliquam euismod.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut porttitor leo vel nulla posuere
                                                accumsan. Suspendis…
                                            </p>
                                        </div>
                                    </div>

                                    <div className="blog-post fbt-index-post card radius-10">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-2.html">
                                                <img alt="" className="post-thumbnail lazyloaded"
                                                    data-src="./images/img-16.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-2.html">
                                                    Nunc accumsan ex ligula, in malesuada sapien consectetur.
                                                </a>
                                            </h3>
                                            <div className="post-meta">
                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                <span className="post-date published">March 28, 2017</span>
                                            </div>
                                            <p className="post-excerpt card-text">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Donec facilisis leo et bibendum
                                                pretium. Suspendisse l…
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="blog-pager" id="blog-pager">
                                    <div className="list-inline">
                                        <a className="blog-pager-older-link list-inline-item" href="#" title="More posts">
                                            <div className="fbt-bp-message text-uppercase font-weight-bold">More posts</div>
                                            <span aria-hidden="true" className="fa fa-angle-down"></span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- #blog-pager --> */}

                            </div>
                        </div>
                        {/* <!-- #main-wrapper --> */}

                    </div>
                    {/* <!-- .fbt-main-wrapper --> */}

                    {/* <!-- Sidebar Wrapper --> */}
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <div className="sidebar-wrapper__content">
                            <div className="navigation-container clearfix">
                                <span className="closebtn">×</span>
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
                                <div className="widget">

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

        <div className="fbt-bottom-section clearfix" id="fbt_bottom_section">

            <div className="widget PopularPosts">
                <div className="widget-content">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="title fbt-big-title-text text-center">
                                    <span className="main-title">Our Favorites <span className="title-sec-text">Meet the top articles</span></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid fbt-ppFull-width">
                        <div className="row">

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-11.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-5.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    Nunc tellus libero, tempus id luctus eget, fermentum.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-8.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    Nunc accumsan ex ligula, in sapien consectetur.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-10.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-12.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    Suspendisse posuere mi lacus, leo gravida eu.
                                                </a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item col-6 col-xl p-0">
                                <div className="post card shadow-none">
                                    <div className="fbt-item-thumbnail clearfix">
                                        <a href="./single-2.html">
                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                data-src="./images/img-4.jpg"
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                        </a>
                                    </div>
                                    <div className="card-img-overlay">
                                        <div className="fbt-post-title-content d-table">
                                            <h3 className="h5 post-title text-white d-table-cell align-bottom">
                                                <a className="text-white" href="./single-2.html">
                                                    The future of news blogger themes. Custom post carousel.
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
            {/* <!-- PopularPosts --> */}

        </div>

        <div className="footer-light pt-4" id="footer-content">
            <div className="container pb-4">
                <div className="row clearfix">

                    <div className="col-lg-4">
                        <div className="footer-1" id="footer-1">
                            <div className="logoImage">
                                <div className="widget-content">
                                    <img alt="" width="220" src="./images/logo_nemesis.png"/>
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
     </div>
    
    </>
   
  )
}
