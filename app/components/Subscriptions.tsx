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
                  <div className="content relative">
                    <span className="text-white block mb-2">Starter</span>
                    <h4 className="text-white text-5xl mb-4">$0/month</h4>
                    <p className="text-sm text-white">
                      <ul>
                        <li>AI Coursework</li>
                        <li className="line-through">AI Tutor</li>
                        <li className="line-through">AI Voice Agent (Clyra)</li>
                      </ul>
                    </p>
                    <i className="circle fa-regular fa-angle-right absolute bottom-0 right-0"></i>
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
                  <div className="content relative">
                    <span className="text-white block mb-2">Monthly</span>
                    <h4 className="text-white text-5xl mb-4">$20/month</h4>
                    <p className="text-sm text-white">
                      <ul>
                        <li>AI Coursework</li>
                        <li>AI Tutor</li>
                        <li>AI Voice Agent (Clyra)</li>
                      </ul>
                    </p>
                    <i className="circle fa-regular fa-angle-right absolute bottom-0 right-5"></i>
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
                  <div className="content relative">
                    <span className="text-white block mb-2">Yearly</span>
                    <h4 className="text-white text-5xl mb-4">$200/month</h4>
                    <p className="text-sm text-white">
                      <ul>
                        <li>AI Coursework</li>
                        <li>AI Tutor</li>
                        <li>AI Voice Agent (Clyra)</li>
                      </ul>
                    </p>
                    <i className="circle fa-regular fa-angle-right absolute bottom-0 right-12"></i>
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
