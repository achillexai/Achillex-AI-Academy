"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Choose from "./Choose";

const Features = () => {
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
                <div className="banner_content">
                  <h1 className="text-white">Our Features</h1>
                  <p className="text-white">
                    Discover our cutting-edge features designed to enhance your
                    experience and drive innovation.
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <i className="first fa-regular fa-angle-right"></i>
                    <i className="second fa-regular fa-angle-right"></i>
                    <span className="mb-0 box_span">Features</span>
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
      {/* <!-- Service we provide --> */}
      <section className="provide-section">
        <div className="container">
          <figure className="team-sideimage mb-0">
            <img
              src="./assets/images/team-sideimage.png"
              className="img-fluid"
              alt=""
            />
          </figure>
          <div className="row">
            <div className="col-12">
              <div className="provide_content">
                <h5>Services we provide</h5>
                <h2>
                  Our Purpose is To Deliver Excellence in Service and Execution
                </h2>
              </div>
            </div>
          </div>
          <div className="service_contentbox">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box box-mb">
                  <div className="box-image">
                    <figure className="service-reboticon">
                      <img
                        src="./assets/images/service-reboticon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>Proprietary Achillex Voice Interactive AI</h4>
                    <p className="text-size-16">
                      Enhancing learning experiences through intelligent
                      voice-based assistance.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box box-mb">
                  <div className="box-image">
                    <figure className="service-learningicon">
                      <img
                        src="./assets/images/service-learningicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>AI-Driven E-Learning Platforms</h4>
                    <p className="text-size-16">
                      Transforming education with adaptive and personalized
                      learning tools.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box">
                  <div className="box-image">
                    <figure className="service-scienceicon">
                      <img
                        src="./assets/images/service-scienceicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>Predictive Learning Analytics</h4>
                    <p className="text-size-16">
                      Empowering institutions with insights to improve student
                      outcomes.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box">
                  <div className="box-image">
                    <figure className="service-analysicon">
                      <img
                        src="./assets/images/service-analysicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>STEM Education with AI</h4>
                    <p className="text-size-16">
                      Integrating AI tools to revolutionize science and
                      technology learning.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box">
                  <div className="box-image">
                    <figure className="service-technologyicon">
                      <img
                        src="./assets/images/service-technologyicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>Virtual AI Tutors</h4>
                    <p className="text-size-16">
                      Providing 24/7 assistance to students with AI-enabled
                      tutoring.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="service-box">
                  <div className="box-image">
                    <figure className="service-metalicon">
                      <img
                        src="./assets/images/service-metalicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>AI for Inclusive Learning</h4>
                    <p className="text-size-16">
                      Creating accessible educational solutions for diverse
                      learning needs.
                    </p>
                    <a
                      className="read_more text-decoration-none"
                      href="/dashboard"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Choose --> */}
      <Choose />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Features;
