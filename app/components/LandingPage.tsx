"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import Footer from "./Footer";
import Subscriptions from "./Subscriptions";
import AnimatedTextBox from "./AnimatedTextBox";

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

// For refreshing the page every minute
const LandingPage: React.FC = () => {
  useEffect(() => {
    // Check if we need to refresh
    const shouldRefresh = () => {
      const lastRefresh = localStorage.getItem("lastRefreshTime");
      const now = new Date().getTime();

      // If no previous refresh or more than 1 minute ago
      if (!lastRefresh || now - parseInt(lastRefresh) > 60000) {
        localStorage.setItem("lastRefreshTime", now.toString());
        return true;
      }
      return false;
    };

    if (shouldRefresh()) {
      window.location.reload();
    }
  }, []);

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

        <div className="relative left-60 top-[-40px] z-10">
          <AnimatedTextBox />
        </div>

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
              <div className="about_content">
                <h5>About us</h5>
                <h2>Empowering Learners Through Innovation</h2>
                <p className="text-size-18">
                  Welcome to Achillex AI Academy, the future of education
                  powered by advanced artificial intelligence. Our mission is to
                  make learning smarter, personalized, and accessible for
                  everyone—students, parents, and educators alike. In today’s
                  fast-paced world, traditional education often struggles to
                  meet individual needs. That’s where Achillex AI Academy steps
                  in. Our platform combines cutting-edge AI technology with
                  innovative teaching methods to create an environment where
                  learning is tailored, engaging, and effective. Experience the
                  power of AI to transform learning and teaching. Inclusive and
                  Accessible: Designed for students of all ages, educators of
                  all levels, and parents who want the best for their children.
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
                <a className="read_more text-decoration-none" href="./about">
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
              <div className="service_content">
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
                      <figure
                        className="service-reboticon"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
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
                        <figure
                          className="service-learningicon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
                      <figure
                        className="service-scienceicon"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
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
                        <figure
                          className="service-analysicon"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
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
      <section className="choose-section relative overflow-hidden">
        <div className="container">
          <figure className="choose-sideshape mb-0">
            <img src="/assets/images/choose-sideshape.png" alt="" />
          </figure>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
              <div className="choose_wrapper mt-20">
                <figure className="mb-0 choose-image">
                  <img src="/assets/images/choose-image.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <div className="choose_content">
                <h5>Why Choose Us</h5>
                <h2 className="text-white">
                  Empowering Learning with AI Excellence
                </h2>
                <p className="text-white text-size-18">
                  At Achillex AI Academy, we redefine education by combining the
                  power of AI with innovative teaching methods, equipping
                  learners to excel in a rapidly evolving world.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text-white text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Tailored Learning Journeys: Customized AI-driven pathways
                    designed to suit individual learning styles and goals.
                  </li>
                  <li className="text-white text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Innovative AI-Powered Tools: Access state-of-the-art AI
                    solutions for interactive and immersive education.
                  </li>
                  <li className="text-white text text1 text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Real-Time Performance Analytics: Gain actionable insights to
                    track progress and improve outcomes effortlessly.
                  </li>
                </ul>
                <Link
                  href="/dashboard"
                  className="read_more text-decoration-none"
                >
                  Get Started
                  <i className="circle fa-regular fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="choose-sideshape2 mb-0">
          <img src="/assets/images/choose-sideshape2.png" alt="" />
        </figure>
      </section>

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
                            src="./assets/images/person2.png"
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
                            src="./assets/images/person3.png"
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
            <div className="partner">
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
              <div className="faq_content">
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
                                  <h4>
                                    What makes Achillex AI Academy different
                                    from other online learning platforms?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Achillex AI Academy emphasizes personalized,
                                    practical learning. We offer tailored AI
                                    courses with mentorship from industry
                                    experts, hands-on projects, and tools to
                                    apply your knowledge directly to real-world
                                    scenarios. Our focus is on empowering
                                    learners for impactful careers in AI-related
                                    fields.
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
                                    How is Achillex AI Academy&#39;s AI
                                    Different from ChatGPT or Gemini?
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
                                    Achillex AI Academy&#39;s AI tutors are
                                    powered by our proprietary Achillex AI,
                                    which is uniquely designed for education.
                                    Achilles AI leverages insights and data from
                                    general- purpose AIs like ChatGPT and Gemini
                                    but integrates them into a highly customized
                                    framework. This makes our AI:
                                    <br />
                                    1. Exclusive to Achillex AI Academy,
                                    tailored specifically for skill-building and
                                    educational excellence.
                                    <br />
                                    2. Optimized to provide structured,
                                    adaptive, and personalized learning paths
                                    that general-purpose AIs cannot replicate.
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
                                    What kind of subscriptions does Achillex AI
                                    Academy offer?
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
                                    We provide flexible subscription plans,
                                    including monthly, quarterly, and annual
                                    options. Subscribers gain unlimited access
                                    to all course materials, updates, and
                                    exclusive content like AI tutors and
                                    advanced AI tools as our exclusive one of a
                                    kind Voice Based AI tutor.
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
                                  <h4>
                                    How Do AI Tutors Work at Achillex AI
                                    Academy?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    At Achillex AI Academy, our AI tutors
                                    revolutionize the learning experience by
                                    providing personalized, interactive, and
                                    real-time guidance. These AI-powered virtual
                                    tutors are designed to help learners
                                    progress efficiently and effectively in
                                    their AI education.
                                    <br />
                                    Key features of our AI tutors include:
                                    <br />
                                    1.Personalized Learning Paths: Tailor your
                                    curriculum based on your skill level,
                                    learning pace, and career goals.
                                    <br />
                                    2. 24/7 Assistance: Get instant answers to
                                    your questions, practice problem-solving,
                                    and receive feedback on your projects
                                    anytime.
                                    <br />
                                    3. Interactive Sessions: Engage in simulated
                                    discussions, coding challenges, and
                                    scenario-based learning with AI tutors.
                                    <br />
                                    4. Performance Tracking: Receive detailed
                                    insights into your progress, strengths, and
                                    areas for improvement.
                                    <br />
                                    Achillex AI Academy’s AI tutors are built
                                    using state-of-the-art AI models, ensuring a
                                    seamless and enriching learning experience.
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
                                  <h4>
                                    Does Achillex AI Academy Cater to All Age
                                    Groups?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse"
                                aria-labelledby="headingFive"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Yes! Achillex AI Academy is designed to
                                    cater to learners of all age groups. Whether
                                    you&#39;re a curious child exploring the
                                    basics of AI, a college student diving
                                    deeper into machine learning, or a
                                    professional seeking to upskill, our courses
                                    are tailored to your needs.
                                    <br />
                                    We offer:
                                    <br />
                                    1. Kid-Friendly Programs: Simplified, fun,
                                    and interactive courses to introduce
                                    children to AI concepts.
                                    <br />
                                    2. Student-Focused Learning: Comprehensive
                                    modules for school and college students to
                                    build strong foundations in AI.
                                    <br />
                                    3. Professional Development Tracks: Advanced
                                    courses for working professionals and
                                    researchers to enhance their expertise.
                                    <br />
                                    Our platform ensures everyone, regardless of
                                    age, can explore and excel in the world of
                                    AI!
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-card faq-mb">
                              <div className="card-header" id="headingSix">
                                <a
                                  href="#"
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseSix"
                                  aria-expanded="false"
                                  aria-controls="collapseSix"
                                >
                                  <h4>
                                    Can I Create Custom AI Tutors for Specific
                                    Topics?
                                  </h4>
                                </a>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse"
                                aria-labelledby="headingSix"
                              >
                                <div className="card-body visible">
                                  <p className="text-size-18 text-left mb-0">
                                    Absolutely! Achillex AI Academy not only
                                    offers prebuilt AI tutors tailored for
                                    various age groups but also empowers
                                    students, parents, and educators to create
                                    custom AI tutors for any topic.
                                    <br />
                                    With our user-friendly tools, you can:
                                    <br />
                                    1. Design AI tutors that focus on specific
                                    subjects or areas of interest.
                                    <br />
                                    2. Customize the teaching style, difficulty
                                    level, and content to suit individual
                                    learning needs.
                                    <br />
                                    3. Develop unique learning paths for
                                    specialized or niche topics not covered by
                                    prebuilt tutors.
                                    <br />
                                    This feature ensures a personalized learning
                                    experience, enabling you to address unique
                                    educational goals and challenges
                                    effectively.
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
