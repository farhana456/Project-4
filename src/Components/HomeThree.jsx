import { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default function HomeThree() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Sidebar show={show} handleClose={handleClose} handleShow={handleShow}/>
     <div id="fbt-content-overlay" ></div>
    <form  id="search" role="search">
        <div className="input">
            <input className="search" name="search" placeholder="Search..." type="text" />
            <button className="submit fa fa-search" type="submit" value=""></button>
        </div>
        <button id="close" type="reset" value="">×</button>
    </form>
    {/* // <!-- #search --> */}
    <div id="page-wrapper" className="four_columns feed-view">

        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index-3.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation"
                    className="navbar-toggler order-1 order-xl-2" data-target="#navbar-menu" data-toggle="collapse"
                    type="button">☰</button>
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

         <div className="slider-container">
            <div className="slider-container-row" id="slider-posts">
                <div className="widget fbt_fp-slider">
                    <div className="widget-content">
                        <div className="container">
                            <div className="row align-items-center slider-width">
                                <div className="col-lg-7">
                                    <div className="fbt-shape-container">
                                        <div className="fbt-item-thumbnail radius-10">
                                            <a className="post-image-link" href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-17.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-4 mt-lg-0">
                                    <div className="fbt-shape-title pl-xl-5 pl-lg-4">
                                        <h1 className="display-4">
                                            <a href="./single-3.html">Quae quo sunt excelsiores, eo dant clariora indicia naturae.</a>
                                        </h1>
                                        <div className="post-meta my-4">
                                            <span className="post-author">fbtemplates</span>
                                            <span className="post-date published">March 08, 2017</span>
                                        </div>
                                        <a href="./single-3.html">
                                            <span className="fbt_read_more btn btn-primary-slider radius-25 px-5 mt-2">Keep reading ...</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-2.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-3.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./video_post.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-4.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./video_post.html">
                                                    The
                                                    future of news blogger themes. Custom post carousel.
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-5.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-6.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-7.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-8.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-9.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-10.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-11.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-12.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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
                                            <a href="./single-3.html">
                                                <img alt="" className="post-thumbnail lazyloaded"  data-src="./images/img-13.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption card-body">
                                            <h3 className="post-title h4 card-title">
                                                <a href="./single-3.html">
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

        <div className="fbt-bottom-section clearfix" id="fbt_bottom_section">

            <div className="widget FollowByEmail" >
                <div className="widget-content">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="follow-by-email-inner subscriber-form col-lg-10">
                                <div className="card dark-form radius-10 p-5">
                                    <div className="row justify-content-center align-items-center py-3">
                                        <div className="col-lg-3">
                                            <h2 className="title h1 mb-4 mb-lg-0 text-center text-lg-left">
                                                Subscribe to our Newsletter
                                            </h2>
                                        </div>
                                        <div className="col-lg-8 pl-lg-4">
                                            <form action="#" className="fbt-email-form" method="post" >
                                                <input className="follow-by-email-address" name="email" placeholder="Enter your Email" type="email"/>
                                                <input className="follow-by-email-submit" type="submit" value="Subscribe"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- .FollowByEmail --> */}

        </div>

         <div className="fbt-bottom-shape">
            <svg className="fbt-footer-wave-big" preserveAspectRatio="none" version="1.1" viewBox="5 0 1366 222" width="100%">
                <path
                    d="M-2.19,238H1366v-4.27c-67.87-24-146.44-43.08-230.75-53.19-253.33-27.78-293.94,51.64-541.13,29.89C318.08,186.31,289.49,32.92,6.9,11.73c-5.21-.42-10.56-.7-15.9-1V238Z" 
                    transform="translate(9.5 -10.22)">
                </path>
            </svg>
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
                                © <script>document.write(new Date().getFullYear());</script> Nemesis | All Rights Reserved
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
