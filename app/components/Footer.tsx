import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <section className="footer-section ">
        <div className="container">
          <figure className="footer-sideshape mb-0">
            <Image
              src="/assets/images/footer-sideshape.png"
              alt=""
              width={500}
              height={500}
            />
          </figure>
          <div className="middle-portion">
            <div className="row justify-content-between">
              {/* Logo and Social Section - Left */}
              <div className="col-lg-5 col-md-5 col-sm-6 col-12">
                <Link href="/">
                  <figure className="footer-logo">
                    <Image src="/logo.png" alt="" width={150} height={50} />
                  </figure>
                </Link>
                <p className="text-size-16 footer-text text-white">
                  Empowering the future with cutting-edge AI solutions. We
                  specialize in transforming education, security, and innovation
                  through artificial intelligence.
                </p>
                <ul className="list-unstyled mb-0 social-icons">
                  <li className="circle">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="circle">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="circle">
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links Section - Right */}
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <div className="links">
                  <h4 className="heading text-white">Useful Links</h4>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link
                        href="/"
                        className="text-size-16 text text-decoration-none"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link
                        href="/about"
                        className="text-size-16 text text-decoration-none"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link
                        href="/features"
                        className="text-size-16 text text-decoration-none"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link
                        href="/subscriptions"
                        className="text-size-16 text text-decoration-none"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      <Link
                        href="/contact"
                        className="text-size-16 text text-decoration-none"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Us Section - Far Right */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="icon">
                  <h4 className="heading text-white">Contact us</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="text">
                      <i className="fa fa-phone fa-icon footer-location"></i>
                      <a
                        href="tel:+919019006620"
                        className="mb-0 text text-decoration-none text-size-16"
                      >
                        +91-9019006620
                      </a>
                    </li>
                    <li className="text">
                      <i className="fa fa-envelope fa-icon footer-location"></i>
                      <a
                        href="mailto:support@achillexai.academy"
                        className="mb-0 text text-decoration-none text-size-16"
                      >
                        support@achillexai.academy
                      </a>
                    </li>
                    <li className="text">
                      <i className="fa-solid fa-location-dot footer-location footer-location3"></i>
                      <p className="text-size-16">
                        No 139, Indrani Nilayam, 2nd Floor, 4th Cross, 4th Main,
                        BEML Layout Thubarahalli, Bangalore, 560066
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="fixed-form-container">
            <div className="image">
              <figure className="footer-image mb-0">
                <Image
                  src="/assets/images/footer-image.png"
                  alt=""
                  width={150}
                  height={150}
                />
              </figure>
            </div>
            <div className="body">
              <form id="contactpage1" method="POST" action="./contact-form.php">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name:"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email:"
                    name="emailid"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone:"
                    name="phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form_style"
                    placeholder="Message"
                    rows={3}
                    name="msg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="submit_now text-decoration-none"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div className="copyright">
            <div className="row">
              <div className="col-12">
                <p className="mb-0 text-white">
                  Copyright {new Date().getFullYear()}, Achillex AI Academy All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
