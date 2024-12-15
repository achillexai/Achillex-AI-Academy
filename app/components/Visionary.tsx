"use client";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Visionary = () => {
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
                  <h1 className="text-white">
                    Meet the Visionary: Sai Kiran CS
                  </h1>
                  <p className="text-white text-justify">
                    Sai Kiran CS, the visionary founder of Achillex AIRA
                    Intelligence Pvt Ltd, is the driving force behind a series
                    of transformative projects, including the Achillex AI
                    Academy. This academy is one of the company’s flagship
                    initiatives, designed to revolutionize the global education
                    landscape. Under his leadership, the academy uses artificial
                    intelligence to create personalized, accessible, and
                    innovative learning experiences, empowering students
                    worldwide to reach their fullest potential. Achillex AIRA
                    Intelligence is not just about education; it’s about
                    creating impactful solutions across several critical
                    sectors. In addition to AI-driven education, Sai Kiran is
                    overseeing pioneering projects in healthcare, women’s
                    safety, policing, and military intelligence. His work is
                    reshaping industries and offering new, AI-powered solutions
                    to some of society’s most pressing challenges. The company
                    itself is a testament to Sai Kiran’s dedication and vision,
                    with Achillex AIRA Intelligence being officially registered
                    under Startup India. Featured in major media outlets like
                    the Times of India and Free Press Journal, Sai Kiran’s work
                    continues to garner national recognition. Anoma Sai Kiran,
                    his wife, is an integral part of the Achillex AIRA
                    Intelligence leadership team, serving as one of the
                    directors. Together, they have created a legacy of
                    innovation and progress that will impact generations to
                    come. The company’s name, &quot;Achillex AIRA
                    Intelligence,&quot; also reflects the special bond with
                    their daughter, Anayra, who is lovingly called Aira. This
                    connection highlights the family’s shared vision and
                    commitment to shaping a brighter future for the world.
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <i className="first fa-regular fa-angle-right"></i>
                    <i className="second fa-regular fa-angle-right"></i>
                    <span className="mb-0 box_span">Meet The Visionary</span>
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
      {/* <!-- Member --> */}
      <section className="team-section">
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
              <div className="team_content">
                <h5>Our Visionary</h5>
                <h2>Meet The Visionary</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center" data-aos="fade-up">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="team-box">
                <figure>
                  <img
                    src="./assets/images/team-image1.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <div className="content">
                  <h4>Sai Kiran CS</h4>
                  <span className="text-size-16">Visionary</span>
                  <ul className="list-unstyled mb-0">
                    <li className="icons">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="icons">
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li className="icons">
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Visionary;
