import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Subscriptions from "./Subscriptions";

const Pricing = () => {
  return (
    <>
      <div className="sub-banner">
        <Header />
        <figure className="sub-bannersideshape mb-0">
          <img
            src="./assets/images/sub-bannersideshape.png"
            alt=""
            className="img-fluid"
          />
        </figure>
        {/* <!-- Sub-Banner --> */}
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-right">
                  <h1 className="text-white">Our Pricing</h1>
                  <p className="text-white">
                    Discover our competitive pricing plans tailored to your
                    needs.
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <i className="first fa-regular fa-angle-right"></i>
                    <i className="second fa-regular fa-angle-right"></i>
                    <span className="mb-0 box_span">Pricing</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                <div className="banner_wrapper">
                  <figure className="mb-0 sub-bannerimage">
                    <img
                      src="./assets/images/sub-bannerimage.png"
                      alt=""
                      className=""
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <figure className="sub-bannersideshape2 mb-0">
            <img
              src="./assets/images/sub-bannersideshape2.png"
              alt=""
              className="img-fluid"
            />
          </figure>
        </section>
      </div>
      {/* <!-- Subscriptions --> */}
      <Subscriptions />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Pricing;
