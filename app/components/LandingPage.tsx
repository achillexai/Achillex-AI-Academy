"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import Choose from "./Choose";
import Subscriptions from "./Subscriptions";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/favicon/manifest.json" />
      </Head>
      <div className="banner_outer">
        {/* Header */}
        <Header />

        <figure className="banner-sideshape">
          <Image
            src="/assets/images/banner-sideshape.png"
            alt=""
            width={500}
            height={500}
          />
        </figure>

        <div className="robot overflow-hidden relative pt-8">
          <div className="overflow-hidden transform mx-[-100px] sm:mx-[-40px] md:mx-[-0px] scale-[1.5] md:scale-[1.2] origin-center">
            <Script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.3.5/build/spline-viewer.js"
            />
            <spline-viewer url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"></spline-viewer>
          </div>
        </div>

        {/* Hero Section */}
        <section className="banner-section">
          <div className="container-fluid">
            <div className="mt-8 z-10 relative">
              <div className="banner_content justify-center text-center z-10 relative">
                <h1 className="text-white justify-center text-center text-xl sm:text-3xl md:text-5xl lg:text-8xl uppercase">
                  Achillex AI Academy
                </h1>
                <p className="text-white p-0 text-center">
                  Revolutionize Learning with AI: Smarter, Faster, Personalized
                  Education for Everyone.
                </p>
                <div className="banner-button ">
                  <Link
                    href="/dashboard"
                    className="lets_talk text-decoration-none"
                  >
                    Get Started
                    <i className="circle fa-regular fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <figure className="banner-sideshape2 mb-0">
            <Image
              src="/assets/images/banner-sideshape2.png"
              alt=""
              width={500}
              height={500}
            />
          </figure>
        </section>
      </div>
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_wrapper">
                <figure className="mb-0 about-image1">
                  <img
                    src="./assets/images/about-image1.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <figure className="mb-0 about-image2">
                  <img
                    src="./assets/images/about-image2.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_content" data-aos="fade-right">
                <h5>About us</h5>
                <h2>Empowering Learners Through Innovation</h2>
                <p className="text-size-18">
                  At Achillex AI Academy, we believe in transforming education
                  by empowering individuals with cutting-edge AI-driven learning
                  tools. Our mission is to make advanced knowledge accessible,
                  personalized, and impactful for learners of all ages.
                </p>
                <div className="about-lowercontent">
                  <div className="image">
                    <figure className="mb-0 icon">
                      <img
                        src="./assets/images/about-customer.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="content">
                    <h4>Age-Appropriate Learning</h4>
                    <p className="text-size-18">
                      Prebuilt AI tutors tailored to various age groups.
                    </p>
                  </div>
                  <div className="image">
                    <figure className="mb-0 icon">
                      <img
                        src="./assets/images/about-quality.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="content">
                    <h4>Custom AI Solutions</h4>
                    <p className="text-size-18 text">
                      Tools for students, parents, and educators to create
                      personalized AI tutors for any subject.
                    </p>
                  </div>
                </div>
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
      {/* Features Section */}
      <section className="service-section position-relative">
        <div className="container">
          <figure className="service-image mb-0">
            <Image
              src="/assets/images/service-image.png"
              alt=""
              width={500}
              height={500}
            />
          </figure>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_content" data-aos="fade-right">
                <h5>Features we provide</h5>
                <h2>Our Purpose is To Deliver Excellence in Everything</h2>
                <Link
                  href="/dashboard"
                  className="read_more text-decoration-none"
                >
                  Get Started
                  <i className="circle fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box box-mb">
                      <figure className="service-reboticon">
                        <Image
                          src="/assets/images/service-reboticon.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </figure>
                      <h4>Proprietary Achillex Voice Interactive AI</h4>
                      <p className="text-size-16 mb-2">
                        Enhancing learning experiences through intelligent
                        voice-based assistance.
                      </p>
                      <Link
                        href="/dashboard"
                        className="read_more text-decoration-none"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box box-mb">
                        <figure className="service-learningicon">
                          <Image
                            src="/assets/images/service-learningicon.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </figure>
                        <h4>AI-Driven E-Learning Platforms</h4>
                        <p className="text-size-16 mb-2">
                          Transforming education with adaptive and personalized
                          learning tools.
                        </p>
                        <Link
                          href="/dashboard"
                          className="read_more text-decoration-none"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box">
                      <figure className="service-scienceicon">
                        <Image
                          src="/assets/images/service-scienceicon.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </figure>
                      <h4>Predictive Learning Analytics</h4>
                      <p className="text-size-16 mb-2">
                        Empowering institutions with insights to improve student
                        outcomes.
                      </p>
                      <Link
                        href="/dashboard"
                        className="read_more text-decoration-none"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box">
                        <figure className="service-analysicon">
                          <Image
                            src="/assets/images/service-analysicon.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </figure>
                        <h4>STEM Education with AI</h4>
                        <p className="text-size-16 mb-2">
                          Integrating AI tools to revolutionize science and
                          technology learning.
                        </p>
                        <Link
                          href="/dashboard"
                          className="read_more text-decoration-none"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <Choose />

      {/* Subscription Section */}
      <Subscriptions />

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row position-relative">
            <div className="col-12">
              <div className="heading">
                <h5>Testimonials</h5>
                <h2>Hear it From Our Clients</h2>
              </div>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonial_content">
                      <div className="content-box">
                        <p className="h4">
                          “The AI tutors at Achillex Academy transformed my
                          learning experience completely. Having a personalized
                          mentor available 24/7 helped me master complex topics
                          at my own pace. The voice assistant feature made
                          studying feel like having conversations with a
                          knowledgeable friend.”
                        </p>
                        <figure className="testimonial-image mb-0">
                          <img
                            src="./assets/images/testimonial-image.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <span className="text-size-18">Peter Johns</span>
                        <span className="text-size-16 mb-0">
                          Head of informatics at EBI
                        </span>
                        <div className="box">
                          <figure className="testimonial-comas mb-0">
                            <img
                              src="./assets/images/testimonial-comas.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial_content">
                      <div className="content-box">
                        <p>
                          “As a working professional, Achillex AI Academy's
                          flexibility is invaluable. The voice assistant lets me
                          study during my commute, and the AI tutors adapt to my
                          schedule. They've thought of everything to make
                          learning seamless and engaging. Can't recommend it
                          enough!”
                        </p>
                        <figure className="testimonial-image mb-0">
                          <img
                            src="./assets/images/testimonial-image.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <span className="text-size-18">Ryan Storm</span>/
                        <span className="text-size-16 mb-0">
                          CTO at TechSolutions Inc.
                        </span>
                        <div className="box">
                          <figure className="testimonial-comas">
                            <img
                              src="./assets/images/testimonial-comas.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonial_content">
                      <div className="content-box">
                        <p>
                          “What sets Achillex apart is how the AI tutors
                          understand your learning style. They adjust their
                          teaching methods based on your progress and
                          preferences. The voice assistant feature is incredibly
                          natural - it's like having a study buddy who never
                          gets tired.”
                        </p>
                        <figure className="testimonial-image mb-0">
                          <img
                            src="./assets/images/testimonial-image.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <span className="text-size-18">Graham Bolt</span>/
                        <span className="text-size-16 mb-0">
                          CEO at Bolt Innovations
                        </span>
                        <div className="box">
                          <figure className="testimonial-comas">
                            <img
                              src="./assets/images/testimonial-comas.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-outer">
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa-solid fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                  </a>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa-solid fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <figure className="mb-0 testimonial-sideimage">
            <img
              src="./assets/images/testimonial-sideimage.png"
              alt=""
              className="img-fluid"
            />
          </figure>
        </div>
        {/* <!-- Partner --> */}
        <div className="partner-section">
          <div className="container">
            <div className="partner" data-aos="fade-up">
              <ul className="mb-0 list-unstyled">
                <li>
                  <figure className="mb-0 partner1 img1">
                    <img
                      className="img-fluid"
                      src="./assets/images/partner1.png"
                      alt=""
                    />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner2 img2">
                    <img
                      className="img-fluid"
                      src="./assets/images/partner2.png"
                      alt=""
                    />
                  </figure>
                </li>
                <li className="img-mb">
                  <figure className="mb-0 partner1 partner3 img3">
                    <img
                      className="img-fluid"
                      src="./assets/images/partner3.png"
                      alt=""
                    />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner4 img4">
                    <img
                      className="img-fluid"
                      src="./assets/images/partner4.png"
                      alt=""
                    />
                  </figure>
                </li>
                <li>
                  <figure className="mb-0 partner1 partner5 img5">
                    <img
                      className="img-fluid"
                      src="./assets/images/partner5.png"
                      alt=""
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="faq_content" data-aos="fade-right">
                <h5>faq's</h5>
                <h2>Frequently Asked Questions</h2>
                <div className="faq">
                  <div className="row">
                    <div className="col-12">
                      <div className="accordian-section-inner position-relative">
                        <div className="accordian-inner">
                          <div id="accordion1">
                            <div className="accordion-card">
                              <div className="card-header" id="headingOne">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  <h4>Can I cancel at anytime?</h4>
                                </a>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Yes, you can cancel anytime
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingTwo">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <h4>
                                    My team has credits. How do we use them?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Once your team signs up for a subscription
                                    plan. This is where we sit down, grab a cup
                                    of coffee and dial in the details.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingThree">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <h4>
                                    How does Achillex AI Academy's pricing work?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0 ">
                                    Our subscriptions are tiered. Understanding
                                    the task at hand and ironing out the
                                    wrinkles is key.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card">
                              <div className="card-header" id="headingFour">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  <h4>How secure is Achillex AI Academy?</h4>
                                </a>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Protecting the data you trust to Achillex AI
                                    Academy is our first priority. This part is
                                    really crucial in keeping the project in
                                    line to completion.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card faq-mb">
                              <div className="card-header" id="headingFive">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseFive"
                                  aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  <h4>Upgrade subscription type?</h4>
                                </a>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse"
                                aria-labelledby="headingFive"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    There may be times when you need to upgrade
                                    your subscription from the original type you
                                    purchased and we have a solution that
                                    ensures you can upgrade your subscription
                                    purchase.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="need-section">
                <div className="need_content">
                  <h3>Need any Help!</h3>
                  <p className="text-size-16">
                    Have a question or need assistance? Send us a message!
                  </p>
                  <form
                    id="contactpage"
                    method="POST"
                    action="/contact-form.php"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Your Name:"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <input
                            type="email"
                            className="form_style"
                            placeholder="Your Email:"
                            name="emailid"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <input
                            type="tel"
                            className="form_style"
                            placeholder="Phone:"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0">
                          <textarea
                            className="form_style"
                            placeholder="Message"
                            rows={3}
                            name="msg"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="manage-button text-center">
                      <button
                        type="submit"
                        className="submit_now text-decoration-none"
                      >
                        Submit Now
                        <i className="circle fa-regular fa-angle-right"></i>
                      </button>
                    </div>
                  </form>
                  <figure className="faq-image mb-0">
                    <Image
                      src="/assets/images/faq-image.png"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <FaqSection /> */}

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LandingPage;
