import Link from "next/link";
import React from "react";

const Choose = () => {
  return (
    <>
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
                  Experience the Future of Learning with AI Innovations
                </h2>
                <p className="text-white text-size-18">
                  At Achillex AI Academy, we blend advanced technology with
                  educational excellence, providing learners with tools and
                  resources to thrive in the modern world.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text-white text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Personalized Learning Experiences
                  </li>
                  <li className="text-white text text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Cutting-Edge AI Tools
                  </li>
                  <li className="text-white text text1 text-size-18">
                    <i className="circle fa-regular fa-angle-right"></i>
                    Data-Driven Progress Insights
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
    </>
  );
};

export default Choose;
