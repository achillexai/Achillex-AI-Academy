import Image from "next/image";
import Link from "next/link";
import React from "react";

const Subscriptions = () => {
  return (
    <>
      <section className="study-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="study_content">
                <h5>Subscriptions</h5>
                <h2>Explore Our Subscriptions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <Link href="/dashboard">
                <div className="case-box overlay">
                  <figure className="image mb-0">
                    <Image
                      src="/assets/images/case-image1.png"
                      alt=""
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="content">
                    <span className="text-white">Starter</span>
                    <h4 className="text-white text-5xl">10$</h4>
                    <p className="text-sm text-white">/month</p>
                    <i className="circle fa-regular fa-angle-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <Link href="/dashboard">
                <div className="case-box overlay">
                  <figure className="image mb-0">
                    <Image
                      src="/assets/images/case-image2.png"
                      alt=""
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="content">
                    <span className="text-white">Professional</span>
                    <h4 className="text-white text-5xl">30$</h4>
                    <p className="text-sm text-white">/month</p>
                    <i className="circle fa-regular fa-angle-right"></i>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <Link href="/dashboard">
                <div className="case-box overlay">
                  <figure className="image mb-0">
                    <Image
                      src="/assets/images/case-image3.png"
                      alt=""
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="content">
                    <span className="text-white">Teams</span>
                    <h4 className="text-white text-5xl">50$</h4>
                    <p className="text-sm text-white">/month</p>
                    <i className="circle fa-regular fa-angle-right"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="button">
            <Link href="/dashboard" className="view_all text-decoration-none">
              Get Started<i className="circle fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscriptions;
