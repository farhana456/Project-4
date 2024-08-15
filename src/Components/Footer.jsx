

export default function Footer() {
  return (

    <>
     <div className="fbt-bottom-shape">
        <svg
          className="fbt-footer-wave-big"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="5 0 1366 222"
          width="100%"
        >
          <path
            d="M-2.19,238H1366v-4.27c-67.87-24-146.44-43.08-230.75-53.19-253.33-27.78-293.94,51.64-541.13,29.89C318.08,186.31,289.49,32.92,6.9,11.73c-5.21-.42-10.56-.7-15.9-1V238Z"
            transform="translate(9.5 -10.22)"
          ></path>
        </svg>
      </div>

      <div className="footer-dark pt-4" id="footer-content">
        <div className="container pb-4">
          <div className="row clearfix">
            <div className="col-lg-4">
              <div className="footer-1" id="footer-1">
                <div className="logoImage">
                  <div className="widget-content">
                    <img alt="" src="./images/logo-light.png" />
                  </div>
                </div>
                <div className="widget Text">
                  <div className="widget-content">
                    <p>
                      Phasellus deserunt. Convallis perspiciatis fusce fermentum
                      accumsan, arcu aliquam, velit venenatis augue proin, enim
                      etiam dolor. Mi ac lectus vitae cum, fusce purus posuere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 ml-lg-auto">
              <div className="footer-2 section" id="footer-2">
                <div className="widget">
                  <h4 className="title title-heading">About</h4>
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
                  <h4 className="title title-heading">Categories</h4>
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
                  <h4 className="title title-heading">Account</h4>
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
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  Nemesis | All Rights Reserved
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-menu section" id="footer-menu">
                  <div className="widget socialList">
                    <div className="widget-content">
                      <ul className="nav">
                        <li className="nav-item">
                          <a className="nav-link" href="#"
                            ><i className="fa fa-facebook"></i
                          ></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"
                            ><i className="fa fa-twitter"></i
                          ></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"
                            ><i className="fa fa-instagram"></i
                          ></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"
                            ><i className="fa fa-linkedin"></i
                          ></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#"
                            ><i className="fa fa-youtube-play"></i
                          ></a>
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

    </>
    
  )
}
