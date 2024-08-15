

export default function SubscribeForm() {
  return (
     <div className="fbt-bottom-section clearfix" id="fbt_bottom_section">

            <div className="widget FollowByEmail" >
                <div className="widget-content">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="follow-by-email-inner subscriber-form col-lg-10">
                                <div className="card radius-10 p-5">
                                    <div className="row justify-content-center align-items-center py-3">
                                        <div className="col-lg-3">
                                            <h2 className="title h1 mb-4 mb-lg-0 text-center text-lg-left">
                                                Subscribe to our Newsletter
                                            </h2>
                                        </div>
                                        <div className="col-lg-8 pl-lg-4">
                                            <form action="#" className="fbt-email-form" method="post" >
                                                <input className="follow-by-email-address" name="email" placeholder="Enter your Email" type="email"></input>
                                                <input className="follow-by-email-submit" type="submit" value="Subscribe">
                                            </input>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div> 
      </div>  

  )
}
