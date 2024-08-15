
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <>
    <div className="slider-container">
        <div className="slider-container-row" id="slider-posts">
          <div className="widget fbt_fp-slider">
            <div className="widget-content">
              <div className="container">
                <div className="row align-items-center slider-width">
                  <div className="col-lg-7">
                    <div className="fbt-shape-container">
                      <div className="fbt-item-thumbnail radius-10">
                        <a className="post-image-link" href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-1.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mt-4 mt-lg-0">
                    <div className="fbt-shape-title pl-xl-5 pl-lg-4">
                      <h1 className="display-4">
                        <a href="./single.html"
                          >Etiam nec enim id mi maximus consequat sed ut
                          tortor.</a
                        >
                      </h1>
                      <div className="post-meta my-4">
                        <span className="post-author">fbtemplates</span>
                        <span className="post-date published">March 08, 2017</span>
                      </div>
                      <Link to={"/Single"}>
                        <span
                          className="fbt_read_more btn btn-primary-slider radius-25 px-5 mt-2"
                          >Keep reading ...</span
                        >
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fbt-main-wrapper col-xl-12">
              <div id="main-wrapper">
                <div className="main-section" id="main_content">
                  <div className="blog-posts fbt-index-post-wrap card-columns">
                    <div className="blog-post fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-2.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published">June 19, 2019</span>
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec facilisis leo et bibendum pretium.
                          Suspendisse li…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-3.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Nunc tellus libero, tempus id luctus eget,
                            fermentum.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published">June 05, 2019</span>
                        </div>
                        <p className="post-excerpt card-text">
                          Donec dolor elit, pellentesque a massa pellentesque,
                          euismod sagittis ipsum. Nullam a diam ac turpis
                          iaculis vu…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./video_post.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-4.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                        <span className="video-icon"
                          ><i className="fa fa-play"></i
                        ></span>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./video_post.html">
                            The future of news blogger themes. Custom post
                            carousel.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >September 13, 2018</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Fames dictumst massa massa, qui sapien per, mauris id
                          sed cubilia suspendisse neque. Proin natoque
                          consectetuer…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-5.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Lorem ipsum dolor sit amet. Custom Post Gallery.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published">May 26, 2018</span>
                        </div>
                        <p className="post-excerpt card-text">
                          Phasellus deserunt. Convallis perspiciatis fusce
                          fermentum accumsan, arcu aliquam, velit venenatis
                          augue proin,…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-6.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Lorem ipsum sit amet, consectetur adipiscing elit.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >April 02, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Phasellus deserunt. Convallis perspiciatis fusce
                          fermentum accumsan, arcu aliquam, velit venenatis
                          augue proin,…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-7.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Nunc accumsan ex ligula, in sapien consectetur.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 31, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Donec dolor elit, pellentesque a massa pellentesque,
                          euismod sagittis ipsum. Nullam a diam ac turpis
                          iaculis vu…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-8.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 30, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut porttitor leo vel nulla posuere accumsan.
                          Suspendis…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-9.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Suspendisse posuere mi lacus, leo gravida eu.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut porttitor leo vel nulla posuere accumsan.
                          Suspendis…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-10.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Duis tempor purus rutrum, tincidunt lacus.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Donec dolor elit, pellentesque a massa pellentesque,
                          euismod sagittis ipsum. Nullam a diam ac turpis
                          iaculis vu…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-11.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Vestibulum maximus ipsum lacus, tempus suscipit
                            augue.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut porttitor leo vel nulla posuere accumsan.
                          Suspendis…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-12.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Etenim semper illud extra est, quod arte
                            comprehenditur.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cum id quoque, ut cupiebat, audivisset, evelli
                          iussit …
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-13.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Morbi lobortis ultricies urna, neque aliquam sit
                            amet.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Maecenas luctus arcu porta accumsan viverra. Sed odio
                          eros, dictum non augue et, tincidunt ullamcorper ex.
                          Sed …
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./video_post.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-14.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                        <span className="video-icon"
                          ><i className="fa fa-play"></i
                        ></span>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./video_post.html">
                            Sed odio eros, dictum non augue et, tincidunt.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec facilisis leo et bibendum pretium.
                          Suspendisse l…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post hentry fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-15.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Suspendisse sed tortor eget justo aliquam euismod.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut porttitor leo vel nulla posuere accumsan.
                          Suspendis…
                        </p>
                      </div>
                    </div>

                    <div className="blog-post fbt-index-post card radius-10">
                      <div className="fbt-post-thumbnail">
                        <a href="./single.html">
                          <img
                            alt=""
                            className="post-thumbnail lazyloaded"
                            data-src="./images/img-16.jpg"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                          />
                        </a>
                      </div>
                      <div className="fbt-post-caption card-body">
                        <h3 className="post-title h4 card-title">
                          <a href="./single.html">
                            Nunc accumsan ex ligula, in malesuada sapien
                            consectetur.
                          </a>
                        </h3>
                        <div className="post-meta">
                          <span className="post-author"
                            ><a href="#">fbtemplates</a></span
                          >
                          <span className="post-date published"
                            >March 28, 2017</span
                          >
                        </div>
                        <p className="post-excerpt card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec facilisis leo et bibendum pretium.
                          Suspendisse l…
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="blog-pager" id="blog-pager">
                    <div className="list-inline">
                      <a
                        className="blog-pager-older-link list-inline-item"
                        href="#"
                        title="More posts"
                      >
                        <div
                          className="fbt-bp-message text-uppercase font-weight-bold"
                        >
                          More posts
                        </div>
                        <span
                          aria-hidden="true"
                          className="fa fa-angle-down"
                        ></span>
                      </a>
                    </div>
                  </div>
                  
                </div>
              </div>
            
     </div>
    </>
  )
}
