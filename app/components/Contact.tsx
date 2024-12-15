"use client";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
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
                  <h1 className="text-white">Contact Us</h1>
                  <p className="text-white">
                    Huis autem vel eum iure reprehenderit aui in ea voluptate
                    velit esse ruam nihil molestiae conseuatur.
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <i className="first fa-regular fa-angle-right"></i>
                    <i className="second fa-regular fa-angle-right"></i>
                    <span className="mb-0 box_span">Contact</span>
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
      {/* <!--Contact section--> */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="contact_content" data-aos="fade-right">
                <h5>Our Details</h5>
                <h2>Contact Information</h2>
                <div className="contact-box">
                  <div className="box-image">
                    <figure className="contact-location">
                      <img
                        src="./assets/images/contact-location.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>Location:</h4>
                    <p className="text-size-18">
                      121 King Street, Melbourne Victoria 3000 Australia
                    </p>
                  </div>
                </div>
                <div className="contact-box box-mb">
                  <div className="box-image">
                    <figure className="contact-phone justify-center items-center">
                      <img
                        src="./assets/images/contact-phone.png"
                        alt=""
                        className="img-fluid"
                        height={30}
                        width={30}
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4 className="heading">Phone:</h4>
                    <p>
                      <a
                        href="tel:+61383766284"
                        className="text-decoration-none text text-size-18"
                      >
                        (+61 3 8376 6284)
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+80023456789"
                        className="mb-0 text-decoration-none text text-size-18"
                      >
                        (+800 2345 6789)
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="box-image">
                    <figure className="contact-email">
                      <img
                        src="./assets/images/contact-email.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4 className="heading">Email:</h4>
                    <p>
                      <a
                        href="mailto:info@artelligence.com"
                        className="text-decoration-none text-size-18"
                      >
                        info@artelligence.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:artelligence@gmail.com"
                        className="mb-0 text-decoration-none text-size-18"
                      >
                        artelligence@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="need-section">
                <div className="need_content">
                  <h3>Need any Help!</h3>
                  <p className="text-size-16">
                    Eiusmod tempor in labore et dolore magna aliqua ruis
                    ultrices gravida sit amet.
                  </p>
                  <form
                    id="contactpage"
                    method="POST"
                    action="./contact-form.php"
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
                        <div className=" form-group mb-0">
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
                    <img
                      src="./assets/images/faq-image.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact_map_section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2s!4v1734180757780!5m2!1sen!2s"
              width="1920"
              height="556"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
