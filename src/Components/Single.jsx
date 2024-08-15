import {Link} from "react-router-dom";
import Sidebar from './Sidebar';
import { useState } from 'react';
export default function Single() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Sidebar show={show} handleClose={handleClose} handleShow={handleShow}/>  
    <div id="fbt-content-overlay"></div>
    <form id="search" role="search">
        <div className="input">
            <input className="search" name="search" placeholder="Search..." type="text" />
            <button className="submit fa fa-search" type="submit" value=""></button>
        </div>
        <button id="close" type="reset" value="">×</button>
    </form>

    <div id="page-wrapper" className="item-view">

         <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
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
                                            <div className="row align-items-center slider-width">
                                                <div className="col-lg-7">
                                                    <div className="fbt-shape-container">
                                                        <div className="fbt-item-thumbnail radius-10">
                                                            <img alt="" className="post-thumbnail lazyloaded" 
                                                                data-src="./images/single-1.jpg"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 mt-4 mt-lg-0">
                                                    <div className="fbt-shape-title pl-xl-5 pl-lg-4">
                                                        <h1 className="post-title display-4">
                                                            Vestibulum maximus ipsum lacus, tempus suscipit augue.
                                                        </h1>
                                                        <div className="item-post-meta mt-4">
                                                            <div className="post-meta">
                                                                <span className="post-author"><a href="#" target="_blank" title="fbtemplates">fbtemplates</a></span>
                                                                <span className="post-date published">March 28, 2017</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <div className="sharepost clearfix">
                                                                <div className="post-share clearfix">
                                                                    <ul>
                                                                        <li><a className="facebook fbt-share" href="#" rel="nofollow" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                                        <li><a className="twitter fbt-share" href="#" rel="nofollow" target="_blank"><i className="fa fa-twitter"></i></a> </li>
                                                                        <li><a className="linkedin fbt-linkedin" href="#" rel="nofollow" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                                                        <li><a className="pinterest fbt-pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                                                                        <li><a className="email fbt-email" href="#" rel="nofollow"><i className="fa fa-envelope-o"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- .slider-container end--> */}

                                        <div className="row justify-content-center">
                                            <div className="col-xl-8 col-lg-9">
                                                 <div className="mt-n5">
                                                    <div className="post-body post-content">
                                                    
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Ut porttitor leo vel nulla posuere accumsan. Suspendisse
                                                        sed tortor eget justo aliquam euismod. Morbi ut massa et
                                                        neque iaculis lacinia a eu est. Etiam nec enim id mi
                                                        maximus consequat sed ut tortor. Nullam velit ipsum,
                                                        ornare id leo a, cursus mollis nunc. Etiam dignissim
                                                        nulla vel ante mollis, lobortis aliquam lectus egestas.
                                                        Vivamus sit amet libero sit amet lorem dignissim varius.
                                                        Nam id dictum sem. Maecenas eget nulla bibendum,
                                                        accumsan arcu ac, vehicula risus. Nulla laoreet elit in
                                                        lectus cursus, at tristique diam fringilla. Donec
                                                        blandit, lacus sed mollis molestie, lorem lacus feugiat
                                                        tortor, nec tincidunt libero dolor sit amet nulla. Sed
                                                        id mi sit amet nibh bibendum aliquet. Sed scelerisque
                                                        aliquam nulla, ultrices egestas elit vestibulum et.
                                                        Praesent efficitur viverra ipsum a molestie. Donec dolor
                                                        elit, pellentesque a massa pellentesque, euismod
                                                        sagittis ipsum. Nullam a diam ac turpis iaculis
                                                        vulputate. Nunc tellus libero, tempus id luctus eget,
                                                        fermentum et quam. Aliquam erat volutpat. Donec sit amet
                                                        nunc vitae justo dapibus dignissim. Vivamus sagittis
                                                        dignissim massa, auctor aliquam nibh aliquam ut. Nunc
                                                        accumsan ex ligula, in malesuada sapien consectetur in.
                                                        Praesent non lectus sed dolor imperdiet mollis a sit
                                                        amet sem. Vivamus eu commodo ligula. Phasellus in lacus
                                                        eu urna ullamcorper lacinia. Duis tincidunt fringilla
                                                        aliquet. Vivamus id luctus tellus. Vestibulum maximus
                                                        ipsum lacus, tempus suscipit augue fermentum ut.
                                                        Suspendisse posuere mi lacus, vitae fringilla leo
                                                        gravida eu. Donec a nisi vel ligula fringilla tempus id
                                                        vitae nibh. Sed sollicitudin ante ultrices purus auctor
                                                        auctor. Etiam turpis sem, mattis sit amet purus id,
                                                        dapibus euismod libero. Donec bibendum urna quis orci
                                                        molestie sodales. Pellentesque habitant morbi tristique
                                                        senectus et netus et malesuada fames ac turpis egestas.
                                                        Nunc id purus vel sapien pretium varius eu id risus.
                                                        Vivamus sit amet nibh sit amet eros porta iaculis. Ut
                                                        interdum diam nec imperdiet elementum. Proin condimentum
                                                        faucibus placerat. Donec massa justo, porttitor
                                                        tincidunt eros a, vehicula malesuada tortor. Praesent
                                                        nec sem ut justo efficitur tempus. <br/>
                                                        <mark>Donec bibendum urna quis orci molestie sodales.
                                                            Pellentesque habitant morbi tristique senectus et
                                                            netus et malesuada fames ac turpis egestas. Nunc id
                                                            purus vel sapien pretium varius eu id risus. Vivamus
                                                            sit amet nibh sit amet eros porta iaculis. Ut
                                                            interdum diam nec imperdiet elementum.</mark> Proin
                                                        condimentum faucibus placerat. Donec massa justo,
                                                        porttitor tincidunt eros a, vehicula malesuada tortor.
                                                        Praesent nec sem ut justo efficitur tempus. Donec dolor
                                                        elit, pellentesque a massa pellentesque, euismod
                                                        sagittis ipsum. Nullam a diam ac turpis iaculis
                                                        vulputate. Nunc tellus libero, tempus id luctus eget,
                                                        fermentum et quam. Aliquam erat volutpat. Donec sit amet
                                                        nunc vitae justo dapibus dignissim. Vivamus sagittis
                                                        dignissim massa, auctor aliquam nibh aliquam ut. Nunc
                                                        accumsan ex ligula, in malesuada sapien consectetur in.
                                                        Praesent non lectus sed dolor imperdiet mollis a sit
                                                        amet sem. Vivamus eu commodo ligula. Phasellus in lacus
                                                        eu urna ullamcorper lacinia. Duis tincidunt fringilla
                                                        aliquet. Vivamus id luctus tellus. Vestibulum maximus
                                                        ipsum lacus, tempus suscipit augue fermentum ut.
                                                        Suspendisse posuere mi lacus, vitae fringilla leo
                                                        gravida eu.<br/>
                                                        Donec bibendum urna quis orci molestie sodales.
                                                        Pellentesque habitant morbi tristique senectus et netus
                                                        et malesuada fames ac turpis egestas. Nunc id purus vel
                                                        sapien pretium varius eu id risus. Vivamus sit amet nibh
                                                        sit amet eros porta iaculis. Ut interdum diam nec
                                                        imperdiet elementum. Proin condimentum faucibus
                                                        placerat. Donec massa justo, porttitor tincidunt eros a,
                                                        vehicula malesuada tortor. Praesent nec sem ut justo
                                                        efficitur tempus.<br/>
                                                        <blockquote className="tr_bq fbt-shape-container">
                                                            <div className="card shadow-lg radius-10 px-5 pt-5 pb-4">
                                                                <p className="pl-5">
                                                                    Donec dolor elit, pellentesque a massa
                                                                    pellentesque, euismod sagittis ipsum. Nullam
                                                                    a diam ac turpis iaculis vulputate. Nunc
                                                                    tellus libero, tempus id luctus eget,
                                                                    fermentum et quam. Aliquam erat volutpat.
                                                                    Donec sit amet nunc vitae justo dapibus
                                                                    dignissim. Vivamus sagittis dignissim massa,
                                                                    auctor aliquam nibh aliquam ut. 
                                                                </p>
                                                            </div>
                                                        </blockquote>
                                                        Nunc accumsan ex ligula, in malesuada sapien consectetur
                                                        in. Praesent non lectus sed dolor imperdiet mollis a sit
                                                        amet sem. Vivamus eu commodo ligula. Phasellus in lacus
                                                        eu urna ullamcorper lacinia. Duis tincidunt fringilla
                                                        aliquet. Vivamus id luctus tellus. Vestibulum maximus
                                                        ipsum lacus, tempus suscipit augue fermentum ut.
                                                        Suspendisse posuere mi lacus, vitae fringilla leo
                                                        gravida eu.
                                                    
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="post-footer">
                                            <div className="row justify-content-center">
                                                <div className="col-xl-8 col-lg-9">
                                                    <div className="row align-items-center my-4">
                                                        <div className="col-lg-8 text-center text-lg-left mb-3 mb-lg-0">
                                                            <div className="post-labels">
                                                                <span className="mr-2">Categories:</span>
                                                                <span className="label-head Label">
                                                                    <a className="label-link badge badge-secondary py-1 px-3" href="#">Lifestyle</a>
                                                                    <a className="label-link badge badge-secondary py-1 px-3" href="#">People</a>
                                                                    <a className="label-link badge badge-secondary py-1 px-3" href="#">Slider</a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 text-center text-lg-right">
                                                            <div className="sharepost clearfix">
                                                                <div className="post-share clearfix">
                                                                    <ul>
                                                                        <li><a className="facebook fbt-share" href="#" rel="nofollow" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                                        <li><a className="twitter fbt-share" href="#" rel="nofollow" target="_blank"><i className="fa fa-twitter"></i></a> </li>
                                                                        <li><a className="linkedin fbt-linkedin" href="#" rel="nofollow" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                                                        <li><a className="pinterest fbt-pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                                                                        <li><a className="email fbt-email" href="#" rel="nofollow"><i className="fa fa-envelope-o"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="fbt-item-post-pager">
                                                <div className="card shadow-lg radius-10 mt-3 mb-5">
                                                    <div className="post-pager row">
                                                        <div
                                                            className="previous col-lg-6 bg-primary px-5 py-5 text-left">
                                                            <a className="fbt-newer-link text-white" href="./single.html">
                                                                <strong className="lead text-left pl-3"><i className="fa fa-angle-left"></i> Previous</strong>
                                                                <div className="h2 text-white fbt-np-title mt-2 pl-3">
                                                                    Morbi lobortis ultricies urna, neque 
                                                                    aliquam sit amet.
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="next col-lg-6 bg-warning px-5 py-5 text-right">
                                                            <a className="fbt-older-link text-white" href="./single.html">
                                                                <strong className="lead text-right pr-3">Next <i className="fa fa-angle-right"></i></strong>
                                                                <div className="h2 text-white text-right fbt-np-title mt-2 pr-3">
                                                                    Etenim semper illud extra est, quod arte
                                                                    comprehenditur.
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="fbt-rel-post-wrapper mb-5">
                                                <div className="row justify-content-center align-items-center">
                                                    <div className="col-xl-3 mb-4 mb-xl-0">
                                                        <div className="title-wrap fbt-shape-title">
                                                            <h3 className="display-4">You may like these posts</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 pl-xl-5">
                                                        <div id="related-posts">
                                                            <div className="row">

                                                                <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 rp-item">
                                                                    <div className="card radius-10">
                                                                        <div className="fbt-post-thumbnail">
                                                                            <a href="./single.html">
                                                                                <div className="fbt-resize lazyloaded" data-src="./images/img-4.jpg"
                                                                                    >
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="fbt-post-caption card-body">
                                                                            <h5>
                                                                                <a href="./single.html">
                                                                                    The future of news blogger themes.
                                                                                </a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 rp-item">
                                                                    <div className="card radius-10">
                                                                        <div className="fbt-post-thumbnail">
                                                                            <a href="./single.html">
                                                                                <div className="fbt-resize lazyloaded" data-src="./images/img-3.jpg"
                                                                                    >
                                                                                </div>
                                                                                <span className="video-icon"><i className="fa fa-play"></i></span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="fbt-post-caption card-body">
                                                                            <h5>
                                                                                <a href="./single.html">
                                                                                    Duis tempor purus rutrum, tincidunt
                                                                                    lacus.
                                                                                </a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 rp-item">
                                                                    <div className="card radius-10">
                                                                        <div className="fbt-post-thumbnail">
                                                                            <a href="./single.html">
                                                                                <div className="fbt-resize lazyloaded" data-src="./images/img-11.jpg"
                                                                                    >
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        <div className="fbt-post-caption card-body">
                                                                            <h5>
                                                                                <a href="./single.html">
                                                                                    Vestibulum maximus ipsum lacus, tempus ...
                                                                                </a>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        {/* <!-- #related-posts --> */}

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .fbt-rel-post-wrapper --> */}

                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-xl-8 col-lg-9">
                                            <div className="blog-post-comments">
                                                <section className="comments embed" id="comments">
                                                    <div className="fbt-comment-button--section list-inline text-center">
                                                        <div className="fbt-comment-button list-inline-item">
                                                            <h3 className="h4 title fbt-comment-title">5 Comments</h3>
                                                            <span className="fa comment_toogle_button"></span>
                                                        </div>
                                                    </div>

                                                    <div className="comment-list--form">
                                                        <div className="comment-list">
                                                            <div className="media comment mb-4 border">
                                                                <a className="mr-4" href="#">
                                                                    <img src="./images/user-1.jpg" alt=""/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <h5 className="mb-2">John Doe</h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. 
                                                                        Suspendisse sed tortor eget justo aliquam euismod.
                                                                    </p>
                                                                    <div className="comments__actions">
                                                                        <span className="button">
                                                                            <a href="#">
                                                                                <i className="fa fa-comments"></i>Reply
                                                                            </a>
                                                                        </span>
                                                                    </div>

                                                                    <div className="comment-reply media mt-4">
                                                                        <a className="mr-4" href="#">
                                                                            <img src="./images/user-2.jpg" alt=""/>
                                                                        </a>
                                                                        <div className="media-body">
                                                                            <h5 className="mb-2">John Doe</h5>
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan.
                                                                            </p>
                                                                            <div className="comments__actions">
                                                                                <span className="button">
                                                                                    <a href="#">
                                                                                    <i className="fa fa-comments"></i>Reply
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!-- .comment-reply --> */}

                                                                </div>
                                                            </div>
                                                            {/* <!-- .comment --> */}

                                                            <div className="media comment mb-4">
                                                                <a className="mr-4" href="#">
                                                                    <img src="./images/user-4.jpg" alt=""/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <h5 className="mb-2">John Doe</h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. 
                                                                        Suspendisse sed tortor eget justo aliquam euismod.
                                                                    </p>
                                                                    <div className="comments__actions">
                                                                        <span className="button">
                                                                            <a href="#">
                                                                                <i className="fa fa-comments"></i>Reply
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- .comment --> */}

                                                            <div className="media comment mb-4">
                                                                <a className="mr-4" href="#">
                                                                    <img src="./images/user-3.jpg" alt=""/>
                                                                </a>
                                                                <div className="media-body">
                                                                    <h5 className="mt-0">John Doe</h5>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. 
                                                                        Suspendisse sed tortor eget justo aliquam euismod.
                                                                    </p>
                                                                    <div className="comments__actions">
                                                                        <span className="button">
                                                                            <a href="#">
                                                                                <i className="fa fa-comments"></i>Reply
                                                                            </a>
                                                                        </span>
                                                                    </div>

                                                                    <div className="comment-reply media mt-4">
                                                                        <a className="mr-4" href="#">
                                                                            <img src="./images/user-4.jpg" alt=""/>
                                                                        </a>
                                                                         <div className="media-body">
                                                                            <h5 className="mt-0">John Doe</h5>
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan.
                                                                            </p>    
                                                                            <div className="comments__actions">
                                                                                <span className="button">
                                                                                    <a href="#">
                                                                                        <i className="fa fa-comments"></i>Reply
                                                                                    </a>
                                                                                </span>
                                                                            </div>
                                                                        </div> 
                                                                    </div>
                                                                    {/* <!-- .comment-reply --> */}

                                                                </div>
                                                            </div>
                                                            {/* <!-- .comment --> */}

                                                            <div className="nav pt-4 mt-n5 mb-5 justify-content-end fbt_bottom_toogle">
                                                                <span>Hide Comments</span>
                                                            </div>

                                                            <div className="fbt-sep-title">
                                                                <h4 className="title title-heading-left">Leave Your Comment</h4>
                                                                <div className="title-sep-container">
                                                                    <div className="title-sep sep-double"></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        {/* <!-- .comment-list --> */}

                                                        <form className="comment-form" method="POST" action="index.html">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Name*</label>
                                                                        <input className="form-control shadow-none radius-0" id="name" name="name" type="text"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>E-mail*</label>
                                                                        <input className="form-control shadow-none radius-0" id="mail" name="mail" type="text"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label >Website</label>
                                                                        <input className="form-control shadow-none radius-0" id="website" name="website" type="text"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Comment*</label>
                                                                        <textarea className="form-control shadow-none radius-0" rows="5" id="comment" name="comment"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-primary radius-0" type="submit" id="submit-contact">
                                                                <i className="fa fa-comment"></i> Post Comment
                                                            </button>
                                                        </form>

                                                    </div>
                                                </section>
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
    </div>
    </>
  )
}
