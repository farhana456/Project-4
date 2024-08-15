

export default function HomeSix() {
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

    <div id="page-wrapper" className="magazine-view bg-light feed-view magazine_2">

        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav m-0">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index-6.html"><img alt="Nemesis" src="./images/logo-light.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-1 order-xl-2" 
                    data-target="#navbar-menu" data-toggle="collapse" type="button">☰</button>
                <div className="header-buttons order-3 order-lg-4">
                    <span className="fa fa-search navbar-search search-trigger"></span>
                    <span className="fbt-sidenav ml-1 active" >☰</span>
                </div>
                <div className="collapse navbar-collapse order-4 order-xl-3 clearfix" id="navbar-menu">
                    <ul className="navbar-nav m-auto clearfix">
                        <li className="nav-item">
                            <a href="./index-6.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="./blog-2.html" className="nav-link">Blog</a>
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                                                                    <a href="./single-6.html">
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
                            <a href="./error.html" className="nav-link">Error Page</a>
                        </li>
                        <li className="nav-item dropdown fbt-megamenu mega-grid d-none d-xl-block">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lifestyle</a>
                            <div className="dropdown-menu fullwidth sub-mega-grid py-4">
                                <div className="container px-3">
                                    <div className="row px-2">
                                        <div className="col px-2">
                                            <div className="fbt-mega-item">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
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
                                                    <a href="./single-6.html">
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
                                                    <a href="./single-6.html">
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
                                                    <a href="./single-6.html">
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
                                                    <a href="./single-6.html">
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

        <div className="slider-container mt-0 mb-5 pt-5 pb-0 clearfix">
            <div className="slider-container-row fbt-mag-slider slider-2" id="slider-posts">
                <div className="container">
                    <div className="row slider-width">

                        <div className="col-lg-7 pr-lg-2 mb-2 mb-lg-0">
                            <div className="post-item large-thumb">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption p-4">
                                        <span className="post-tag index-post-tag">Technology</span>
                                        <h1 className="post-title w-75">
                                            <a href="./single-6.html">
                                                <span className="fbt-bg-white">Vestibulum maximus ipsum lacus, tempus suscipit.</span>
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 pl-lg-2">
                            <div className="post-item large-thumb">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption p-4">
                                        <span className="post-tag index-post-tag">Android</span>
                                        <h2 className="post-title w-75 h1">
                                            <a href="./single-6.html">
                                                <span className="fbt-bg-white">Mihi vero, inquit, placet agi subtilius et pressius.</span>
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="fbt-gallery mb-5">
            <div className="container fbt-elastic-container fbt-gallery-1">
                <div className="row px-2">

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                        <div className="post-item card shadow-none">
                            <div className="fbt-post-thumbnail">
                                <a href="./single-6.html">
                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                </a>
                                <span className="video-icon"><i className="fa fa-play"></i></span>
                            </div>
                            <div className="fbt-post-caption">
                                <div className="title-caption text-center pt-3 px-4 pb-4">
                                    <div className="post-meta mb-2">
                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                        <span className="post-date published">June 19, 2019</span>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="./single-6.html">
                                            Ne amores quidem sanctos alienos esse.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                        <div className="post-item card shadow-none">
                            <div className="fbt-post-thumbnail">
                                <a href="./single-6.html">
                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                </a>
                            </div>
                            <div className="fbt-post-caption">
                                <div className="title-caption text-center pt-3 px-4 pb-4">
                                    <div className="post-meta mb-2">
                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                        <span className="post-date published">June 19, 2019</span>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="./single-6.html">
                                            Mihi vero, inquit, placet agi subtilius et pressius.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0 px-2">
                        <div className="post-item card shadow-none">
                            <div className="fbt-post-thumbnail">
                                <a href="./single-6.html">
                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                </a>
                                <span className="video-icon"><i className="fa fa-play"></i></span>
                            </div>
                            <div className="fbt-post-caption">
                                <div className="title-caption text-center pt-3 px-4 pb-4">
                                    <div className="post-meta mb-2">
                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                        <span className="post-date published">June 19, 2019</span>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="./single-6.html">
                                            Suspendisse sed tortor eget justo aliquam.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 px-2">
                        <div className="post-item card shadow-none">
                            <div className="fbt-post-thumbnail">
                                <a href="./single-6.html">
                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                </a>
                            </div>
                            <div className="fbt-post-caption">
                                <div className="title-caption text-center pt-3 px-4 pb-4">
                                    <div className="post-meta mb-2">
                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                        <span className="post-date published">June 19, 2019</span>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="./single-6.html">
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

        <div className="outer-wrapper my-5" id="outer-wrapper">

            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">
                    
                    <div className="fbt-magazine-section col-xl-9 col-lg-8 mb-5 mb-lg-0">

                        <div className="widget fbt-block-3">
                            <div className="fbt_mag_block fbt_grid_posts">
                                <div className="fbt-large px-2">
                                    <div className="row">

                                        <div className="col-xl-5 col-lg-6 mb-3 px-2">
                                            <div className="post card shadow-none">
                                                <div className="fbt-post-thumbnail">
                                                    <span className="post-tag index-post-tag">Nature</span>
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-21.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption text-center py-3 px-4">
                                                    <div className="post-meta mb-2">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">June 19, 2019</span>
                                                    </div>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Ne amores quidem sanctos alienos esse.
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-7 col-lg-6 mb-3 px-2">
                                            <div className="post card shadow-none">
                                                <div className="fbt-post-thumbnail">
                                                    <span className="post-tag index-post-tag">Turism</span>
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-19.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="title-caption text-center py-3 px-4">
                                                    <div className="post-meta mb-2">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">June 19, 2019</span>
                                                    </div>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </a>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="fbt-small px-2">
                                    <div className="row">

                                        <div className="col-md-4 mb-3 px-2">
                                            <div className="post">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-11.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-title-caption w-85">
                                                    <div className="title-caption pt-3 px-2">
                                                        <span className="post-tag index-post-tag">Lifestyle</span>
                                                        <h3 className="post-title h4">
                                                            <a href="./single-6.html">
                                                                <span className="fbt-bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-3 px-2">
                                            <div className="post">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-14.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-title-caption w-85">
                                                    <div className="title-caption pt-3 px-2">
                                                        <span className="post-tag index-post-tag">Training</span>
                                                        <h3 className="post-title h4">
                                                            <a href="./single-6.html">
                                                                <span className="fbt-bg-white">Sed odio eros, dictum non augue et, tincidunt.</span>
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="post col-md-4 mb-3 px-2">
                                            <div className="post">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-16.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-title-caption w-85">
                                                    <div className="title-caption pt-3 px-2">
                                                        <span className="post-tag index-post-tag">Nature</span>
                                                        <h3 className="post-title h4">
                                                            <a href="./single-6.html">
                                                                <span className="fbt-bg-white">Nunc tellus libero, tempus id luctus eget, fermentum.</span>
                                                            </a>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* <!-- .fbt-small --> */}

                            </div>
                        </div>
                        {/* <!-- .fbt-block-3 --> */}

                        <div className="row">
                            <div className="fbt-magazine-sidebar sidebar-inside col-xl-4">
                                <div className="fbt-magazine-sidebar__content h-100">
                                    <div className="widget fbt-block-4 card shadow-none fbt-sticky-content sticky-top pt-2 px-3 pb-3 mb-5">
                                        <div className="fbt-sep-title mt-1">
                                            <h4 className="title title-heading-left">Whats New</h4>
                                            <div className="title-sep-container">
                                                <div className="title-sep sep-double"></div>
                                            </div>
                                        </div>
                                        <div className="widget-content">
                                            <div className="fbt-large">
                                                <div className="fbt-item-thumbnail">
                                                    <a className="post-image-link" href="./single-6.html">
                                                        <img alt=" " className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg" 
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                                <div className="fbt-title-section mt-3">
                                                    <div className="post-meta mb-2">
                                                        <span className="post-author">fbtemplates</span>
                                                        <span className="post-date published">March 08, 2019</span>
                                                    </div>
                                                    <h5 className="post-title m-0">
                                                        <a href="./single-6.html">
                                                            Etiam nec enim id mi maximus consequat sed ut tortor.
                                                        </a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="fbt_list_posts fbt_small_thumb">
                                                <article className="post border-top mt-2 pt-2">
                                                    <div className="post-content media align-items-center">
                                                        <div className="fbt-item-thumbnail clearfix">
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-1.jpg"
                                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="ml-3 fbt-title-caption media-body">
                                                            <h3 className="post-title">
                                                                <a href="./single-6.html">Sed odio eros, dictum non augue et...</a>
                                                            </h3>
                                                            <div className="post-meta">
                                                                <span className="post-date published">March 28, 2019</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="post border-top mt-2 pt-2">
                                                    <div className="post-content media align-items-center">
                                                        <div className="fbt-item-thumbnail clearfix">
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-2.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="ml-3 fbt-title-caption media-body">
                                                            <h3 className="post-title">
                                                                <a href="./single-6.html"> Ne amores quidem sanctos alienos...</a>
                                                            </h3>
                                                            <div className="post-meta">
                                                                <span className="post-date published">March 27, 2019</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="post border-top mt-2 pt-2">
                                                    <div className="post-content media align-items-center">
                                                        <div className="fbt-item-thumbnail clearfix">
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-4.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="ml-3 fbt-title-caption media-body">
                                                            <h3 className="post-title">
                                                                <a href="./single-6.html">Nunc accumsan ex ligula, in sapien...</a>
                                                            </h3>
                                                            <div className="post-meta">
                                                                <span className="post-date published">March 28, 2019</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="fbt-magazine-blocks col-xl-8">
                                <div className="fbt-magazine-blocks__inside">

                                    <div className="widget fbt-block-5">

                                        <div className="fbt_magazine-post fbt-large first_post mb-3">
                                            <div className="fbt-post-thumbnail">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="fbt-post-caption">
                                                <div className="title-caption p-4">
                                                    <span className="post-tag index-post-tag">Android</span>
                                                    <h2 className="post-title h1 w-75">
                                                        <a href="./single-6.html">
                                                            <span className="fbt-bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="row px-2">

                                            <div className="col-md-6 px-2 mb-3">
                                                <div className="card shadow-none">
                                                    <div className="fbt_magazine-post fbt-small">
                                                        <div className="fbt-post-thumbnail">
                                                            <span className="post-tag index-post-tag">Windows</span>
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-16.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="fbt-post-caption text-center pt-3 px-4 pb-4">
                                                            <div className="post-meta mb-2">
                                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                                <span className="post-date published">June 05, 2019</span>
                                                            </div>
                                                            <h5 className="post-title m-0">
                                                                <a href="./single-6.html">
                                                                    Nunc tellus libero, tempus id luctus eget, fermentum.
                                                                </a>
                                                            </h5>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 px-2 mb-3">
                                                <div className="card shadow-none">
                                                    <div className="fbt_magazine-post fbt-small">
                                                        <div className="fbt-post-thumbnail">
                                                            <span className="post-tag index-post-tag">Company</span>
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-17.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="fbt-post-caption text-center pt-3 px-4 pb-4">
                                                            <div className="post-meta mb-2">
                                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                                <span className="post-date published">September 13, 2018</span>
                                                            </div>
                                                            <h5 className="post-title m-0">
                                                                <a href="./single-6.html">
                                                                    Nulla sed eros sit amet ipsum mattis pulvinar quis...
                                                                </a>
                                                            </h5>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 px-2 mb-3">
                                                <div className="card shadow-none">
                                                    <div className="fbt_magazine-post fbt-small">
                                                        <div className="fbt-post-thumbnail">
                                                            <span className="post-tag index-post-tag">Apple</span>
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-5.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                            <span className="video-icon"><i className="fa fa-play"></i></span>
                                                        </div>
                                                        <div className="fbt-post-caption text-center pt-3 px-4 pb-4">
                                                            <div className="post-meta mb-2">
                                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                                <span className="post-date published">May 25, 2018</span>
                                                            </div>
                                                            <h5 className="post-title m-0">
                                                                <a href="./single-6.html">
                                                                    Lorem ipsum dolor sit amet. Custom Post Gallery.
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 px-2 mb-3">
                                                <div className="card shadow-none">
                                                    <div className="fbt_magazine-post fbt-small">
                                                        <div className="fbt-post-thumbnail">
                                                            <span className="post-tag index-post-tag">People</span>
                                                            <a href="./single-6.html">
                                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/img-12.jpg"
                                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                            </a>
                                                        </div>
                                                        <div className="fbt-post-caption text-center pt-3 px-4 pb-4">
                                                            <div className="post-meta mb-2">
                                                                <span className="post-author"><a href="#">fbtemplates</a></span>
                                                                <span className="post-date published">March 28, 2019</span>
                                                            </div>
                                                            <h5 className="post-title m-0">
                                                                <a href="./single-6.html">
                                                                    Suspendisse posuere mi lacus, leo gravida eu.
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- .fbt-magazine-blocks__inside --> */}
                            </div>
                        </div>

                    </div>
                    {/* <!-- .fbt-magazine-section --> */}

                    <div className="fbt-magazine-sidebar col-xl-3 col-lg-4">
                        <div className="fbt-magazine-sidebar__content h-100">
                            
                            <div className="sidebar-block fbt-social-counter card shadow-none pt-2 px-3 pb-3 mb-5">
                                <div className="fbt-sep-title mt-1">
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

            <div className="fbt-gallery bg-black py-5 mb-5">
                <div className="container fbt-elastic-container fbt-gallery-1 py-3">
                    <div className="row px-2">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">

                            <div className="post-item card shadow-none">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-4 pb-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single-6.html">
                                                Mihi vero, inquit, placet agi subtilius et pressius.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                            
                            <div className="post-item card shadow-none">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-19.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-4 pb-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single-6.html">
                                                Ne amores quidem sanctos alienos esse.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 px-2">
                            
                            <div className="post-item card shadow-none">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-21.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-4 pb-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single-6.html">
                                                Suspendisse sed tortor eget justo aliquam.
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-2">
                            
                            <div className="post-item card shadow-none">
                                <div className="fbt-post-thumbnail">
                                    <a href="./single-6.html">
                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                    </a>
                                </div>
                                <div className="fbt-post-caption">
                                    <div className="title-caption text-center pt-3 px-4 pb-4">
                                        <div className="post-meta mb-2">
                                            <span className="post-author">
                                                <a href="#">fbtemplates</a>
                                            </span>
                                            <span className="post-date published">June 19, 2019</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href="./single-6.html">
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

            <div className="container fbt-elastic-container">
                <div className="row justify-content-center">

                    <div className="fbt-main-sidebar sidebar-left col-xl-3 col-md-6 mb-5 mb-md-0 order-2 order-xl-1">
                        <div className="fbt-main-sidebar__content h-100">

                            <div className="sidebar-block fbt-social-counter card shadow-none pt-2 px-3 pb-3 mb-5">
                                <div className="fbt-sep-title mt-1">
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
                                    </ul>
                                    {/* <!-- .social-list --> */}
                                </div>
                            </div>

                            <div className="widget fbt_list_posts fbt_small_thumb fbt-sticky-content sticky-top bg-white border-0 pb-2">
                                <div className="bg-primary py-2 mb-2 text-center">
                                    <h4 className="title title-heading text-white text-uppercase">Trending News</h4>
                                </div>
                                <div className="widget-content">
                                    <article className="post border-bottom px-2 pb-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-1.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Sed odio eros, dictum non augue et...</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-2 py-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-2.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html"> Ne amores quidem sanctos alienos...</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-2 py-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-3.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Suspendisse sed tortor eget justo...</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-2 py-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-4.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Nunc accumsan ex ligula, in sapien...</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-2 py-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-5.jpg"
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Mihi vero, inquit, placet agi subtilius...</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post px-2 pt-2">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-6.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">
                                                        Lorem ipsum dolor sit amet, consectetur...
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* <!-- .fbt_list_posts --> */}

                        </div>
                    </div>

                    <div className="fbt-main-wrapper col-xl-6 mb-5 mb-xl-0 order-1 order-xl-2">

                        <div id="main-wrapper">
                            <div className="main-section" id="main_content">
                                <div className="blog-posts fbt-index-post-wrap">

                                    <div className="fbt_magazine-blog-post fbt-index-post first_post mb-3">
                                        <div className="fbt-post-thumbnail">
                                            <a href="./single-6.html">
                                                <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-13.jpg"
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-post-caption">
                                            <div className="title-caption p-4">
                                                <span className="post-tag index-post-tag">Android</span>
                                                <h2 className="post-title h1 w-75">
                                                    <a href="./single-6.html">
                                                        <span className="fbt-bg-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-14.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Windows</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Nunc tellus libero, tempus id luctus eget, fermentum.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">June 05, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-15.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Company</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Nulla sed eros sit amet ipsum mattis pulvinar quis quis sem.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">September 13, 2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-16.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                    <span className="video-icon"><i className="fa fa-play"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Apple</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Lorem ipsum dolor sit amet. Custom Post Gallery.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">May 25, 2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-17.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Tech</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Lorem ipsum sit amet, consectetur adipiscing elit.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">April 02, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-18.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Friends</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Nunc accumsan ex ligula, in sapien consectetur.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">March 31, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-19.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">Turism</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">March 30, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card shadow-none mb-3">
                                        <div className="fbt_magazine-blog-post fbt-index-post row align-items-center mb-0 justify-content-between">
                                            <div className="col-xl-6 col-md-5">
                                                <div className="fbt-post-thumbnail">
                                                    <a href="./single-6.html">
                                                        <img alt="" className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg"
                                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-7">
                                                <div className="fbt-post-caption text-center text-md-left p-4 p-md-0 pr-md-4">
                                                    <span className="post-tag index-post-tag">People</span>
                                                    <h3 className="post-title">
                                                        <a href="./single-6.html">
                                                            Suspendisse posuere mi lacus, leo gravida eu.
                                                        </a>
                                                    </h3>
                                                    <div className="post-meta">
                                                        <span className="post-author"><a href="#">fbtemplates</a></span>
                                                        <span className="post-date published">March 28, 2019</span>
                                                    </div>
                                                </div>
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

                    <div className="fbt-main-sidebar col-xl-3 col-md-6 order-3">
                        <div className="fbt-main-sidebar__content h-100">

                            <div className="widget FeaturedPost card shadow-none pt-2 px-3 pb-3 mb-5">
                                <div className="fbt-sep-title mt-1">
                                    <h4 className="title title-heading-left">Featured Post</h4>
                                    <div className="title-sep-container">
                                        <div className="title-sep sep-double"></div>
                                    </div>
                                </div>
                                <div className="widget-content">
                                    <div className="FeaturedPostContainer">
                                        <div className="fbt-item-thumbnail">
                                            <a className="post-image-link" href="./single-6.html">
                                                <img alt=" " className="post-thumbnail lazyloaded" data-src="./images/mag-img-20.jpg" 
                                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                            </a>
                                        </div>
                                        <div className="fbt-title-section text-center mt-3">
                                            <div className="post-meta mb-2">
                                                <span className="post-author">fbtemplates</span>
                                                <span className="post-date published">March 08, 2019</span>
                                            </div>
                                            <h5 className="post-title m-0">
                                                <a href="./single-6.html">
                                                    Etiam nec enim id mi maximus consequat sed ut tortor.
                                                </a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget fbt_list_posts fbt_free_thumb bg-white border-0 pb-3 mb-5">
                                <div className="bg-black py-2 mb-2 text-center">
                                    <h4 className="title title-heading text-white text-uppercase">Popular Posts</h4>
                                </div>
                                <div className="widget-content">
                                    <article className="post border-bottom px-3 pb-2">
                                        <div className="post-content">
                                            <div className="fbt-title-caption text-center">
                                                <span className="pp-post-tag">Lifestyle</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Sed odio eros, dictum non augue et, tincidunt.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-3 py-2">
                                        <div className="post-content pt-1">
                                            <div className="fbt-title-caption text-center">
                                                <span className="pp-post-tag">Technology</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html"> Ne amores quidem sanctos alienos esse.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-3 py-2">
                                        <div className="post-content">
                                            <div className="fbt-title-caption text-center">
                                                <span className="pp-post-tag">Featured</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Suspendisse sed tortor eget justo aliquam euismod.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post border-bottom px-3 py-2">
                                        <div className="post-content">
                                            <div className="fbt-title-caption text-center">
                                                <span className="pp-post-tag">Sport</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Nunc accumsan ex ligula, in malesuada sapien.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post px-3 pt-2">
                                        <div className="post-content">
                                            <div className="fbt-title-caption text-center">
                                                <span className="pp-post-tag">Family</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">Mihi vero, inquit, placet agi subtilius et pressius.</a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
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

        <div className="fbt-newsletter-area bg-white">
            <div className="fbt-bottom-section clearfix" id="fbt_bottom_section">

                <div className="widget FollowByEmail">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="follow-by-email-inner subscriber-form col-lg-12">
                                <div className="py-5">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-6">
                                            <h2 className="title mb-4 mb-lg-0 text-center text-lg-left">
                                                Subscribe to our Newsletter!!!
                                            </h2>
                                        </div>
                                        <div className="ml-lg-auto col-lg-6">
                                            <form action="#" className="fbt-email-form" method="post">
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
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-6.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Design</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 28, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-2.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Tech</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">
                                                        Nunc tellus libero, tempus id luctus eget, fermentum.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="post mb-3">
                                        <div className="post-content media align-items-center">
                                            <div className="fbt-item-thumbnail clearfix">
                                                <a href="./single-6.html">
                                                    <img alt="" className="post-thumbnail lazyloaded" data-src="./images/thumb-5.jpg" 
                                                        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                                                </a>
                                            </div>
                                            <div className="ml-3 fbt-title-caption media-body">
                                                <span className="pp-post-tag">Featured</span>
                                                <h3 className="post-title">
                                                    <a href="./single-6.html">
                                                        Mihi vero, inquit, placet agi subtilius et pressius.
                                                    </a>
                                                </h3>
                                                <div className="post-meta">
                                                    <span className="post-date published">March 27, 2019</span>
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
