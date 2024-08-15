
import {Link} from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
     <div id="fbt-content-overlay"></div>
    <form id="search" role="search">
        <div className="input">
            <input className="search" name="search" placeholder="Search..." type="text" />
            <button className="submit fa fa-search" type="submit" value=""></button>
        </div>
        <button id="close" type="reset" value="">×</button>
    </form>
    {/* <!-- #search --> */}

    <div id="page-wrapper" className="error-view">

        <nav className="navbar navbar-expand-xl navbar-fbt fbt-nav-skin fbt_sticky_nav">
            <div className="container nav-mobile-px clearfix">
                <div className="navbar-brand order-2 order-xl-1 m-auto">
                    <a href="./index-2.html"><img alt="Nemesis" src="./images/logo_nemesis.png"/></a>
                </div>
                <button aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler order-1 order-xl-2"
                    data-target="#navbar-menu" data-toggle="collapse" type="button">☰</button>
                <div className="header-buttons order-3 order-lg-4">
                    <span className="fa fa-search navbar-search search-trigger"></span>
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
                            <a href="#" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false"
                                data-toggle="dropdown">Features</a>
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
                            <Link to={"ErrorPage"} className="nav-link">Error Page</Link>
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

                    <div className="fbt-main-wrapper col-xl-12">

                        <div id="main-wrapper">
                            <div className="main-section" id="main_content">

                                <div className="row justify-content-center">
                                    <div className="col-lg-9 ">
                                        <div className="errorWrap card radius-10 shadow-lg p-5 mt-5 text-center">
                                            <h1 className="display-4">
                                                Oooooh!!! <span className="text-primary">Error 404!!!</span>
                                            </h1>
                                            <h3 className="h2 mt-3 mb-4">
                                                Sorry! The page you were looking for, could not be found...
                                            </h3>
                                            <a href="/"><span className="btn btn-outline-dark radius-25 px-4">Go To Homepage</span></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        {/* <!-- #main-wrapper --> */}

                    </div>
                    {/* <!-- .fbt-main-wrapper --> */}

                </div>
            </div>
        </div>

    </div>
    </>
  )
}
