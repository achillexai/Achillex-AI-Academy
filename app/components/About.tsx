"use client";
import Header from "./Header";
import Footer from "./Footer";
import { Counter } from "./Counter";

const About = () => {
  return (
    <>
      {/* <!--Header  --> */}
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
                  <h1 className="text-white">About Us</h1>
                  <p className="text-white">
                    At Achillex AI Academy, we are a forward-thinking team
                    dedicated to revolutionizing education through AI
                    innovation. Our mission is to empower learners and educators
                    by delivering cutting-edge tools, personalized learning
                    solutions, and transformative experiences. Committed to
                    excellence and growth, we strive to inspire a future where
                    education is accessible, interactive, and driven by
                    technological advancements. Together, we aim to create
                    lasting impacts in the world of learning.
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <i className="first fa-regular fa-angle-right"></i>
                    <i className="second fa-regular fa-angle-right"></i>
                    <span className="mb-0 box_span">About</span>
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
      {/* <!-- About --> */}
      <section className="aboutpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="aboutpage_wrapper">
                <figure className="mb-0 aboutpage-image">
                  <img
                    src="./assets/images/aboutpage-image.png"
                    alt=""
                    className=""
                  />
                </figure>
                <figure className="mb-0 aboutpage-image2">
                  <img
                    src="./assets/images/aboutpage-image2.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="aboutpage_content">
                <h5>About us</h5>
                <h2>Transforming Education Through AI Innovation</h2>
                <p className="text-size-18">
                  At Achillex AI Academy, we are passionate about transforming
                  education through innovation and technology. Our mission is to
                  empower learners and educators by delivering cutting-edge
                  AI-driven solutions that inspire growth and excellence. With a
                  commitment to quality and personalized learning, we aim to
                  exceed expectations, foster curiosity, and create meaningful,
                  long-lasting impacts in the world of education. Together,
                  we’re shaping the future of learning.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Age-Appropriate Learning: Prebuilt AI tutors tailored to
                    various age groups.
                  </li>
                  <li className="text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Custom AI Solutions: Tools for students, parents, and
                    educators to create personalized AI tutors for any subject.
                  </li>
                  <li className="text text1 text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Future-Ready Skills: Equipping learners with the knowledge
                    to thrive in an AI-driven world.
                  </li>
                </ul>
                <a
                  className="read_more text-decoration-none"
                  href="./about.html"
                >
                  Read More<i className="circle fa-regular fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Counter --> */}
      <section className="counter-section position-relative">
        <div className="container">
          <figure className="counter-sideimage mb-0">
            <img
              src="./assets/images/counter-sideimage.png"
              className="img-fluid"
              alt=""
            />
          </figure>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-box">
                <figure
                  className="counter-image1"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./assets/images/counter-image1.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <Counter end={100} duration={2000} suffix="+" />
                <span className="mb-0 text1 text-size-16">
                  Inbuilt AI Tutors
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-box">
                <figure
                  className="counter-image2"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./assets/images/counter-image2.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>

                <Counter end={20} duration={2000} suffix="+" />
                <span className="mb-0 text1 text-size-16">Countries</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-box">
                <figure
                  className="counter-image3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./assets/images/counter-image3.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <Counter end={300} duration={2000} suffix="+" />
                <span className="mb-0 text1 text-size-16">
                  Subjects Covered
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="counter-box">
                <figure
                  className="counter-image4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="./assets/images/counter-image4.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <Counter end={1000} duration={2000} suffix="+" />
                <span className="mb-0 text1 text-size-16">
                  Personalized Tutors Created
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Info video --> */}
      <div className="videosection mb-10">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="position-relative">
                <a className="popup-vimeo" href="/assets/videos/about-us.mp4">
                  <figure className="mb-0 vediosession">
                    <img
                      className="thumb img-fluid"
                      style={{ cursor: "pointer" }}
                      src="./assets/images/image-vediosession.png"
                      alt=""
                    />
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <section className="mb-[-50px]">
        <Footer />
      </section>
    </>
  );
};

export default About;
